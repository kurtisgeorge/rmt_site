import { useState } from "react";
import { ChevronUp } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const leftColumnItems: FaqItem[] = [
  {
    question: "What should I expect?",
    answer:
      "Your first session starts with intake forms and a conversation about your health history and what you want to address. I'll assess your movement and tissue quality, explain the treatment plan, and work with you throughout. You'll leave with home care advice and a chance to book your next appointment.",
  },
  {
    question: "How long are sessions?",
    answer:
      "Sessions run 30, 45, 60, or 90 minutes. Longer sessions allow for deeper assessment and more comprehensive work. Choose what fits your needs and schedule.",
  },
  {
    question: "Do I need to prepare?",
    answer:
      "Wear comfortable clothing you can move in. Arrive a few minutes early to complete intake forms. Eat lightly before your appointment and avoid heavy exercise right after.",
  },
  {
    question: "What payment methods?",
    answer:
      "I accept cash, debit, and credit. Direct billing to most major insurance providers is available. All rates include HST.",
  },
  {
    question: "Is massage covered?",
    answer:
      "Many insurance plans cover registered massage therapy. Check your policy or ask me. I can often bill directly to your provider. Coverage varies by plan.",
  },
];

const rightColumnItems: FaqItem[] = [
  {
    question: "Reach out by phone or email anytime",
    answer:
      "Your first session starts with intake forms and a conversation about your health history and goals. I'll assess your movement and tissue quality, explain the treatment plan, and work with you throughout the session.",
  },
  {
    question: "What happens first?",
    answer:
      "Sessions are available in 30, 45, 60, or 90 minute blocks. Longer appointments allow for deeper assessment and more thorough work on the areas that need it most.",
  },
  {
    question: "How long is a session?",
    answer:
      "Wear comfortable clothing you can move in and arrive a few minutes early for paperwork. Eat lightly beforehand and avoid strenuous activity immediately after your appointment.",
  },
  {
    question: "What should I bring?",
    answer:
      "I accept cash, debit, and credit cards. Direct billing to most major insurance providers is available, and all rates include HST.",
  },
  {
    question: "How do I pay?",
    answer:
      "Many insurance plans cover registered massage therapy. Check your policy or contact me. I can often bill directly to your provider. Coverage depends on your specific plan.",
  },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-t border-stone-300/80 py-4 md:py-5">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full justify-center px-4 sm:px-6 md:px-0"
        aria-expanded={isOpen}
      >
        <div className="flex w-full max-w-md items-center justify-between gap-4 text-left">
          <h3 className="flex-1 text-left text-base leading-tight text-black md:text-lg">
            {item.question}
          </h3>
          <ChevronUp
            className={`h-4 w-4 shrink-0 text-black transition-transform duration-200 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            aria-hidden="true"
          />
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
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
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-black md:text-5xl">
            Questions
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/65 md:text-base">
            Answers to common questions about sessions and care
          </p>
        </div>

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
