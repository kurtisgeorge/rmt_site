import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "I initially started seeing Alexis for MVA treatment. She creates a calming, inviting space and is incredibly knowledgeable. Her hands on technique, paired with Gua sha and cupping, provides full body relief. Her reputation truly precedes her, and for good reason!",
    name: "Candace G.",
  },
  {
    quote:
      "Stepping into the treatment room with Alexis is always something to look forward to. She listens attentively and approaches every treatment with clear intention, working thoughtfully with your goals and your body's needs. Her years of experience are evident in the welcoming, comforting space she creates, leaving you with a deep sense of ease and relief.",
    name: "Emma H.",
  },
  {
    quote:
      "Alexis is an outstanding massage therapist. Her kind personality, professionalism, and deep knowledge of human anatomy make her exceptional at what she does. She has helped me through a variety of challenges through her practice.",
    name: "Sue H.",
  },
  {
    quote:
      "I highly recommend Alexis as a massage therapist. I was dealing with ongoing lower back and shoulder problems, and after my sessions, I felt a significant improvement and much-needed relief. Alexis provides excellent, professional service and creates a comfortable, relaxing environment. Her skill and attention to problem areas really made a difference, and I left feeling so much better each time.",
    name: "Caroline P.",
  },
  {
    quote:
      "Alexis has been treating me for many years now. I have a herniation at my C7-T1, which causes neck, back and arm pain. She is very thorough, and knowledgeable. After my treatments I have so much relief. She is pleasant and professional. I would recommend her to anyone!",
    name: "Carolyn G.",
  },
  {
    quote:
      "Alexis provides a treatment that goes beyond trained knowledge & technique — it's intuitive. This, along with her professionalism & genuine care for her client's well-being makes her one of the best! I leave her table feeling relief every single time & I will recommend her always!",
    name: "Hillary P.",
  },
];

const DESKTOP_PAGE_SIZE = 3;
const totalDesktopPages = Math.ceil(testimonials.length / DESKTOP_PAGE_SIZE);

function TestimonialCard({
  testimonial,
  className = "",
}: {
  testimonial: (typeof testimonials)[number];
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`flex flex-col items-center rounded-2xl border border-gray-500/50 px-8 py-8 text-center ${className}`}
    >
      <div
        className="flex items-center gap-1 text-black"
        aria-label="5 out of 5 stars"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
        ))}
      </div>

      <p
        className="mt-4 font-serif text-3xl leading-none text-black/20"
        aria-hidden="true"
      >
        &ldquo;
      </p>

      <p
        className={`text-sm leading-7 text-black/80 ${!isExpanded ? "line-clamp-3" : ""}`}
      >
        {testimonial.quote}
      </p>

      <button
        type="button"
        onClick={() => setIsExpanded((v) => !v)}
        className="mt-2 text-xs text-black/45 underline underline-offset-2 transition hover:text-black/65"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "View less" : "View more"}
      </button>

      <p
        className="mt-4 font-serif text-3xl leading-none text-black/20"
        aria-hidden="true"
      >
        &rdquo;
      </p>

      <div className="mt-4 border-t border-gray-500/20 pt-4">
        <p className="text-sm font-medium text-black/70">{testimonial.name}</p>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  const showDesktopPrev = () =>
    setDesktopPage((p) => (p === 0 ? totalDesktopPages - 1 : p - 1));
  const showDesktopNext = () =>
    setDesktopPage((p) => (p === totalDesktopPages - 1 ? 0 : p + 1));

  const showMobilePrev = () =>
    setMobileIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const showMobileNext = () =>
    setMobileIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-cream-soft py-14 md:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="rounded-2xl px-5 py-12 sm:px-8 md:px-12 md:py-16">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl leading-tight text-black md:text-5xl">
              What clients say
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/65 md:text-base">
              Real feedback from real people
            </p>
          </FadeIn>

          {/* Desktop: 3-per-page sliding carousel */}
          <div className="mt-10 hidden md:block">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${desktopPage * 100}%)` }}
              >
                {Array.from({ length: totalDesktopPages }).map((_, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="grid w-full flex-none grid-cols-3 gap-6"
                  >
                    {testimonials
                      .slice(
                        pageIndex * DESKTOP_PAGE_SIZE,
                        pageIndex * DESKTOP_PAGE_SIZE + DESKTOP_PAGE_SIZE,
                      )
                      .map((testimonial) => (
                        <TestimonialCard
                          key={testimonial.name}
                          testimonial={testimonial}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {totalDesktopPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={showDesktopPrev}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50 text-black transition duration-200 hover:border-gray-600 hover:bg-black/5 active:scale-95"
                  aria-label="Show previous testimonials"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalDesktopPages }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setDesktopPage(i)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                        desktopPage === i ? "bg-black scale-110" : "bg-black/20 hover:bg-black/40"
                      }`}
                      aria-label={`Go to testimonial page ${i + 1}`}
                      aria-pressed={desktopPage === i}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={showDesktopNext}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50 text-black transition duration-200 hover:border-gray-600 hover:bg-black/5 active:scale-95"
                  aria-label="Show next testimonials"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile: single-card carousel */}
          <div className="mt-10 md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="w-full flex-none px-1"
                    aria-hidden={mobileIndex !== index}
                  >
                    <TestimonialCard
                      testimonial={testimonial}
                      className="px-6"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={showMobilePrev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50 text-black transition duration-200 hover:border-gray-600 hover:bg-black/5 active:scale-95"
                aria-label="Show previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setMobileIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                      mobileIndex === index ? "bg-black scale-110" : "bg-black/20 hover:bg-black/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-pressed={mobileIndex === index}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={showMobileNext}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-500/50 text-black transition duration-200 hover:border-gray-600 hover:bg-black/5 active:scale-95"
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
