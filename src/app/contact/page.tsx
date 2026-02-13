"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, ArrowRight, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/918105099612";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Vyoma+Visas+Ground+Floor+No+67+7th+Cross+Road+Thammenahalli+Village+Bengaluru+Karnataka+560090";// Replace with your exact share link if different

const WhatsAppIcon = ({ className = "" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor">
    <path d="M16 2.9C9.1 2.9 3.5 8.5 3.5 15.4c0 2.7.9 5.2 2.3 7.2L3 29l6.6-2.7c1.9 1 4 1.5 6.4 1.5 6.9 0 12.5-5.6 12.5-12.5S22.9 2.9 16 2.9zm0 22.7c-2.2 0-4.3-.6-6.1-1.7l-.4-.2-3.9 1.6 1.6-3.8-.3-.4c-1.2-1.9-1.8-4.1-1.8-6.4C5.1 9.5 10 4.6 16 4.6s10.9 4.9 10.9 10.9S22 25.6 16 25.6zm6.1-7.9c-.3-.1-1.9-.9-2.2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-.3-.1-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.3 3c.1.2 2.2 3.4 5.4 4.8.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4z" />
  </svg>
);

const serviceTypes = ["Tourist Visa", "Business Visa", "Study Visa", "Conference Visa", "Dependent Visa", "Visiting Family/Friends"];
const countries = ["USA", "UK", "Australia", "Japan", "South Korea", "Ireland", "Singapore", "UAE", "Vietnam", "Israel", "Schengen (Any Country)", "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden", "Iceland", "Liechtenstein", "Norway", "Switzerland", "Other"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", country: "", otherCountry: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Vyoma Visas, I would like to inquire about your services.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0ACountry: ${form.country}%0AMessage: ${form.message}`;
    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#fcfaf8]">
      {/* Hero Banner */}
      <section className="relative bg-teal py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">Contact <span className="text-gold">Us</span></h1>
          <p className="mt-4 text-cream/80 text-lg max-w-2xl mx-auto">Get in touch with our visa experts. We're here to help you with your visa needs.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-teal font-[family-name:var(--font-playfair)]">Get In Touch</h2>
                <div className="w-12 h-1 bg-gold mt-3 mb-6" />
                <p className="text-charcoal leading-relaxed text-sm">Have questions about visa applications? Need expert guidance? Reach out to us through any of the channels below.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-gold" /></div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Phone</h3>
                    <a href="tel:9008497718" className="text-charcoal text-sm hover:text-gold transition-colors block">9008497718</a>
                    <a href="tel:8105099612" className="text-charcoal text-sm hover:text-gold transition-colors block">8105099612</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-gold" /></div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Email</h3>
                    <a href="mailto:vyomavisas@gmail.com" className="text-charcoal text-sm hover:text-gold transition-colors">vyomavisas@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-border">
                  <div className="w-10 h-10 bg-cream rounded-lg flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-gold" /></div>
                  <div>
                    <h3 className="font-semibold text-teal text-sm">Address</h3>
                    <p className="text-charcoal text-sm leading-relaxed">Ground Floor, 67, 7th Cross Rd, Thammenahalli Village, Bengaluru – 560090</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="https://www.instagram.com/vyomavisas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-xs font-medium"><Instagram className="w-4 h-4" /> Instagram</a>
                <a href="https://www.linkedin.com/in/vyoma-visas-2873483a4" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-xs font-medium"><Linkedin className="w-4 h-4" /> LinkedIn</a>
                <a href="https://x.com/VyomaVisas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-xs font-medium"><Twitter className="w-4 h-4" /> Twitter</a>
                <a href="https://www.facebook.com/share/1JWst9JbK3/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal hover:text-gold transition-colors text-xs font-medium"><Facebook className="w-4 h-4" /> Facebook</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
                <h3 className="text-xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Name" value={form.name} onChange={(e) => updateField("name", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none" />
                    <input type="tel" required placeholder="Phone" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none" />
                  </div>
                  <input type="email" required placeholder="Email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select required value={form.service} onChange={(e) => updateField("service", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none">
                      <option value="">Select Service</option>
                      {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select required value={form.country} onChange={(e) => updateField("country", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none">
                      <option value="">Select Country</option>
                      {countries.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  {form.country === "Other" && <input type="text" required placeholder="Specify Country" value={form.otherCountry} onChange={(e) => updateField("otherCountry", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none" />}
                  <textarea placeholder="Message" value={form.message} onChange={(e) => updateField("message", e.target.value)} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:ring-2 focus:ring-gold outline-none min-h-[100px]" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gold text-teal font-bold px-6 py-4 rounded-xl hover:bg-gold-light transition-all shadow-lg hover:-translate-y-1">
                    <Send className="w-4 h-4" /> Send via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map - CLICKABLE TO OPEN APP/WEB MAPS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">Visit Our Office</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          {/* WRAPPED IN AN ANCHOR TAG FOR DIRECT LINKING */}
          <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="block relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-cream hover:opacity-95 transition-opacity group">
            <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
               <span className="bg-white text-teal px-6 py-2 rounded-full font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">Open in Google Maps</span>
            </div>
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1234567890!2d77.5123456789!3d13.0612345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8438699999%3A0x1234567890abcdef!2sVyoma%20Visas!5e0!3m2!1sen!2sin!4v1234567890123"
  width="100%"
  height="450"
  style={{ border: 0, pointerEvents: 'none' }}
  allowFullScreen
  loading="lazy"
  title="Vyoma Visas Office Location"
/>
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">Prefer to Talk Directly?</h2>
          <p className="mt-4 text-charcoal-light text-lg">Call us or send a WhatsApp message for instant assistance.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:9008497718" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal text-white font-semibold px-10 py-4 rounded-xl hover:bg-[#083c3a] transition-all shadow-lg hover:-translate-y-1"><Phone className="w-4 h-4" /> Call Now</a>
            <a href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-10 py-4 rounded-xl hover:bg-[#1ebe5d] transition-all shadow-lg hover:-translate-y-1"><WhatsAppIcon className="w-5 h-5" /> WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}