const { HackathonRegistration } = require('../models');
const { hackathonRegisterSchema } = require('../utils/validate');
const { sendHackathonConfirmationEmail } = require('../utils/mailer');


async function hackathonRegister(req, res) {

  const { error, value } = hackathonRegisterSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: details,
    });
  }

  const { firstName, lastName, email, githubPortfolio, projectDescription } = value;

  try {

    const existing = await HackathonRegistration.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered for the hackathon.',
      });
    }


    const registration = await HackathonRegistration.create({
      firstName,
      lastName,
      email,
      githubPortfolio: githubPortfolio || null,
      projectDescription,
    });


    sendHackathonConfirmationEmail(registration).catch(err =>
      console.error('[HackathonRegister] Email send error:', err.message)
    );


    return res.status(201).json({
      success: true,
      message: 'Hackathon registration successful. Event details have been sent to your email.',
    });
  } catch (err) {
    console.error('[HackathonRegister] Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again.',
    });
  }
}


async function getAllHackathonRegistrations(req, res) {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const offset = (page - 1) * limit;

    const { count, rows: registrations } = await HackathonRegistration.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json({
      success: true,
      data: {
        registrations,
        pagination: {
          total: count,
          page,
          limit,
          totalPages,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
      },
    });
  } catch (err) {
    console.error('[HackathonController] getAllHackathonRegistrations error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch hackathon registrations.',
    });
  }
}


async function deleteHackathonRegistration(req, res) {
  try {
    const { id } = req.params;
    const registration = await HackathonRegistration.findByPk(id);

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: `Hackathon registration with ID ${id} not found.`,
      });
    }

    await registration.destroy();

    return res.status(200).json({
      success: true,
      message: `Hackathon registration with ID ${id} has been successfully deleted.`,
    });
  } catch (err) {
    console.error('[HackathonController] deleteHackathonRegistration error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete hackathon registration.',
    });
  }
}


module.exports = { 
  hackathonRegister,
  getAllHackathonRegistrations,
  deleteHackathonRegistration,
};
