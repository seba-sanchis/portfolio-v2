"use server";

import { Contact } from "@/types";
import nodemailer from "nodemailer";

const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: NODEMAILER_EMAIL,
    pass: NODEMAILER_PASSWORD,
  },
});

export async function sendEmail(formData: Contact) {
  const { name, email, message } = formData;

  try {
    const mailOptions = {
      from: email,
      to: NODEMAILER_EMAIL,
      subject: "Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(`Failed to submit contact form: ${error.message}`);
  }
}
