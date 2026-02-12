"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/919008497718";

const serviceTypes = [
  "Tourist Visa",
  "Business Visa",
  "Study Visa",
  "Conference Visa",
  "Dependent Visa",
  "Visiting Family/Friends",
];

const countries = [
  "USA",
  "UK",
  "Australia",
  "Schengen",
  "Japan",
  "South Korea",
  "Ireland",
  "Singapore",
  "UAE",
  "Vietnam",
  "Israel",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Vyoma Visas, I would like to inquire about your services.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0ACountry: ${form.country}%0AMessage: ${form.message}`;
    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-teal py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="mt-4 text-cream/80 text-lg max-w-2xl mx-auto">
            Get in touch with our visa experts. We&apos;re here to help you with your visa needs.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-teal font-[family-name:var(--font-playfair)]">
                  Get In Touch
                </h2>
                <div className="w-12 h-1 bg-gold mt-3 mb-6" />
                <p className="text-charcoal leading-relaxed text-sm">
                  Have questions about visa applications? Need expert guidance? Reach out to us
                  through any of the channels below, or fill out the contact form.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Phone</h3>
                    <a href="tel:9008497718" className="text-charcoal text-sm hover:text-gold transition-colors block">
                      9008497718
                    </a>
                    <a href="tel:8105099612" className="text-charcoal text-sm hover:text-gold transition-colors block">
                      8105099612
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Email</h3>
                    <a
                      href="mailto:vyomavisas@gmail.com"
                      className="text-charcoal text-sm hover:text-gold transition-colors"
                    >
                      vyomavisas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Address</h3>
                    <p className="text-charcoal text-sm leading-relaxed">
                      Ground Floor, 67, 7th Cross Rd,<br />
                      Thammenahalli Village,<br />
                      Bengaluru &ndash; 560090
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-sm font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
                <h3 className="text-xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      placeholder="Your email address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Type of Service</label>
                      <select
                        required
                        value={form.service}
                        onChange={(e) => updateField("service", e.target.value)}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      >
                        <option value="">Select service type</option>
                        {serviceTypes.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Preferred Country</label>
                      <select
                        required
                        value={form.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      >
                        <option value="">Select country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold min-h-[100px] resize-y"
                      placeholder="Tell us more about your visa requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gold text-teal font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">
              Visit Our Office
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.59!3d12.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzEyLjAiTiA3N8KwMzUnMjQuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vyoma Visas Office Location"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-teal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Prefer to Talk Directly?
          </h2>
          <p className="mt-4 text-cream/80 text-lg">
            Call us or send a WhatsApp message for instant assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:9008497718"
              className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-teal transition-colors"
            >
              WhatsApp Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
