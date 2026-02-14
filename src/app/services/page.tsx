import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { visaServices } from "@/data/visa-services";

const WHATSAPP_BASE = "https://wa.me/918105099612";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-teal py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,169,81,0.3),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)]">
            Our <span className="text-gold">Visa Services</span>
          </h1>
          <p className="mt-4 text-cream/80 text-lg max-w-2xl mx-auto">
            Comprehensive visa consultancy services for every type of international travel need.
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-gold/40 transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 bg-gold rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-teal" />
                    </div>
                    <h2 className="text-lg font-bold text-white font-[family-name:var(--font-playfair)]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-charcoal/80 text-sm leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-gold text-teal font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors text-sm w-full justify-center"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
<section className="py-16 sm:py-20 bg-gradient-to-r from-gold to-gold-light">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-teal font-[family-name:var(--font-playfair)]">
      Not Sure Which Visa You Need?
    </h2>
    <p className="mt-4 text-teal/80 text-lg">
      Our experts will guide you to the right visa category based on your travel purpose.
    </p>
    <div className="mt-8">
      <a
        href={`${WHATSAPP_BASE}?text=Hi%20Vyoma%20Visas%2C%20I%20need%20help%20choosing%20the%20right%20visa%20type.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-teal text-white font-semibold px-8 py-4 rounded-lg hover:bg-teal-dark transition-colors"
      >
        Get Expert Guidance
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
