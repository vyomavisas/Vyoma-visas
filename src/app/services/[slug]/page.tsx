import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, FileText, Clock, DollarSign, AlertTriangle, Award, ShieldCheck, MessageCircle } from "lucide-react";
import { visaServices, getVisaBySlug } from "@/data/visa-services";

const WHATSAPP_BASE = "https://wa.me/919008497718";

export function generateStaticParams() {
  return visaServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getVisaBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} - Vyoma Visas`,
    description: service.shortDescription,
  };
}

export default function VisaDetailPage({ params }: { params: { slug: string } }) {
  const service = getVisaBySlug(params.slug);
  if (!service) notFound();

  const whatsappUrl = `${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}%20services.`;

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-teal py-14 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center">
              <service.icon className="w-6 h-6 text-teal" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
                {service.title}
              </h1>
            </div>
          </div>
          <p className="mt-4 text-cream/80 text-lg max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* What Is + Purpose */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-14">
          <div className="lg:col-span-3">
            <SectionHeader icon={<FileText className="w-5 h-5 text-gold" />} title="What is this visa?" />
            <p className="text-charcoal leading-relaxed">{service.whatIs}</p>

            <h3 className="font-semibold text-teal mt-6 mb-3">Purpose</h3>
            <ul className="space-y-2">
              {service.purpose.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                  <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Who Can Apply + Eligibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <ContentCard
            icon={<CheckCircle className="w-5 h-5 text-gold" />}
            title="Who Can Apply?"
            items={service.whoCanApply}
          />
          <ContentCard
            icon={<ShieldCheck className="w-5 h-5 text-gold" />}
            title="Eligibility Criteria"
            items={service.eligibility}
          />
        </div>

        {/* Required Documents */}
        <div className="mb-14">
          <SectionHeader icon={<FileText className="w-5 h-5 text-gold" />} title="Required Documents" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {service.documents.map((group) => (
              <div key={group.category} className="bg-white rounded-xl p-6 border border-border shadow-sm">
                <h4 className="font-semibold text-teal mb-3 text-sm uppercase tracking-wide">
                  {group.category}
                </h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-charcoal/60 text-xs mt-3 italic">
            * Additional documents may be requested by immigration authorities.
          </p>
        </div>

        {/* Types + Validity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <ContentCard
            icon={<FileText className="w-5 h-5 text-gold" />}
            title="Types"
            items={service.types}
          />
          <ContentCard
            icon={<Clock className="w-5 h-5 text-gold" />}
            title="Validity & Stay Duration"
            items={service.validity}
          />
        </div>

        {/* Processing Time + Fees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <ContentCard
            icon={<Clock className="w-5 h-5 text-gold" />}
            title="Processing Time"
            items={service.processing}
          />
          <ContentCard
            icon={<DollarSign className="w-5 h-5 text-gold" />}
            title="Fees"
            items={service.fees}
          />
        </div>

        {/* Rules + Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <ContentCard
            icon={<AlertTriangle className="w-5 h-5 text-gold" />}
            title="Important Rules & Restrictions"
            items={service.rules}
          />
          <ContentCard
            icon={<Award className="w-5 h-5 text-gold" />}
            title="Benefits"
            items={service.benefits}
          />
        </div>

        {/* Why Choose Vyoma */}
        <div className="bg-teal rounded-2xl p-8 sm:p-10 mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-playfair)] mb-2">
            Why Choose <span className="text-gold">Vyoma Visas?</span>
          </h2>
          <p className="text-cream/80 mb-6">
            We provide complete assistance for your {service.title} application, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.whyVyoma.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                <span className="text-cream text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-cream rounded-2xl p-8 sm:p-12 border border-border">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal font-[family-name:var(--font-playfair)]">
            Ready to Apply for Your {service.title}?
          </h2>
          <p className="mt-3 text-charcoal/70 max-w-xl mx-auto">
            Our experienced team ensures a smooth, transparent, and hassle-free visa process. Get started today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-[#22c55e] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h2 className="text-xl sm:text-2xl font-bold text-teal font-[family-name:var(--font-playfair)]">
          {title}
        </h2>
      </div>
      <div className="w-12 h-1 bg-gold" />
    </div>
  );
}

function ContentCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-semibold text-teal text-lg">{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
            <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
