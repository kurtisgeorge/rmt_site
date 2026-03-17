import oilPlate from "../assets/figures/images/aesthetic_oil_plate.jpg";

export default function Understanding() {
  return (
    <section className="relative isolate overflow-hidden bg-cream">
      <img
        src={oilPlate}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto flex min-h-80 max-w-7xl items-center justify-center px-6 py-16 text-center text-white md:min-h-96 md:px-10 lg:px-12 lg:py-20 xl:py-24">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.08em] md:text-sm">
            Understanding
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            What massage therapy does
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/90 md:text-base lg:text-lg">
            Massage therapy is the skilled manipulation of soft tissue, muscle,
            fascia, and connective tissue to reduce pain, improve function, and
            support healing.
          </p>
        </div>
      </div>
    </section>
  );
}
