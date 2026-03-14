const { ProductShowcase } = require('../models');
const { productShowcaseSchema } = require('../utils/validate');
const { sendProductShowcaseConfirmationEmail } = require('../utils/mailer');


async function productShowcaseRegister(req, res) {

  const { error, value } = productShowcaseSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: details,
    });
  }

  const { firstName, lastName, email, productLink, projectDescription } = value;

  try {

    const existing = await ProductShowcase.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered for the product showcase.',
      });
    }


    const registration = await ProductShowcase.create({
      firstName,
      lastName,
      email,
      productLink: productLink || null,
      projectDescription,
    });


    sendProductShowcaseConfirmationEmail(registration).catch(err =>
      console.error('[ProductShowcase] Email send error:', err.message)
    );


    return res.status(201).json({
      success: true,
      message: 'Product showcase registration successful. Event details have been sent to your email.',
    });
  } catch (err) {
    console.error('[ProductShowcase] Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again.',
    });
  }
}


async function getAllProductShowcases(req, res) {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const offset = (page - 1) * limit;

    const { count, rows: showcases } = await ProductShowcase.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json({
      success: true,
      data: {
        showcases,
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
    console.error('[ProductShowcaseController] getAllProductShowcases error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch product showcases.',
    });
  }
}


async function deleteProductShowcase(req, res) {
  try {
    const { id } = req.params;
    const showcase = await ProductShowcase.findByPk(id);

    if (!showcase) {
      return res.status(404).json({
        success: false,
        message: `Product showcase with ID ${id} not found.`,
      });
    }

    await showcase.destroy();

    return res.status(200).json({
      success: true,
      message: `Product showcase with ID ${id} has been successfully deleted.`,
    });
  } catch (err) {
    console.error('[ProductShowcaseController] deleteProductShowcase error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete product showcase.',
    });
  }
}


module.exports = { 
  productShowcaseRegister,
  getAllProductShowcases,
  deleteProductShowcase,
};
