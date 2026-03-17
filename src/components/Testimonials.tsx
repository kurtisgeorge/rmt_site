import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      '"Alexis listens and delivers exactly what my body needed. Professional and effective."',
    name: "-Alex O.",
  },
  {
    quote:
      '"The deep tissue work changed how I move. No pain, just results."',
    name: "-Jordan T.",
  },
  {
    quote:
      '"Finally found someone who treats massage like the clinical work it is."',
    name: "-Sam R.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="bg-cream-soft py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-2xl px-5 py-12 sm:px-8 md:px-12 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl leading-tight text-black md:text-5xl">
              What clients say
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
              Real feedback from real people
            </p>
          </div>

          <div className="mt-10 hidden gap-6 md:grid md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex h-full min-h-56 flex-col items-center rounded-2xl border border-gray-500/50 px-8 py-8 text-center"
              >
                <div
                  className="flex items-center gap-1 text-black"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="mt-5 flex min-h-[6rem] items-start">
                  <p className="text-sm leading-7 text-black/80">
                    {testimonial.quote}
                  </p>
                </div>
                <p className="text-sm italic text-black/70">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <article
                    key={index}
                    className="w-full flex-none px-1"
                    aria-hidden={activeIndex !== index}
                  >
                    <div className="flex min-h-56 flex-col items-center rounded-2xl border border-gray-500/50 px-6 py-8 text-center">
                      <div
                        className="flex items-center gap-1 text-black"
                        aria-label="5 out of 5 stars"
                      >
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <div className="mt-5 flex min-h-[7.5rem] items-start">
                        <p className="text-sm leading-7 text-black/80">
                          {testimonial.quote}
                        </p>
                      </div>
                      <p className="mt-2 text-sm italic text-black/70">
                        {testimonial.name}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50  text-black"
                aria-label="Show previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeIndex === index ? "bg-black" : "bg-black/20"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-pressed={activeIndex === index}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50 text-black "
                aria-label="Show next testimonial"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
