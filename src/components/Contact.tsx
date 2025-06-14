"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormFields, FormState, validateMessageForm } from "@/actions/message";

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha: Grecaptcha;
  }
}

export function Contact() {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const tokenRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const initialState: FormState = {
    errors: {},
    success: false,
    message: null,
  };

  const [state, formAction, isPending] = useActionState(
    validateMessageForm,

    initialState,
  );

  useEffect(() => {
    const scriptId = "recaptcha-script";
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error("Missing reCAPTCHA site key");
      return;
    }

    // If script already exists, do nothing
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
      const grecaptcha = window.grecaptcha;

      if (!grecaptcha || !grecaptcha.execute || !grecaptcha.ready) {
        throw new Error("reCAPTCHA not initialized.");
      }

      await new Promise<void>((resolve) => grecaptcha.ready(resolve));

      const token = await grecaptcha.execute(siteKey, { action: "submit" });

      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("g-recaptcha-response", token);

      formAction(form);
    } catch (error) {
      console.error("reCAPTCHA error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (state.success) {
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 3000);
    }
  }, [state.success]);

  return (
    <section id="contact" className="flex w-full justify-center py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Mail className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      contact@kencoding.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      +233 (0) 545-744-331
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  ref={formRef}
                  action={formAction}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleFormChange}
                      disabled={isPending}
                    />
                    {state.errors?.name && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      disabled={isPending}
                    />
                    {state.errors?.email && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.email}
                      </p>
                    )}
                  </div>
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message (10-2000 characters)"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleFormChange}
                      disabled={isPending}
                    />
                    {state.errors?.message && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.message}
                      </p>
                    )}
                  </div>

                  <input
                    type="hidden"
                    name="g-recaptcha-response"
                    ref={tokenRef}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isPending || isSubmitting}
                  >
                    {isPending || isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {state.message && (
                    <p
                      className={`text-sm font-medium ${
                        state.success ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {state.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
