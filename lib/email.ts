import nodemailer from "nodemailer";
import { use } from "react";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Configure your email service here
// Using Gmail example - you can switch to any other SMTP provider
console.log("SMTP Configuration:", {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === "true",
  pass: process.env.SMTP_PASSWORD,
  user: process.env.SMTP_USER,
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactEmail(data: EmailData) {
  const { name, email, subject, message } = data;

  // Email template for the portfolio holder
  const portfolioHolderEmail = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #523D35;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #523D35;">
        <h3 style="color: #523D35;">Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  `;

  // Email template for the user
  const userEmail = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #523D35;">Thank You for Getting in Touch!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
      <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #523D35;">
        <h3 style="color: #523D35;">Your Message:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
      <p style="margin-top: 20px;">Best regards,<br><strong>Shreyoshi</strong></p>
    </div>
  `;

  try {
    // Send email to portfolio holder
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.PORTFOLIO_EMAIL,
      subject: `New Contact: ${subject}`,
      html: portfolioHolderEmail,
      replyTo: email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: email,
      subject: "I've received your message",
      html: userEmail,
    });

    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send email");
  }
}
