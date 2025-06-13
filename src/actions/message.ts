"use server";

import { sendEmail } from "@/lib/mailer";

export type FormFields = {
  name?: string;
  email?: string;
  message?: string;
};

export type FormState = {
  errors: FormFields;
  success: boolean;
  errorMessage: string | null;
};

export const validateMessageForm = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  // Honeypot check
  if (formData.get("company")) {
    return {
      success: false,
      errorMessage: "Spam detected",
      errors: {},
    };
  }

  // reCAPTCHA check
  const token = formData.get("g-recaptcha-response") as string;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  });
  const data = await res.json();

  if (!data.success || data.score < 0.5) {
    return {
      success: false,
      errorMessage: "Suspicious activity detected.",
      errors: {},
    };
  }

  const errors: FormFields = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!emailRegex.test(email)) errors.email = "Enter a valid email";
  if (!message) errors.message = "Can't send empty message!";

  if (Object.keys(errors).length > 0)
    return { errors, success: false, errorMessage: null };

  // Send email logic here
  const response = await sendEmail(name, email, message);
  if (response)
    return {
      errors: {},
      success: false,
      errorMessage: "Failed to send Message",
    };
  return { errors: {}, success: true, errorMessage: null };
};
