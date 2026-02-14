import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  MessageCircle,
  Globe,
  Star
} from "lucide-react";
import { visaChecklists, ChecklistSection } from "@/data/visa-checklists";

const WHATSAPP_BASE = "https://wa.me/918105099612";

const reviews = [
  { name: "Priya Sharma", visa: "Tourist Visa", text: "Vyoma Visas made the entire process seamless. Their checklist was so detailed I didn't miss a single document." },
  { name: "Rajesh Kumar", visa: "Business Visa", text: "Got my visa approved on the first attempt. The documentation guidance was thorough and professional." },
];

interface PageProps {
  params: { slug: string };
}

export default function ChecklistDetailPage({ params }: PageProps) {
  const checklist = visaChecklists[params.slug];
  if (!checklist) notFound();

  const whatsappUrl = `${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20am%20interested%20in%20${encodeURIComponent(checklist.country)}%20visa%20services.`;

  return (
    <div className="bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative bg-teal py-14 sm:py-20 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
          <Globe className="absolute -right-20 -bottom-20 w-96 h-96 text-white/10 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-cream/70 hover:text-gold transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-teal" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)]">
              {checklist.country} Visa Checklist
            </h1>
          </div>
          
          {/* FIX: Increased max-w and removed restrictive width to allow description to fill desktop space */}
          <p className="text-teal-50 text-lg sm:text-xl leading-relaxed max-w-5xl whitespace-pre-line">
            {checklist.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* FIX: Changed from 'grid' to 'columns' to create a Masonry layout. 
            This prevents empty spaces when one card is shorter than the other. */}
        <div className="columns-1 md:columns-2 gap-8 space-y-8 mb-14">
          {checklist.sections.map((section: ChecklistSection, idx: number) => (
            <ContentCard
              key={idx}
              icon={<FileText className="w-5 h-5 text-gold" />}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>

        {/* REVIEWS SECTION */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
                </div>
                <p className="text-charcoal text-sm leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t border-slate-50 pt-3">
                  <p className="font-semibold text-teal text-sm">{review.name}</p>
                  <p className="text-charcoal-light text-xs">{review.visa}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="text-center bg-cream rounded-[2.5rem] p-8 sm:p-16 border border-gold/20 shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 text-gold">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)] mb-4">
            Ready to Start Your {checklist.country} Visa Journey?
          </h2>
          <p className="text-charcoal/70 max-w-xl mx-auto text-lg mb-10 leading-relaxed font-medium">
            Our experienced team ensures a smooth, transparent, and successful application process. Get started today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold text-teal font-bold px-10 py-5 rounded-2xl hover:bg-gold-light transition-all shadow-lg hover:shadow-gold/20 hover:-translate-y-1 active:scale-95 text-lg"
            >
              Book Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-10 py-5 rounded-2xl hover:bg-[#22c55e] transition-all shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 active:scale-95 text-lg"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    /* FIX: Added 'break-inside-avoid' to ensure cards don't split between columns */
    <div className="break-inside-avoid bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gold/10 p-2 rounded-lg">{icon}</div>
        <h3 className="font-bold text-teal text-xl font-[family-name:var(--font-playfair)]">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {items.map((item, idx) => {
          const isSubPoint = item.trim().startsWith("•");
          return (
            <li key={idx} className={`flex items-start gap-3 text-charcoal/80 group ${isSubPoint ? 'ml-6 bg-slate-50/50 p-2 rounded-lg' : ''}`}>
              {isSubPoint ? (
                <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 shrink-0 ml-1" />
              ) : (
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              )}
              
              <span className={`${isSubPoint ? 'text-sm' : 'text-[15px] font-bold'} leading-relaxed`}>
                {isSubPoint ? item.replace("•", "").trim() : item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}