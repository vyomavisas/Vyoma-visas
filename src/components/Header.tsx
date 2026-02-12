"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Vyoma Visas"
                width={48}
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <span className="text-xl sm:text-2xl font-bold text-teal font-[family-name:var(--font-playfair)]">
                Vyoma<span className="text-gold"> Visas</span>
              </span>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-teal font-medium transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:9008497718"
              className="flex items-center gap-2 text-teal font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>9008497718</span>
            </a>
            <a
              href="https://wa.me/919008497718?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-teal font-semibold px-5 py-2.5 rounded-lg hover:bg-gold-light transition-colors text-sm"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-teal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-charcoal hover:text-teal hover:bg-cream font-medium py-3 px-3 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <a
                href="tel:9008497718"
                className="flex items-center gap-2 text-teal font-medium py-2 px-3"
              >
                <Phone className="w-4 h-4" />
                9008497718
              </a>
              <a
                href="https://wa.me/919008497718?text=Hi%20Vyoma%20Visas%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-teal font-semibold px-5 py-3 rounded-lg text-center hover:bg-gold-light transition-colors"
              >
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
