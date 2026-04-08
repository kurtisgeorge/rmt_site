import massage1 from "../assets/figures/images/massage_1.jpg";
import massage2 from "../assets/figures/images/massage_2.jpg";
import massage3 from "../assets/figures/images/massage_3.jpg";
import FadeIn from "./FadeIn";

type ServiceItem = {
  title: string;
  description: string;
  imageSrc: string;
};

type ServicesProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ServiceItem[];
  id?: string;
};

export default function Services({
  eyebrow = "Services",
  title = "What I Offer",
  description = "Three approaches to meet your needs.",
  items = [
    {
      title: "Relaxation massage",
      description:
        "Ease tension and calm the nervous system. Gentle, flowing work for restoration.",
      imageSrc: massage1,
    },
    {
      title: "Deep tissue work",
      description:
        "Targeted pressure on muscle and fascia. Effective for chronic tension and injury recovery.",
      imageSrc: massage2,
    },
    {
      title: "Therapeutic release",
      description:
        "Specialized technique for restricted movement and pain. Combines assessment with precise treatment.",
      imageSrc: massage3,
    },
  ],
  id = "services",
}: ServicesProps) {
  return (
    <section id={id} className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-2xl px-8 py-12 md:px-12 md:py-16">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-xs md:text-sm uppercase tracking-[0.28em]">{eyebrow}</p>
            <h2 className="mt-4 text-4xl lg:text-5xl leading-tight">{title}</h2>
            <p className="mt-3 text-base lg:text-lg text-black/70">{description}</p>
          </FadeIn>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 md:mt-12 md:gap-6">
            {items.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 80}
                className="relative flex min-h-52 w-full basis-80 grow items-center overflow-hidden rounded-2xl px-5 py-6 text-center text-white max-w-sm card-hover"
                as="article"
              >
                <img
                  src={item.imageSrc}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover grayscale brightness-60"
                />
                <div className="absolute inset-0 bg-pink-overlay/85" />
                <div className="relative w-full">
                  <h3 className="text-2xl lg:text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-3 text-base lg:text-lg leading-6 text-white/85">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
