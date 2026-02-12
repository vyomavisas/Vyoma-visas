import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src="/logo.png"
                alt="Vyoma Visas"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"

              />
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                Vyoma<span className="text-gold"> Visas</span>
              </h3>
            </Link>
            <p className="mt-3 text-cream/80 text-sm leading-relaxed">
              Your trusted partner for global visa solutions. Reliable, transparent and
              professional visa consultancy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-wider uppercase">
              Our Services
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Tourist Visa", href: "/services/tourist-visa" },
                { label: "Business Visa", href: "/services/business-visa" },
                { label: "Study Visa", href: "/services/study-visa" },
                { label: "Conference Visa", href: "/services/conference-visa" },
                { label: "Dependent Visa", href: "/services/dependent-visa" },
                { label: "Family Visit Visa", href: "/services/visiting-family-visa" },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  {s.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-sm text-cream/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
                <span>
                  Ground Floor, 67, 7th Cross Rd, Thammenahalli Village, Bengaluru – 560090
                </span>
              </div>
              <a
                href="tel:9008497718"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                9008497718 / 8105099612
              </a>
              <a
                href="mailto:vyomavisas@gmail.com"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                vyomavisas@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 mt-10 pt-6 flex flex-col gap-4 items-center">
          
          {/* Credit ABOVE copyright */}
          <div className="flex items-center gap-1 text-xs text-cream/70">
            Made with
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold hover:underline ml-1"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-4 w-4 object-contain"
              />
              StaffArc
            </a>
          </div>

          {/* Copyright */}
          <p className="text-cream/60 text-xs text-center">
            &copy; {new Date().getFullYear()} Vyoma Visas. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/vyomavisas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vyoma-visas-2873483a4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/VyomaVisas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/share/1JWst9JbK3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
