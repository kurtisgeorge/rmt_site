import { useState } from "react";
import { ChevronUp } from "lucide-react";
import FadeIn from "./FadeIn";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "What should I expect at my first session?",
    answer:
      "Your first session begins with intake forms and a conversation about your health history, concerns, and treatment goals. Alexis will assess your movement and tissue quality, explain the treatment approach, and work with you throughout the session to make sure you feel comfortable and supported.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Sessions are available in 30, 45, and 60 minute treatments. The right length depends on your needs, goals, and the areas being addressed.",
  },
  {
    question: "Do I need to prepare for my appointment?",
    answer:
      "Wear comfortable clothing and arrive a few minutes early if it is your first visit. You may be asked to complete intake information before treatment. It is also a good idea to stay hydrated and avoid heavy activity immediately afterward.",
  },
  {
    question: "What treatment methods do you use?",
    answer:
      "Treatments are tailored to your needs and may include therapeutic massage, deep tissue techniques, relaxation-focused work, cupping, and Gua Sha when appropriate. Alexis adjusts each session based on your goals, comfort, and what your body needs that day.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment options may vary by location and booking setup at Proactive. Please confirm current payment and direct billing options when booking your appointment.",
  },
  {
    question: "Is massage covered by insurance?",
    answer:
      "Many insurance plans include coverage for registered massage therapy. Coverage and direct billing availability depend on your provider and plan, so it is best to confirm your details before your appointment.",
  },
];

const leftColumnItems = faqItems.slice(0, 3);
const rightColumnItems = faqItems.slice(3);

function AccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-t border-stone-300/80 py-4 md:py-5">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full justify-center px-4 sm:px-6 md:px-0 group"
        aria-expanded={isOpen}
      >
        <div className="flex w-full max-w-md items-center justify-between gap-4 text-left">
          <h3 className="flex-1 text-left text-base leading-tight text-black transition duration-150 group-hover:text-black/70 md:text-lg">
            {item.question}
          </h3>
          <ChevronUp
            className={`h-4 w-4 shrink-0 text-black transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="mx-auto max-w-md px-4 text-left text-sm leading-7 text-black/70 sm:px-6 md:px-0 md:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-black md:text-5xl">
            Questions
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/65 md:text-base">
            Answers to common questions about sessions and care
          </p>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-10 md:mt-14 md:grid-cols-2">
          <div>
            {leftColumnItems.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>

          <div>
            {rightColumnItems.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
