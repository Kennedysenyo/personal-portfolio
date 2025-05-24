"use client";

import type React from "react";

import { useActionState, useEffect, useState } from "react";
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

export function Contact() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const initialState: FormState = {
    errors: {},
    success: false,
    errorMessage: null,
  };

  const [state, formAction, isPending] = useActionState(
    validateMessageForm,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
    }
  }, [state]);

  return (
    <section id="contact" className="py-16">
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
                      kennedysenyo@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      +233 (054) 574-4331
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Eastern Region, Ghana.
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
                <form action={formAction} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleFormChange}
                    />
                    {state.errors.name && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                    {state.errors.email && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleFormChange}
                    />
                    {state.errors.message && (
                      <p className="text-start text-xs text-red-500">
                        {state.errors.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                  {submitSuccess && (
                    <p className="text-sm font-medium text-green-600">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  {state.errorMessage && (
                    <p className="text-sm font-medium text-red-600">
                      Message Sending Failed! Please try again.
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
