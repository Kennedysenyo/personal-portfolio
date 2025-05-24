"use server";

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

  const errors: FormFields = {};

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!emailRegex.test(email)) errors.email = "Enter a valid email";
  if (!message) errors.message = "Can't send empty message!";

  if (Object.keys(errors).length > 0)
    return { errors, success: false, errorMessage: null };

  // Send email logic here
  try {
    // await sendEmail(name, email, message);
    return { errors: {}, success: true, errorMessage: null };
  } catch (err) {
    return {
      errors: {},
      success: false,
      errorMessage: "Failed to send message. Please try again later.",
    };
  }
};
