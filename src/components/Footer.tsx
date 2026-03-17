import { Facebook } from "lucide-react";
import logoColor from "../assets/figures/logos/logo-color.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
  { label: "Hours", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const legalLinks = [
  { label: "Privacy policy", href: "#" },
  { label: "Terms of service", href: "#" },
  { label: "Cookie settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-cream py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="shrink-0">
            <img src={logoColor} alt="Logo" className="w-20" />
          </a>

          <nav className="flex flex-col items-center gap-5 text-sm text-black md:flex-row md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-pink-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-black transition hover:text-pink-dark"
          >
            <Facebook className="h-4 w-4 fill-current" />
          </a>
        </div>

        <div className="mt-10 border-t border-stone-300/80 pt-6 md:mt-12">
          <div className="flex flex-col items-center gap-4 text-center text-xs leading-5 text-black/70 md:flex-row md:justify-center md:gap-6">
            <p>© 2025 Alexis Latham, RMT. All rights reserved.</p>

            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
