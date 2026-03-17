const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


/**
 * @param {Object} user 
 * @param {string} user.firstName 
 * @param {string} user.corporateEmail 
 * @param {number} [attempt=1] 
 */
async function sendConfirmationEmail(user, attempt = 1) {
  const maxAttempts = 3;
  const retryDelayMs = 2000;

  const mailOptions = {
    from: `"Benue BlockchainAI Fest" <${process.env.EMAIL_USER}>`,
    to: user.corporateEmail,
    subject: 'Event Registration Successful',
    text: `Hello ${user.firstName},

Thank you for registering for the Benue BlockchainAI Fest!

Event Details:

Date: ${process.env.EVENT_DATE}
Venue: ${process.env.EVENT_VENUE}

Follow us:

Twitter: ${process.env.SOCIAL_TWITTER}
Facebook: ${process.env.SOCIAL_FACEBOOK}
YouTube: ${process.env.SOCIAL_YOUTUBE}

We look forward to seeing you!

Warm regards,
The Benue BlockchainAI Fest Team`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 40px 30px; text-align: center; }
    .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
    .header p { color: #aad4f5; margin: 8px 0 0; font-size: 14px; }
    .body { padding: 30px; color: #333333; }
    .body h2 { color: #1a1a2e; }
    .event-box { background: #f0f8ff; border-left: 4px solid #00d4ff; padding: 16px 20px; border-radius: 4px; margin: 20px 0; }
    .event-box p { margin: 6px 0; font-size: 15px; }
    .social { margin-top: 24px; }
    .social a { display: inline-block; margin-right: 12px; color: #00d4ff; text-decoration: none; font-weight: bold; }
    .footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 16px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 Registration Confirmed!</h1>
      <p>Benue BlockchainAI Fest</p>
    </div>
    <div class="body">
      <h2>Hello ${user.firstName},</h2>
      <p>Thank you for registering for the <strong>Benue BlockchainAI Fest</strong>! We're excited to have you join us.</p>

      <div class="event-box">
        <p> <strong>Date:</strong> ${process.env.EVENT_DATE}</p>
        <p> <strong>Venue:</strong> ${process.env.EVENT_VENUE}</p>
      </div>

      <p>Stay connected and follow us on social media for updates:</p>
      <div class="social">
        <a href="${process.env.SOCIAL_TWITTER}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X (Twitter)" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_FACEBOOK}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_YOUTUBE}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="20" height="20" />
        </a>
      </div>

      <p style="margin-top: 30px;">We look forward to seeing you there! 🚀</p>
    </div>
    <div class="footer">
      &copy; 2026 Benue BlockchainAI Fest. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Mailer] Confirmation email sent to ${user.corporateEmail} (attempt ${attempt})`);
  } catch (error) {
    console.error(
      `[Mailer] Failed to send email to ${user.corporateEmail} (attempt ${attempt}):`,
      error.message
    );
    if (attempt < maxAttempts) {
      console.log(`[Mailer] Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, retryDelayMs));
      return sendConfirmationEmail(user, attempt + 1);
    } else {
      console.error(`[Mailer] All ${maxAttempts} attempts failed for ${user.corporateEmail}.`);
     
    }
  }
}



/**
 * @param {Object} registration
 * @param {string} registration.firstName
 * @param {string} registration.email
 * @param {string} registration.projectDescription
 * @param {number} [attempt=1]
 */
async function sendHackathonConfirmationEmail(registration, attempt = 1) {
  const maxAttempts = 3;
  const retryDelayMs = 2000;

  const mailOptions = {
    from: `"Benue BlockchainAI Fest" <${process.env.EMAIL_USER}>`,
    to: registration.email,
    subject: 'Hackathon Registration Confirmed – Benue BlockchainAI Fest',
    text: `Hello ${registration.firstName},

Your hackathon registration has been received! We're thrilled to have you competing in the Benue BlockchainAI Fest Hackathon.

Event Details:

Date: ${process.env.EVENT_DATE}
Venue: ${process.env.EVENT_VENUE}

Follow us:

Twitter: ${process.env.SOCIAL_TWITTER}
Facebook: ${process.env.SOCIAL_FACEBOOK}
YouTube: ${process.env.SOCIAL_YOUTUBE}

Get ready to build, innovate, and win!

Warm regards,
The Benue BlockchainAI Fest Team`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 40px 30px; text-align: center; }
    .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
    .header p { color: #aad4f5; margin: 8px 0 0; font-size: 14px; }
    .body { padding: 30px; color: #333333; }
    .body h2 { color: #1a1a2e; }
    .event-box { background: #f0f8ff; border-left: 4px solid #00d4ff; padding: 16px 20px; border-radius: 4px; margin: 20px 0; }
    .event-box p { margin: 6px 0; font-size: 15px; }
    .social { margin-top: 24px; }
    .social a { display: inline-block; margin-right: 12px; color: #00d4ff; text-decoration: none; font-weight: bold; }
    .footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 16px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Hackathon Registration Confirmed!</h1>
      <p>Benue BlockchainAI Fest</p>
    </div>
    <div class="body">
      <h2>Hello ${registration.firstName},</h2>
      <p>Your hackathon registration has been received! We're excited to have you build at the <strong>Benue BlockchainAI Fest Hackathon</strong>.</p>

      <div class="event-box">
        <p> <strong>Date:</strong> ${process.env.EVENT_DATE}</p>
        <p> <strong>Venue:</strong> ${process.env.EVENT_VENUE}</p>
      </div>

      <p>Stay connected and follow us on social media for updates:</p>
      <div class="social">
        <a href="${process.env.SOCIAL_TWITTER}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X (Twitter)" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_FACEBOOK}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_YOUTUBE}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="20" height="20" />
        </a>
      </div>

      <p style="margin-top: 30px;">Get ready to build, innovate, and win! 🏆</p>
    </div>
    <div class="footer">
      &copy; 2026 Benue BlockchainAI Fest. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Mailer] Hackathon confirmation email sent to ${registration.email} (attempt ${attempt})`);
  } catch (error) {
    console.error(
      `[Mailer] Failed to send hackathon email to ${registration.email} (attempt ${attempt}):`,
      error.message
    );
    if (attempt < maxAttempts) {
      console.log(`[Mailer] Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, retryDelayMs));
      return sendHackathonConfirmationEmail(registration, attempt + 1);
    } else {
      console.error(`[Mailer] All ${maxAttempts} attempts failed for ${registration.email}.`);
    }
  }
}


/**
 * @param {Object} registration
 * @param {string} registration.firstName
 * @param {string} registration.email
 * @param {string} registration.projectDescription
 * @param {string} registration.productLink
 * @param {number} [attempt=1]
 */
async function sendProductShowcaseConfirmationEmail(registration, attempt = 1) {
  const maxAttempts = 3;
  const retryDelayMs = 2000;

  const mailOptions = {
    from: `"Benue BlockchainAI Fest" <${process.env.EMAIL_USER}>`,
    to: registration.email,
    subject: 'Product Showcase Registration Confirmed – Benue BlockchainAI Fest',
    text: `Hello ${registration.firstName},

Your product showcase registration has been received! We're excited to have you showcase your product at the Benue BlockchainAI Fest.

Event Details:

Date: ${process.env.EVENT_DATE}
Venue: ${process.env.EVENT_VENUE}

Follow us:

Twitter: ${process.env.SOCIAL_TWITTER}
Facebook: ${process.env.SOCIAL_FACEBOOK}
YouTube: ${process.env.SOCIAL_YOUTUBE}

Get ready to showcase your innovation to the world!

Warm regards,
The Benue BlockchainAI Fest Team`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 40px 30px; text-align: center; }
    .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
    .header p { color: #aad4f5; margin: 8px 0 0; font-size: 14px; }
    .body { padding: 30px; color: #333333; }
    .body h2 { color: #1a1a2e; }
    .event-box { background: #f0f8ff; border-left: 4px solid #00d4ff; padding: 16px 20px; border-radius: 4px; margin: 20px 0; }
    .event-box p { margin: 6px 0; font-size: 15px; }
    .social { margin-top: 24px; }
    .social a { display: inline-block; margin-right: 12px; color: #00d4ff; text-decoration: none; font-weight: bold; }
    .footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 16px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 Product Showcase Registration Confirmed!</h1>
      <p>Benue BlockchainAI Fest</p>
    </div>
    <div class="body">
      <h2>Hello ${registration.firstName},</h2>
      <p>Your product showcase registration has been received! We're excited to have you present your product at the <strong>Benue BlockchainAI Fest</strong>.</p>

      <div class="event-box">
        <p> <strong>Date:</strong> ${process.env.EVENT_DATE}</p>
        <p> <strong>Venue:</strong> ${process.env.EVENT_VENUE}</p>
      </div>

      <p>Stay connected and follow us on social media for updates:</p>
      <div class="social">
        <a href="${process.env.SOCIAL_TWITTER}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X (Twitter)" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_FACEBOOK}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_YOUTUBE}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="20" height="20" />
        </a>
      </div>

      <p style="margin-top: 30px;">Get ready to showcase your innovation to the world! </p>
    </div>
    <div class="footer">
      &copy; 2026 Benue BlockchainAI Fest. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Mailer] Product showcase confirmation email sent to ${registration.email} (attempt ${attempt})`);
  } catch (error) {
    console.error(
      `[Mailer] Failed to send product showcase email to ${registration.email} (attempt ${attempt}):`,
      error.message
    );
    if (attempt < maxAttempts) {
      console.log(`[Mailer] Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, retryDelayMs));
      return sendProductShowcaseConfirmationEmail(registration, attempt + 1);
    } else {
      console.error(`[Mailer] All ${maxAttempts} attempts failed for ${registration.email}.`);
    }
  }
}

/**
 * @param {Object} application
 * @param {string} application.firstName
 * @param {string} application.email
 * @param {string} application.expertiseDescription
 * @param {string} application.linkedinLink
 * @param {number} [attempt=1]
 */
async function sendSpeakerApplicationConfirmationEmail(application, attempt = 1) {
  const maxAttempts = 3;
  const retryDelayMs = 2000;

  const mailOptions = {
    from: `"Benue BlockchainAI Fest" <${process.env.EMAIL_USER}>`,
    to: application.email,
    subject: 'Speaker Application Received – Benue BlockchainAI Fest',
    text: `Hello ${application.firstName},

Thank you for your interest in speaking at the Benue BlockchainAI Fest! We have received your application and our team will be reviewing it shortly.

Event Details:

Date: ${process.env.EVENT_DATE}
Venue: ${process.env.EVENT_VENUE}

Follow us for updates:

Twitter: ${process.env.SOCIAL_TWITTER}
Facebook: ${process.env.SOCIAL_FACEBOOK}
YouTube: ${process.env.SOCIAL_YOUTUBE}

We appreciate your willingness to share your expertise with our community.

Warm regards,
The Benue BlockchainAI Fest Team`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 40px 30px; text-align: center; }
    .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
    .header p { color: #aad4f5; margin: 8px 0 0; font-size: 14px; }
    .body { padding: 30px; color: #333333; }
    .body h2 { color: #1a1a2e; }
    .event-box { background: #f0f8ff; border-left: 4px solid #00d4ff; padding: 16px 20px; border-radius: 4px; margin: 20px 0; }
    .event-box p { margin: 6px 0; font-size: 15px; }
    .social { margin-top: 24px; }
    .social a { display: inline-block; margin-right: 12px; color: #00d4ff; text-decoration: none; font-weight: bold; }
    .footer { background: #1a1a2e; color: #aaa; text-align: center; padding: 16px; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎙️ Speaker Application Received!</h1>
      <p>Benue BlockchainAI Fest</p>
    </div>
    <div class="body">
      <h2>Hello ${application.firstName},</h2>
      <p>Thank you for expressing interest in speaking at the <strong>Benue BlockchainAI Fest</strong>! Our team has received your application and will review it soon.</p>

      <div class="event-box">
        <p> <strong>Date:</strong> ${process.env.EVENT_DATE}</p>
        <p> <strong>Venue:</strong> ${process.env.EVENT_VENUE}</p>
      </div>

      <p>Stay connected and follow us on social media for updates:</p>
      <div class="social">
        <a href="${process.env.SOCIAL_TWITTER}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" alt="X (Twitter)" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_FACEBOOK}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" width="20" height="20" />
        </a>
        <a href="${process.env.SOCIAL_YOUTUBE}" target="_blank">
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" width="20" height="20" />
        </a>
      </div>

      <p style="margin-top: 30px;">We appreciate your willingness to share your knowledge with our community! ✨</p>
    </div>
    <div class="footer">
      &copy; 2026 Benue BlockchainAI Fest. All rights reserved.
    </div>
  </div>
</body>
</html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Mailer] Speaker application confirmation email sent to ${application.email} (attempt ${attempt})`);
  } catch (error) {
    console.error(
      `[Mailer] Failed to send speaker application email to ${application.email} (attempt ${attempt}):`,
      error.message
    );
    if (attempt < maxAttempts) {
      console.log(`[Mailer] Retrying in ${retryDelayMs / 1000}s...`);
      await new Promise(resolve => setTimeout(resolve, retryDelayMs));
      return sendSpeakerApplicationConfirmationEmail(application, attempt + 1);
    } else {
      console.error(`[Mailer] All ${maxAttempts} attempts failed for ${application.email}.`);
    }
  }
}

module.exports = { sendConfirmationEmail, sendHackathonConfirmationEmail, sendProductShowcaseConfirmationEmail, sendSpeakerApplicationConfirmationEmail };
