const { SpeakerApplication } = require('../models');
const { speakerApplicationSchema } = require('../utils/validate');
const { sendSpeakerApplicationConfirmationEmail } = require('../utils/mailer');


async function speakerApplicationRegister(req, res) {

  const { error, value } = speakerApplicationSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const details = error.details.map(d => d.message);
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors: details,
    });
  }

  const { firstName, lastName, email, linkedinLink, expertiseDescription } = value;

  try {

    const existing = await SpeakerApplication.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered for speaker application.',
      });
    }


    const application = await SpeakerApplication.create({
      firstName,
      lastName,
      email,
      linkedinLink: linkedinLink || null,
      expertiseDescription,
    });


    sendSpeakerApplicationConfirmationEmail(application).catch(err =>
      console.error('[SpeakerApplication] Email send error:', err.message)
    );


    return res.status(201).json({
      success: true,
      message: 'Speaker application successful. Details have been sent to your email.',
    });
  } catch (err) {
    console.error('[SpeakerApplication] Error:', err);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again.',
    });
  }
}


async function getAllSpeakerApplications(req, res) {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
    const offset = (page - 1) * limit;

    const { count, rows: applications } = await SpeakerApplication.findAndCountAll({
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    const totalPages = Math.ceil(count / limit);

    return res.status(200).json({
      success: true,
      data: {
        applications,
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
    console.error('[SpeakerApplicationController] getAllSpeakerApplications error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch speaker applications.',
    });
  }
}


async function deleteSpeakerApplication(req, res) {
  try {
    const { id } = req.params;
    const application = await SpeakerApplication.findByPk(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: `Speaker application with ID ${id} not found.`,
      });
    }

    await application.destroy();

    return res.status(200).json({
      success: true,
      message: `Speaker application with ID ${id} has been successfully deleted.`,
    });
  } catch (err) {
    console.error('[SpeakerApplicationController] deleteSpeakerApplication error:', err);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete speaker application.',
    });
  }
}


module.exports = { 
  speakerApplicationRegister,
  getAllSpeakerApplications,
  deleteSpeakerApplication,
};
