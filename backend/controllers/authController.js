const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { registerSchema, adminLoginSchema } = require('../utils/validate');
const { sendConfirmationEmail } = require('../utils/mailer');


async function register(req, res) {

  const { error, value } = registerSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: details,
    });
  }

  const {
    firstName,
    lastName,
    corporateEmail,
    phone,
    industry,
    city,
    country,
  } = value;

  try {
   
    const existingEmail = await User.findOne({ where: { corporateEmail } });
    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: 'This corporate email is already registered.',
      });
    }

    const existingPhone = await User.findOne({ where: { phone } });
    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: 'This phone number is already registered.',
      });
    }


    const user = await User.create({
      firstName,
      lastName,
      corporateEmail,
      phone,
      industry: industry || null,
      city: city || null,
      country: country || null,
    });

    
    sendConfirmationEmail(user).catch(err =>
      console.error('[Register] Email send error:', err.message)
    );

  
    return res.status(201).json({
      success: true,
      message: 'Registration successful. Event details have been sent to your email.',
    });
  } catch (err) {
    console.error('[Register] Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again.',
    });
  }
}


async function adminLogin(req, res) {

  const { error, value } = adminLoginSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: details,
    });
  }

  const { email, password } = value;

  try {
  
    if (email !== process.env.ADMIN_EMAIL) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    
    const isMatch = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

   
    const token = jwt.sign(
      { email: process.env.ADMIN_EMAIL, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error('[AdminLogin] Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again.',
    });
  }
}

module.exports = { 
  register,
  adminLogin 
};
