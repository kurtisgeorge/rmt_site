import type { ComponentType } from "react";
import { Bone, Slice, Apple } from "lucide-react";

type TreatedItem = {
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
};

const treatedItems: TreatedItem[] = [
  {
    icon: Bone,
    title: "Musculoskeletal issues",
    description:
      "Back pain, neck tension, muscle strains and sprains, spasms, sciatica, whiplash, tendonitis, sports injuries, postural issues, range-of-motion loss.",
  },
  {
    icon: Slice,
    title: "Recovery and specialized concerns",
    description:
      "Post-surgical recovery, circulation difficulties, edema, carpal tunnel syndrome, TMJ dysfunction.",
  },
  {
    icon: Apple,
    title: "Nervous system and wellness",
    description:
      "Stress, insomnia, constipation, headaches and migraines.",
  },
];

export default function Treated() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-2xl px-8 py-12 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] md:text-sm">
              Conditions
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-black lg:text-5xl">
              What can be treated
            </h2>
            <p className="mt-3 font-open-sans text-base text-black/70 lg:text-lg">
              Massage therapy addresses a wide range of physical concerns.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:mt-12 md:grid-cols-4 md:gap-6">
            {treatedItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-2xl border border-stone-300/70 p-6 text-center ${
                    index === 0 ? "md:col-span-2 flex flex-col justify-center" : "md:col-span-1"
                  }`}
                >
                  <Icon className="h-10 w-10 text-black mx-auto" aria-hidden={true} />
                  <h3
                    className={`mt-5 font-semibold leading-tight text-black ${
                      index === 0
                        ? "text-2xl md:text-4xl lg:text-5xl"
                        : "text-2xl lg:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 font-open-sans text-sm leading-6 text-black/70 lg:text-base">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
