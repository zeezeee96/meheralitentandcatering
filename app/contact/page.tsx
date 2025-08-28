"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact <span className="text-amber-300">Us</span>
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Ready to plan your perfect event? Get in touch with us today for a
            free consultation
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-red-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We'd love to hear about your upcoming event. Contact us today
                  to discuss your requirements and get a personalized quote.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Near 15 Yadgar Chowk, Chakwal, Pakistan",
                    subInfo: "Serving Chakwal and surrounding areas",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+92 XXX XXXXXXX",
                    subInfo: "Available 24/7 for emergencies",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@meheralitent.com",
                    subInfo: "We'll respond within 24 hours",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    info: "Daily: 8:00 AM - 10:00 PM",
                    subInfo: "Extended hours during event season",
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-r from-white to-amber-50"
                  >
                    <div className="flex items-start space-x-4">
                      <contact.icon className="w-8 h-8 text-amber-600 mt-1 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <div>
                        <h3 className="font-bold text-red-800 mb-1 group-hover:text-amber-600 transition-colors duration-300">
                          {contact.title}
                        </h3>
                        <p className="text-gray-800 font-medium">
                          {contact.info}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {contact.subInfo}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-amber-50 hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-red-800 text-center">
                  {isSubmitted ? "Thank You!" : "Send us a Message"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-red-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-red-800 hover:bg-red-700 transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-red-700 font-medium"
                        >
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-amber-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-red-700 font-medium"
                        >
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-amber-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-red-700 font-medium"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-amber-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-red-700 font-medium"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="border-amber-200 focus:border-red-500 focus:ring-red-500 transition-all duration-300"
                        placeholder="Tell us about your event, date, number of guests, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-800 hover:bg-red-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-red-800 to-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-300 mb-8">
            Find Us
          </h2>
          <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500">
            <div className="aspect-video bg-gradient-to-br from-amber-200 to-red-200 flex items-center justify-center">
              <div className="text-center text-red-800">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Meher Ali Tent & Pakwan Center
                </h3>
                <p className="text-lg">
                  Near 15 Yadgar Chowk, Chakwal, Pakistan
                </p>
                <p className="text-sm mt-2 opacity-75">
                  Interactive map integration available
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
