import FadeIn from "./FadeIn";

const rates = [
  { duration: "30 minutes", price: "$70.44" },
  { duration: "45 minutes", price: "$86.09" },
  { duration: "60 minutes", price: "$100.88" },
];

export default function Pricing() {
  return (
    <section id="rates" className="bg-cream py-12">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
        <FadeIn className="text-center">
          <p className="text-xs uppercase tracking-[0.1em] md:text-sm">
            Rates
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-black md:text-5xl">
            Pricing
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/65 md:text-base">
            Direct billing available to most major insurance providers.
          </p>
        </FadeIn>

        <FadeIn delay={80} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-stone-300/70 px-5 py-4 sm:px-7 md:mt-12 md:px-10 md:py-6">
          <div className="divide-y divide-stone-300/80">
            {rates.map((rate) => (
              <div
                key={rate.duration}
                className="grid grid-cols-[1fr_auto] items-center gap-6 py-4 first:pt-0 last:pb-0"
              >
                <span className="text-base text-black/80 md:text-lg">
                  {rate.duration}
                </span>
                <span className="font-serif text-2xl leading-none text-black md:text-3xl">
                  {rate.price}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <p className="mt-5 text-center text-xs text-black/50">
          *Prices do not include tax.
        </p>

        <div className="mt-8 flex justify-center md:mt-10">
          <a
            href="https://proactivephysio.janeapp.com/locations/clarenville/book#/staff_member/437"
            target="_blank"
            rel="noreferrer"
            className="btn-lift inline-flex items-center justify-center rounded-full bg-pink-primary px-8 py-3 text-base text-white transition hover:bg-pink-dark"
          >
            Book
          </a>
        </div>
      </div>
    </section>
  );
}
