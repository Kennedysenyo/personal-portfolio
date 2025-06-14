"use server";

import { sendEmail } from "@/lib/mailer";

export type FormFields = {
  name: string;
  email: string;
  message: string;
};

export type FormState = {
  errors: Partial<FormFields>;
  success: boolean;
  message: string | null;
};

export const validateMessageForm = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  // Get and trim form data
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const company = formData.get("company")?.toString().trim();

  // Honeypot check
  if (company) {
    console.warn("Spam detected - honeypot field filled");
    return {
      success: false,
      message: "Submission failed",
      errors: {},
    };
  }

  // reCAPTCHA verification
  try {
    const token = formData.get("g-recaptcha-response")?.toString() || "";
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await res.json();
    console.log("reCAPTCHA score:", data.score);

    if (!data.success || data.score < 0.3) {
      // Adjusted threshold
      console.warn("reCAPTCHA verification failed", data);
      return {
        success: false,
        message: "Verification failed. Please try again.",
        errors: {},
      };
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return {
      success: false,
      message: "Verification service unavailable. Please try again later.",
      errors: {},
    };
  }

  // Field validation
  const errors: Partial<FormFields> = {};

  if (!name) errors.name = "Name is required";
  else if (name.length > 100) errors.name = "Name is too long";

  if (!email) errors.email = "Email is required";
  else if (!emailRegex.test(email)) errors.email = "Please enter a valid email";
  else if (email.length > 255) errors.email = "Email is too long";

  if (!message) errors.message = "Message cannot be empty";
  else if (message.length < 10) errors.message = "Message is too short";
  else if (message.length > 2000) errors.message = "Message is too long";

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
      message: "Please fix the errors in the form",
    };
  }

  // Send email
  try {
    const emailSent = await sendEmail(name, email, message);
    if (!emailSent) {
      throw new Error("Email service returned failure");
    }

    return {
      errors: {},
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      errors: {},
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
};
