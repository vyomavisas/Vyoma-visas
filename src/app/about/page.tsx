import { ArrowRight, Shield, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/918105099612";

const values = [
  { icon: Shield, title: "Trust & Transparency", desc: "We believe in honest, upfront guidance. No hidden fees, no false promises." },
  { icon: Eye, title: "Attention to Detail", desc: "Every document, every form, every deadline - we handle it all with precision." },
  { icon: Heart, title: "Client-First Approach", desc: "Your success is our success. We go above and beyond for every application." },
  { icon: Award, title: "Excellence", desc: "We maintain the highest standards in visa consultancy and client service." },
];



export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-teal py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
            About <span className="text-gold">Vyoma Visas</span>
          </h1>
          <p className="mt-4 text-cream/80 text-lg max-w-2xl mx-auto">
            Your trusted visa consultancy partner, committed to making your global travel dreams a reality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                alt="Vyoma Visas office consultation"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">
                Who We Are
              </h2>
              <div className="w-12 h-1 bg-gold mt-3 mb-6" />
              <p className="text-charcoal leading-relaxed mb-4">
                Vyoma Visa Consultancy is a Bengaluru-based professional visa services firm
                dedicated to helping individuals, families, and businesses navigate the complex
                world of international visa applications.
              </p>
              <p className="text-charcoal leading-relaxed mb-4">
                With years of experience and a deep understanding of immigration processes
                across 11+ countries, we provide end-to-end support - from documentation to
                submission - ensuring a smooth and hassle-free experience for every client.
              </p>
              <p className="text-charcoal leading-relaxed">
                Whether you are planning a vacation, pursuing higher education, attending a
                business meeting, or reuniting with family abroad, Vyoma Visas is here to
                make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-4">
                Our Mission
              </h3>
              <p className="text-charcoal leading-relaxed">
                To simplify the visa application process for every traveler by providing
                accurate, transparent, and personalized consultancy services. We strive to
                remove the stress and confusion from international travel planning.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-4">
                Our Vision
              </h3>
              <p className="text-charcoal leading-relaxed">
                To become India&apos;s most trusted visa consultancy, known for our integrity,
                expertise, and commitment to client success. We envision a world where
                international travel is accessible and stress-free for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
              Our Values
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-xl p-6 border border-border hover:border-gold hover:shadow-md transition-all text-center"
              >
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-teal mb-2">{val.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Founder's Message */}
      <section className="py-16 sm:py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6">
            Founder&apos;s Message
          </h2>
          <blockquote className="text-cream/90 text-lg leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;At Vyoma Visas, we started with a simple belief - everyone deserves
            honest, reliable, and professional visa guidance. Over the years, we have helped
            hundreds of clients achieve their travel dreams, and we continue to uphold the
            same values of trust and transparency that we started with. Your journey is
            our responsibility, and we take it seriously.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="text-gold font-semibold"> Anil Kumar SV co-founder Arundhathi</p>
            <p className="text-cream/60 text-sm">Founders, Vyoma Visa Consultancy</p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-charcoal-light text-lg">
            Book a free consultation with our visa experts today.
          </p>
          <div className="mt-8">
            <a
              href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
