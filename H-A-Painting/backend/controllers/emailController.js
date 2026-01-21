const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  const emailUser = process.env.EMAIL_USERNAME || process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASSWORD;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });
};

// Send quote request email
exports.sendQuoteRequest = async (req, res) => {
  try {
    const { name, email, phone, address, serviceType, message } = req.body;

    const emailUser = process.env.EMAIL_USERNAME || process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPass) {
      // In local development, don't hard-fail if email creds aren't configured.
      // This lets you test the contact form end-to-end without setting up Gmail.
      if (process.env.NODE_ENV !== 'production') {
        console.warn('Email not configured; skipping sendMail (dev mode).');
        return res.status(200).json({
          success: true,
          message: 'Request received (email not configured on server)',
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Email service is not configured on the server',
      });
    }

    // Validate required fields
    if (!name || !email || !phone || !address || !serviceType || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `New quote request (${serviceType}) from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        `Service: ${serviceType}`,
        '',
        'Project Details:',
        message,
      ].join('\n'),
    };

    // Send email
    console.log('Attempting to send email from:', emailUser);
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'email sent' });
  } catch (error) {
    console.error('Email error details:', error && error.message ? error.message : error);
    res.status(500).json({
      success: false,
      message: 'email failed'
    });
  }
};
