import { CircleDot, Flower, FileBadge } from 'lucide-react';

export default function WhyMe() {
  const reasons = [
    {
      icon: FileBadge,
      title: 'Licensed and certified',
      desc: 'Registered with professional standards and committed to continuing education in advanced treatment techniques.',
    },
    {
      icon: CircleDot,
      title: 'Personalized approach',
      desc: 'Every treatment is adapted to your body, goals, and comfort level so sessions stay effective and relevant.',
    },
    {
      icon: Flower,
      title: 'Calm and welcoming space',
      desc: 'A professional clinic environment designed to support both physical recovery and relaxation.',
    },
  ];

  return (
    <section className="bg-cream-soft py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-2xl px-8 py-12 text-center md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] md:text-sm">
              Why choose me
            </p>

            <div className="space-y-3">
              <h2 className="text-4xl leading-tight tracking-tight text-black lg:text-5xl">
                What sets my practice apart
              </h2>
              <p className="font-sans text-base text-black/70 lg:text-lg">
                Registered Massage Therapy focused on consistent results, respectful care, and long-term wellness.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 md:mt-12 md:grid-cols-3 md:gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="mx-auto flex max-w-sm flex-col items-center justify-start gap-4 text-center border border-gray-400/50 p-6 rounded-xl"
                >
                  <Icon className="h-10 w-10 lg:h-11 lg:w-11" aria-hidden="true" />
                  <h3 className="text-2xl leading-tight lg:text-3xl">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-base leading-6 text-black/70 lg:text-lg">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
