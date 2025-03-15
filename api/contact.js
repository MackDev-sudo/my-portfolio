import nodemailer from "nodemailer";

// Create transporter only when needed to avoid initialization errors
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials are not configured");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// HTML email template for user confirmation
const getUserEmailTemplate = (name, subject, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for reaching out!</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      font-size: 28px;
      font-weight: bold;
      color: #1a1a1a;
      margin-bottom: 20px;
    }
    .message-details {
      background-color: #f8f9fa;
      border-radius: 6px;
      padding: 20px;
      margin: 20px 0;
    }
    .message-details h3 {
      color: #4a5568;
      margin-top: 0;
    }
    .label {
      color: #718096;
      font-weight: 600;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      font-size: 14px;
      color: #718096;
      text-align: center;
    }
    .signature {
      margin-top: 20px;
      color: #4a5568;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">Thank you for reaching out!</div>
    <p>Dear ${name},</p>
    <p>Thank you for contacting Mackdev Inc. This email confirms that we have received your message.</p>
    <p>Our team will carefully review your inquiry and respond as soon as possible. We typically respond within 24-48 business hours.</p>
    
    <div class="message-details">
      <h3>Your Message Details</h3>
      <p><span class="label">Subject:</span> ${subject}</p>
      <p><span class="label">Message:</span> ${message}</p>
    </div>

    <div class="signature">
      <p>Best regards,<br>The Mackdev Inc Team</p>
    </div>

    <div class="footer">
      <p>This is an automated response. Please do not reply to this email.</p>
      <p>© 2025 Mackdev Inc. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`;

// HTML email template for admin notification
const getAdminEmailTemplate = (name, email, subject, message) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .email-container {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      font-size: 24px;
      font-weight: bold;
      color: #1a1a1a;
      margin-bottom: 20px;
    }
    .contact-details {
      background-color: #f8f9fa;
      border-radius: 6px;
      padding: 20px;
      margin: 20px 0;
    }
    .label {
      color: #718096;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">New Contact Form Submission</div>
    <div class="contact-details">
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p><span class="label">Subject:</span> ${subject}</p>
      <p><span class="label">Message:</span></p>
      <p>${message}</p>
    </div>
  </div>
</body>
</html>
`;

export default async function handler(req, res) {
  try {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    if (req.method === "OPTIONS") {
      return res.status(200).json({ status: "ok" });
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create transporter instance
    const transporter = createTransporter();

    // Verify transporter
    await transporter.verify();

    // Email to admin
    await transporter.sendMail({
      from: {
        name: "Mackdev Inc",
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: getAdminEmailTemplate(name, email, subject, message),
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: {
        name: "Mackdev Inc",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "Thank you for contacting Mackdev Inc",
      html: getUserEmailTemplate(name, subject, message),
    });

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error("Error in contact API:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      env: {
        hasUser: !!process.env.EMAIL_USER,
        hasPass: !!process.env.EMAIL_PASS,
      },
    });

    return res.status(500).json({
      success: false,
      error: "Failed to send email",
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
}
