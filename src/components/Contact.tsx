import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import diffuser from "../assets/figures/images/diffuser.jpg";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    description: "Send a message anytime",
    detail: null,
    value: "alathamrmt@gmail.com",
    href: "mailto:alathamrmt@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    description: "Text or call for appointments",
    detail: null,
    value: "(709) 427-0948",
    href: "tel:17094270948",
  },
  {
    icon: MapPin,
    label: "Office",
    description: null,
    detail:
      "Therapeutic Touch Massage Clinic, 263 Memorial Drive, Suite 201, Clarenville, NL, A5A 1R5. Entrance at back of building.",
    value: "Get directions",
    href: "https://maps.google.com/?q=263+Memorial+Drive+Suite+201+Clarenville+NL+A5A+1R5",
  },
];

const primaryContactItems = contactItems.filter((item) => item.label !== "Office");
const officeItem = contactItems.find((item) => item.label === "Office");

export default function Contact() {
  return (
    <section id="contact" className="bg-green-deep py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-start gap-10 md:grid-cols-3 md:gap-12">
          <div className="text-center text-white md:col-span-1 md:text-left">
            <p className="text-sm text-white/85 md:hidden">Get in touch</p>
            <h2 className="mt-2 font-serif text-4xl leading-tight text-white md:mt-0 md:text-5xl">
              <span className="md:hidden">Book your session</span>
              <span className="hidden md:inline">More to ask? Get in touch.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/80 md:mx-0 md:hidden">
              Text or call to schedule, or fill out the form below and I'll get
              back to you within 24 hours.
            </p>

            <div className="mt-8 space-y-7 md:mt-12 md:space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {primaryContactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="space-y-2">
                      <Icon
                        className="mx-auto h-5 w-5 text-white md:mx-0"
                        aria-hidden="true"
                      />
                      <h3 className="font-serif text-2xl leading-none text-white md:text-3xl">
                        {item.label}
                      </h3>
                      {item.description ? (
                        <p className="text-sm leading-6 text-white/80">
                          {item.description}
                        </p>
                      ) : null}
                      <a
                        href={item.href}
                        className="inline-block text-sm text-white underline underline-offset-4 transition hover:text-white/80"
                      >
                        {item.value}
                      </a>
                    </div>
                  );
                })}
              </div>

              {officeItem ? (
                (() => {
                  const OfficeIcon = officeItem.icon;

                  return (
                    <div className="space-y-2">
                      <OfficeIcon
                        className="mx-auto h-5 w-5 text-white md:mx-0"
                        aria-hidden="true"
                      />
                      <h3 className="font-serif text-2xl leading-none text-white md:text-3xl">
                        {officeItem.label}
                      </h3>
                      <p className="mx-auto max-w-sm text-sm leading-6 text-white/80 md:mx-0">
                        {officeItem.detail}
                      </p>
                      <a
                        href={officeItem.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 pt-1 text-sm text-white transition hover:text-white/80"
                      >
                        <span>{officeItem.value}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  );
                })()
              ) : null}
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl md:col-span-2 md:mt-6 md:rounded-2xl">
            <img
              src={diffuser}
              alt="Aromatherapy diffuser"
              className="aspect-16/10 h-full w-full object-cover object-[0%_75%] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
