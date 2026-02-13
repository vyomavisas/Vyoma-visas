"use client";

import { useState } from "react";
import { Star, CheckCircle, ChevronDown, ChevronUp, ArrowRight, Globe, Send, GraduationCap,
  Briefcase,
  Users,
  Plane,
  FileText,
  ShieldCheck,
  MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_BASE = "https://wa.me/918105099612";

const usaVisaTypes = ["Tourist Visa", "Business Visa", "Study Visa", "Dependent Visa"];

const destinations = [
  { name: "USA", id: "usa", image: "/usa.jpg" },
  { name: "UK", id: "uk", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop" },
  { name: "Australia", id: "australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop" },
  { name: "Schengen", id: "schengen", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=400&fit=crop" },
  { name: "South Korea", id: "south-korea", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&h=400&fit=crop" },
  { name: "Japan", id: "japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop" },
  { name: "Ireland", id: "ireland", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&h=400&fit=crop" },
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

const whyChoose = [
  "Expert guidance for 11+ countries",
  "High visa approval success rate",
  "Transparent pricing with no hidden charges",
  "Personalized documentation support",
  "End-to-end visa application management",
  "Dedicated support team",
];

const servicesOverview = [
  { name: "Tourist Visa", icon: Plane },
  { name: "Business Visa", icon: Briefcase },
  { name: "Study Visa", icon: GraduationCap },
  { name: "Dependent Visa", icon: Users },
  { name: "Documentation Support", icon: FileText },
  { name: "Visa Consultation", icon: ShieldCheck },
];

const reviews = [
  { name: "Priya Sharma", visa: "Tourist Visa - UK", text: "Vyoma Visas made the entire UK visa process seamless. Their team was professional and kept me updated at every step. Highly recommended!" },
  { name: "Rajesh Kumar", visa: "Business Visa - USA", text: "Got my US business visa approved on the first attempt. The documentation guidance was thorough and the team was very supportive throughout." },
  { name: "Sneha Patel", visa: "Study Visa - Australia", text: "I was worried about my Australia study visa but Vyoma Visas handled everything perfectly. They truly care about their clients." },
];

export default function HomePage() {
  const [euOpen, setEuOpen] = useState(false);
  const [nonEuOpen, setNonEuOpen] = useState(false);
  const [usaOpen, setUsaOpen] = useState(false);
  const [schengenOpen, setSchengenOpen] = useState(false);
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

  const showSchengen = () => {
    setSchengenOpen(true);
    setTimeout(() => {
      document.getElementById("schengen-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative bg-teal overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="Visa Consultancy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal/90 via-teal/70 to-teal/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 relative text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-gold" />
              <span className="text-gold text-sm font-medium tracking-wider uppercase">Vyoma Visas Consultancy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-[family-name:var(--font-playfair)]">
              Your Trusted Partner for <span className="text-gold">Global Visa Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-cream/90 max-w-2xl leading-relaxed">
              Reliable, transparent and professional visa consultancy for global travel.
              We make your visa journey smooth and stress-free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToUSA} className="bg-gold text-teal font-bold px-8 py-4 rounded-lg hover:bg-gold-light transition-all shadow-lg flex items-center justify-center gap-2">
                Book USA Visa <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/contact" className="border-2 border-gold text-gold font-bold px-8 py-4 rounded-lg hover:bg-gold hover:text-teal transition-all flex items-center justify-center gap-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TOP VISA DESTINATIONS - 4 PER ROW ON DESKTOP */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">Top Visa Destinations</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinations.map((dest) => (
              <div key={dest.name} className="relative rounded-xl overflow-hidden shadow-lg group bg-white border border-slate-100 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-sm sm:text-base mb-2 drop-shadow-lg">{dest.name}</h3>
                  <div className="flex flex-col gap-1.5">
                    {dest.id && dest.name !== "Schengen" && (
                      <Link href={`/destinations/${dest.id}`} className="bg-teal text-white text-center py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold hover:bg-teal-dark transition-colors">
                        View Checklist
                      </Link>
                    )}
                    {dest.name === "Schengen" && (
                      <div className="flex gap-1.5 w-full">
                        <Link href="/destinations/schengen" className="bg-teal text-white text-center py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold flex-1 hover:bg-teal-dark transition-colors">
                          Checklist
                        </Link>
                        <button onClick={showSchengen} className="bg-gold text-teal text-center py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold flex-1 hover:bg-gold-light transition-colors">
                          Countries
                        </button>
                      </div>
                    )}
                    {!dest.id && (
                       <button onClick={() => window.open(`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20am%20interested%20in%20a%20visa%20for%20${encodeURIComponent(dest.name)}.`, "_blank")} 
                        className="bg-white/20 backdrop-blur-md text-white text-center py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                        Enquire
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHENGEN SECTION - APPEARS ON CLICK */}
      {schengenOpen && (
        <section id="schengen-section" className="py-16 bg-white animate-in fade-in slide-in-from-bottom-5 duration-500 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-teal text-center mb-8 font-[family-name:var(--font-playfair)]">Schengen Visa Countries</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="border rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setEuOpen(!euOpen)} className="w-full flex justify-between p-5 bg-cream text-teal font-semibold hover:bg-cream/80 transition-colors">
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-gold"/> EU Schengen Countries ({euSchengenCountries.length})</span>
                  {euOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {euOpen && <div className="p-5 flex flex-wrap gap-2 bg-white border-t">{euSchengenCountries.map(c => <span key={c} className="bg-slate-100 text-charcoal px-3 py-1 rounded-full text-xs font-medium">{c}</span>)}</div>}
              </div>

              <div className="border rounded-xl overflow-hidden shadow-sm">
                <button onClick={() => setNonEuOpen(!nonEuOpen)} className="w-full flex justify-between p-5 bg-cream text-teal font-semibold hover:bg-cream/80 transition-colors">
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-gold"/> Non-EU Schengen Countries ({nonEuSchengenCountries.length})</span>
                  {nonEuOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {nonEuOpen && <div className="p-5 flex flex-wrap gap-2 bg-white border-t">{nonEuSchengenCountries.map(c => <span key={c} className="bg-slate-100 text-charcoal px-3 py-1 rounded-full text-xs font-medium">{c}</span>)}</div>}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* USA SECTION */}
      <div id="usa-section">
        {usaOpen && (
          <section className="py-16 bg-cream scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-teal mb-8 font-[family-name:var(--font-playfair)]">USA Visa Services</h2>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100 text-left">
                <form onSubmit={handleUsaSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-charcoal px-1">Name</label>
                      <input type="text" required placeholder="Full Name" className="w-full p-3 bg-cream rounded-lg border outline-none focus:ring-1 focus:ring-gold text-charcoal" onChange={(e) => setUsaForm({...usaForm, name: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-semibold text-charcoal px-1">Phone Number</label>
                      <input type="tel" required placeholder="Phone Number" className="w-full p-3 bg-cream rounded-lg border outline-none focus:ring-1 focus:ring-gold text-charcoal" onChange={(e) => setUsaForm({...usaForm, phone: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-charcoal px-1">Visa Type</label>
                    <select required className="w-full p-3 bg-cream rounded-lg border text-charcoal outline-none focus:ring-1 focus:ring-gold" onChange={(e) => setUsaForm({...usaForm, visaType: e.target.value})}>
                      <option value="">Select Visa Type</option>
                      {usaVisaTypes.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-charcoal px-1">Preferred Appointment Date</label>
                    <input type="date" required className="w-full p-3 bg-cream rounded-lg border text-charcoal outline-none focus:ring-1 focus:ring-gold" onChange={(e) => setUsaForm({...usaForm, date: e.target.value})} />
                  </div>
                  <button type="submit" className="w-full bg-gold text-teal font-bold py-4 rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" /> Book via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">Why Choose Vyoma Visas?</h2>
              <div className="w-12 h-1 bg-gold mt-3 mb-6" />
              <div className="space-y-4">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-charcoal leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop" alt="Team" className="rounded-2xl shadow-lg object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-16 sm:py-20 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)]">What Our Clients Say</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
            <p className="mt-4 text-cream/80 max-w-2xl mx-auto">Trusted by hundreds of clients for their visa needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-cream rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)] tracking-tight">
            Ready to Start Your Visa Journey?
          </h2>
          <p className="mt-4 text-charcoal/70 text-lg font-medium leading-relaxed">
            Get expert guidance from Vyoma Visas. We&apos;re here to help you every step of the way.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.open(`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation.`, "_blank")} 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-teal font-bold px-10 py-4 rounded-xl hover:bg-gold-light transition-all shadow-lg hover:shadow-gold/20 hover:-translate-y-1 active:scale-95 text-lg"
            >
              Book Consultation <ArrowRight className="w-4 h-4" />
            </button>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-teal text-teal font-bold px-10 py-4 rounded-xl hover:bg-teal hover:text-white transition-all text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}