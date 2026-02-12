"use client";

import { useState } from "react";
import { Star,CheckCircle, ChevronDown, ChevronUp, ArrowRight, Globe, Send,GraduationCap,
  Briefcase,
  Users,
  Plane,
  FileText,
  ShieldCheck,} from "lucide-react";
import Link from "next/link";

const WHATSAPP_BASE = "https://wa.me/919008497718";
const whyChoose = [
  "Expert guidance for 11+ countries",
  "High visa approval success rate",
  "Transparent pricing with no hidden charges",
  "Personalized documentation support",
  "End-to-end visa application management",
  "Dedicated support team",
];
const destinations = [
  { name: "USA", image: "/usa.jpg", hasBookNow: true },
  { name: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop" },
  { name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop" },
  { name: "Schengen", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop" },
  { name: "South Korea", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&h=400&fit=crop" },
  { name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
  { name: "Ireland", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&h=400&fit=crop" },
  { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop" },
  { name: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop" },
  { name: "Vietnam", image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&h=400&fit=crop" },
  { name: "Israel", image: "/israel.avif" },
];

const euSchengenCountries = [
  "Austria", "Belgium", "Croatia", "Czech Republic", "Denmark", "Estonia", "Finland",
  "France", "Germany", "Greece", "Hungary", "Italy", "Latvia", "Lithuania", "Luxembourg",
  "Malta", "Netherlands", "Poland", "Portugal", "Slovakia", "Slovenia", "Spain", "Sweden",
];

const nonEuSchengenCountries = ["Iceland", "Liechtenstein", "Norway", "Switzerland"];
const servicesOverview = [
  {
    name: "Tourist Visa",
    icon: Plane,
  },
  {
    name: "Business Visa",
    icon: Briefcase,
  },
  {
    name: "Study Visa",
    icon: GraduationCap,
  },
  {
    name: "Dependent Visa",
    icon: Users,
  },
  {
    name: "Documentation Support",
    icon: FileText,
  },
  {
    name: "Visa Consultation",
    icon: ShieldCheck,
  },
];

const reviews = [
  { name: "Priya Sharma", visa: "Tourist Visa - UK", text: "Vyoma Visas made the entire UK visa process seamless. Their team was professional and kept me updated at every step. Highly recommended!" },
  { name: "Rajesh Kumar", visa: "Business Visa - USA", text: "Got my US business visa approved on the first attempt. The documentation guidance was thorough and the team was very supportive throughout." },
  { name: "Sneha Patel", visa: "Study Visa - Australia", text: "I was worried about my Australia study visa but Vyoma Visas handled everything perfectly. They truly care about their clients." },
  { name: "Amit Singh", visa: "Tourist Visa - Schengen", text: "Excellent service! Got my Schengen visa without any hassle. The team is very knowledgeable and responsive. Will definitely come back." },
  { name: "Deepa Nair", visa: "Dependent Visa - USA", text: "Very professional and transparent. They helped me with my dependent visa process and everything went smoothly. Thank you Vyoma Visas!" },
  { name: "Vikram Rao", visa: "Business Visa - Singapore", text: "Quick processing and excellent guidance. The team at Vyoma Visas is extremely professional. Got my Singapore visa in record time." },
];

const usaVisaTypes = ["Tourist Visa", "Business Visa", "Study Visa", "Dependent Visa"];

export default function HomePage() {
  const [euOpen, setEuOpen] = useState(false);
  const [nonEuOpen, setNonEuOpen] = useState(false);
  const [usaOpen, setUsaOpen] = useState(false);
  const [usaForm, setUsaForm] = useState({ name: "", phone: "", visaType: "", date: "" });

  const handleUsaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Vyoma Visas, I want to book my USA visa appointment.%0A%0AName: ${usaForm.name}%0APhone: ${usaForm.phone}%0AVisa Type: ${usaForm.visaType}%0APreferred Date: ${usaForm.date}`;
    window.open(`${WHATSAPP_BASE}?text=${message}`, "_blank");
  };

  const scrollToUSA = () => {
    setUsaOpen(true);
    setTimeout(() => {
      document.getElementById("usa-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-teal overflow-hidden">
  {/* Hero Background Image */}
  <div className="absolute inset-0">
    <img
      src="/hero-bg.jpg"
      alt="Visa Consultancy Background"
      className="w-full h-full object-cover"
    />
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-teal/90 via-teal/70 to-teal/40" />
  </div>

  {/* CONTENT — UNCHANGED */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative">
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="w-5 h-5 text-gold" />
        <span className="text-gold text-sm font-medium tracking-wider uppercase">
          Vyoma Visas Consultancy
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] leading-tight">
        Your Trusted Partner for{" "}
        <span className="text-gold">Global Visa Solutions</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-cream/80 max-w-2xl leading-relaxed">
        Reliable, transparent and professional visa consultancy for global travel.
        We make your visa journey smooth and stress-free.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gold text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-base"
        >
          Book Consultation
          <ArrowRight className="w-4 h-4" />
        </a>

       <Link
  href="/contact"
  className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-semibold px-8 py-4 rounded-lg hover:bg-gold hover:text-teal transition-colors text-base"
>
  Contact Us
</Link>

      </div>
    </div>
  </div>
</section>


      {/* TOP VISA DESTINATIONS */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
              Top Visa Destinations
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
              We provide expert visa assistance for the most popular travel destinations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinations.map((dest) => (
              <button
                key={dest.name}
                onClick={() => {
                  if (dest.name === "USA") {
                    scrollToUSA();
                  } else {
                    window.open(
                      `${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20am%20interested%20in%20a%20visa%20for%20${encodeURIComponent(dest.name)}.`,
                      "_blank"
                    );
                  }
                }}
                className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gold aspect-[3/2]"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {dest.name}
                  </h3>
                  {dest.hasBookNow && (
                    <span className="inline-flex items-center gap-1 mt-1 bg-gold text-teal text-xs font-semibold px-3 py-1 rounded-full">
                      Book Now <ArrowRight className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SCHENGEN SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
              Schengen Visa Countries
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
              Explore all Schengen countries covered under a single visa application.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* EU Schengen */}
            <div className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setEuOpen(!euOpen)}
                className="w-full flex items-center justify-between p-5 bg-cream hover:bg-cream-dark transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-teal text-lg">EU Schengen Countries</span>
                  <span className="text-charcoal-light text-sm">({euSchengenCountries.length} countries)</span>
                </div>
                {euOpen ? (
                  <ChevronUp className="w-5 h-5 text-teal" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal" />
                )}
              </button>
              {euOpen && (
                <div className="p-5 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {euSchengenCountries.map((c) => (
                      <span
                        key={c}
                        className="bg-cream text-charcoal px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Non-EU Schengen */}
            <div className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setNonEuOpen(!nonEuOpen)}
                className="w-full flex items-center justify-between p-5 bg-cream hover:bg-cream-dark transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gold" />
                  <span className="font-semibold text-teal text-lg">Non-EU Schengen Countries</span>
                  <span className="text-charcoal-light text-sm">({nonEuSchengenCountries.length} countries)</span>
                </div>
                {nonEuOpen ? (
                  <ChevronUp className="w-5 h-5 text-teal" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal" />
                )}
              </button>
              {nonEuOpen && (
                <div className="p-5 bg-white">
                  <div className="flex flex-wrap gap-2">
                    {nonEuSchengenCountries.map((c) => (
                      <span
                        key={c}
                        className="bg-cream text-charcoal px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20am%20interested%20in%20a%20Schengen%20visa.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition-colors"
            >
              Apply for Schengen Visa
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* USA SPECIAL SECTION */}
      <div id="usa-section">
        {usaOpen && (
          <section className="py-16 sm:py-20 bg-cream">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
                  USA Visa Services
                </h2>
                <div className="w-16 h-1 bg-gold mx-auto mt-4" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {usaVisaTypes.map((type) => (
                  <div
                    key={type}
                    className="bg-white rounded-xl p-4 text-center shadow-sm border border-border hover:border-gold transition-colors"
                  >
                    <p className="font-semibold text-teal text-sm">{type}</p>
                  </div>
                ))}
              </div>

              {/* USA Appointment Form */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-border">
                <h3 className="text-xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-6">
                  Book Your USA Visa Appointment
                </h3>
                <form onSubmit={handleUsaSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
                      <input
                        type="text"
                        required
                        value={usaForm.name}
                        onChange={(e) => setUsaForm({ ...usaForm, name: e.target.value })}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={usaForm.phone}
                        onChange={(e) => setUsaForm({ ...usaForm, phone: e.target.value })}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Visa Type</label>
                      <select
                        required
                        value={usaForm.visaType}
                        onChange={(e) => setUsaForm({ ...usaForm, visaType: e.target.value })}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      >
                        <option value="">Select visa type</option>
                        {usaVisaTypes.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Preferred Appointment Date</label>
                      <input
                        type="date"
                        required
                        value={usaForm.date}
                        onChange={(e) => setUsaForm({ ...usaForm, date: e.target.value })}
                        className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gold text-teal font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Book via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>

      
      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">
                Why Choose Vyoma Visas?
              </h2>
              <div className="w-12 h-1 bg-gold mt-3 mb-6" />
              <div className="space-y-4">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Professional team"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>
     {/* SERVICES OVERVIEW SECTION */}
<section className="py-16 sm:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
        Our Visa Services
      </h2>
      <div className="w-16 h-1 bg-gold mx-auto mt-4" />
      <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
        Comprehensive visa assistance tailored to your travel purpose.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
      {servicesOverview.map((service, index) => {
        const Icon = service.icon;
        return (
          <Link
            key={index}
            href="/services"
            className="group bg-cream rounded-2xl p-6 text-center shadow-sm border border-border hover:border-gold hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold transition-colors duration-300">
              <Icon className="w-6 h-6 text-gold group-hover:text-teal transition-colors duration-300" />
            </div>

            <h3 className="text-sm sm:text-base font-semibold text-teal group-hover:text-gold transition-colors duration-300">
              {service.name}
            </h3>
          </Link>
        );
      })}
    </div>

    <div className="text-center mt-10">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
      >
        View All Services
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>

  </div>
</section>

{/* REVIEWS SECTION */}
      <section className="py-16 sm:py-20 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)]">
              What Our Clients Say
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            <p className="mt-4 text-cream/80 max-w-2xl mx-auto">
              Trusted by hundreds of clients for their visa needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-border pt-3">
                  <p className="font-semibold text-teal text-sm">{review.name}</p>
                  <p className="text-charcoal-light text-xs">{review.visa}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* BOTTOM CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="mt-4 text-charcoal-light text-lg">
            Get expert guidance from Vyoma Visas. We&apos;re here to help you every step of the way.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-teal text-teal font-semibold px-8 py-4 rounded-lg hover:bg-teal hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
