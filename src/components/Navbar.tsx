import { useEffect, useState } from "react";
import logoColor from "../assets/figures/logos/logo-color.png";
import { MenuIcon, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = (): void => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50  bg-cream-soft">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
          <a href="#top" className="shrink-0">
            <img
              src={logoColor}
              alt="Logo"
              className="w-20 py-4 px-2"
            />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base text-black transition hover:text-pink-dark"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-pink-primary px-8 py-3 text-base text-white transition hover:bg-pink-dark"
            >
              Book
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-12 w-12 items-center justify-center md:hidden"
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/25 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex items-center h-full w-[75%] max-w-sm flex-col  bg-cream-soft shadow-xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative flex w-full justify-center px-6 pb-6 pt-6">

            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="absolute left-5 top-6 flex h-12 w-12 pb-8 items-center justify-center hover:cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="flex flex-1 flex-col px-6 pb-8 gap-8">
            

            <div className="flex flex-col gap-10 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-center text-black transition hover:text-pink-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#booking"
              onClick={closeMenu}
              className="mx-auto mb-10 inline-flex items-center justify-center rounded-full bg-pink-primary px-10 py-4 text-sm text-white transition hover:bg-pink-dark"
            >
              Book
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
