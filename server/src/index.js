require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");

// Validate required environment variables
const requiredEnvVars = ["EMAIL_USER", "EMAIL_PASS", "ALLOWED_ORIGINS"];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Error: ${envVar} is not set in environment variables`);
    process.exit(1);
  }
});

const app = express();
const port = process.env.PORT || 3002;

// Security Middleware
app.use(helmet()); // Adds various HTTP headers for security
app.use(xss()); // Prevent XSS attacks
app.use(hpp()); // Prevent HTTP Parameter Pollution

// CORS configuration with specific origins
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS.split(","),
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  maxAge: 86400, // 24 hours
};
app.use(cors(corsOptions));

// Request size limiting
app.use(express.json({ limit: "10kb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/contact", limiter);

// Input validation middleware
const validateContactInput = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Length validations
  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return res
      .status(400)
      .json({ error: "Input length exceeds maximum allowed" });
  }

  next();
};

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter connection
transporter.verify((error) => {
  if (error) {
    console.error("Error with email transporter:", error);
  } else {
    console.log("Email server is ready to send messages");
  }
});

app.post("/api/contact", validateContactInput, async (req, res) => {
  const { name, email, subject, message } = req.body;
  const startTime = Date.now();

  try {
    // Email to developer
    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: process.env.EMAIL_USER,
      },
      to: {
        name: "Mackdev Inc",
        address: process.env.EMAIL_USER,
      },
      subject: `New Contact Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #4b5563; margin-bottom: 10px;">Contact Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 100px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><strong>${name}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Subject:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><strong>${subject}</strong></td>
                </tr>
              </table>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #4b5563; margin-bottom: 10px;">Message</h3>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; color: #1f2937;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Date: ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Acknowledgment email to user
    await transporter.sendMail({
      from: {
        name: "Mackdev Inc",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "Thank you for contacting Mackdev Inc",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1f2937; margin-bottom: 20px;">Thank you for reaching out!</h2>
            
            <p style="color: #4b5563; margin-bottom: 15px;">Dear ${name},</p>
            
            <p style="color: #4b5563; margin-bottom: 15px;">Thank you for contacting Mackdev Inc. This email confirms that we have received your message.</p>
            
            <p style="color: #4b5563; margin-bottom: 15px;">Our team is currently reviewing your inquiry with the utmost attention to ensure a thorough and accurate response. We strive to address all inquiries as promptly as possible and typically respond within 24 to 48 business hours. If your request requires additional time for a more detailed resolution, we will keep you informed of any updates.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; margin: 20px 0; border-radius: 6px;">
              <h3 style="color: #4b5563; margin-bottom: 10px;">Your Message Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #6b7280; width: 100px;">Subject:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><strong>${subject}</strong></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #6b7280;">Message:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${message.replace(
                    /\n/g,
                    "<br>"
                  )}</td>
                </tr>
              </table>
            </div>
            
            <p style="color: #4b5563; margin-bottom: 5px;">Best regards,</p>
            <p style="color: #1f2937; font-weight: bold; margin-bottom: 20px;">The Mackdev Inc Team</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin-bottom: 5px;">This is an automated response. Please do not reply to this email.</p>
              <p style="color: #6b7280; font-size: 12px;">© ${new Date().getFullYear()} Mackdev Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    const processingTime = Date.now() - startTime;
    console.log(`Request processed in ${processingTime}ms`);
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending emails:", {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      requestData: {
        name,
        email,
        subject,
        messageLength: message?.length,
      },
    });
    res
      .status(500)
      .json({ error: "Failed to send emails. Please try again later." });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", {
    timestamp: new Date().toISOString(),
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
  });
  res.status(500).json({ error: "Internal server error" });
});

// Start server with error handling
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(() => {
    process.exit(1);
  });
});
