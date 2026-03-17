const processSteps = [
  {
    number: "1",
    title: "Intake and consent",
    description:
      "We begin with forms that outline expectations and best practices.",
  },
  {
    number: "2",
    title: "Assessment and testing",
    description:
      "Evaluate movement, range, and posture to understand the body.",
  },
  {
    number: "3",
    title: "Treatment and communication",
    description:
      "Hands-on work with clear communication throughout the session.",
  },
  {
    number: "4",
    title: "Post-treatment and re-booking",
    description:
      "Discuss aftercare and next steps to maintain progress.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.08em] text-black/70 md:text-sm">
            Process
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-black md:text-5xl">
            What to expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/70 md:text-base">
            Each session follows a clear, professional structure designed for
            your comfort and results.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <div className="relative hidden md:block">
            <div
              className="absolute left-[8%] right-[8%] top-4 border-t border-[#e7d8cc]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <article key={step.number} className="text-center">
                  <div className="relative mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#ddb4ab] text-sm text-white">
                    {step.number}
                  </div>
                  <h3 className="mx-auto mt-8 max-w-sm text-center font-serif text-2xl leading-tight text-black">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-52 text-center text-sm leading-7 text-black/70">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:hidden">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="relative mx-auto max-w-48 text-center"
              >
                {index < processSteps.length - 1 ? (
                  <div
                    className="absolute -bottom-6 -left-4 top-8 border-l border-[#e7d8cc]"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="absolute -left-8 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#ddb4ab] text-sm text-white">
                  {step.number}
                </div>
                <h3 className="mx-auto max-w-44 text-center font-serif text-2xl leading-tight text-black">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-48 text-center text-sm leading-7 text-black/70">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
