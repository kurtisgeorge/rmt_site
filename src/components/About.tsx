import alexisLake from "../assets/figures/images/alexis_lake.jpeg";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-pink-dark py-12 md:bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="grid items-stretch gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:gap-10">
          <FadeIn
            direction="left"
            className="order-2 overflow-hidden rounded-2xl md:order-1"
          >
            <img
              src={alexisLake}
              alt="Alexis standing in front of a mountain lake"
              className="h-full w-full object-cover"
            />
          </FadeIn>

          <FadeIn
            direction="right"
            delay={80}
            as="article"
            className="order-1 overflow-hidden px-5 py-8 text-white text-center md:text-left sm:px-7 md:order-2 rounded-2xl md:bg-pink-dark md:px-8 md:py-10 lg:px-10 lg:py-12"
          >
            <p className="text-xs uppercase tracking-[0.1em] text-white/85 md:hidden">
              Background
            </p>
            <h2 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl md:mt-0">
              A little about me
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
              Growing up in Clarenville, NL, I graduated from Clarenville High
              School in 2013. Knowing I wanted a career in the health field, I
              continued my education in St. John&apos;s, where I attended Academy
              Canada and enrolled in the Massage Therapy program.
            </p>

            <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-6">
              <div>
                <h3 className="font-serif text-2xl leading-tight">
                  Training and experience
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/90">
                  After completing the program in August 2015, I received my
                  provincial registration in November and accepted my first
                  position as a Registered Massage Therapist in January 2016.
                  Working alongside experienced colleagues helped me continue
                  learning, strengthening my clinical skills, and deepening my
                  passion for helping people feel better.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl leading-tight">
                  Life and practice
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/90">
                  While I enjoyed my time in St. John&apos;s, my heart was pulling
                  me back to my hometown. I returned to Clarenville and have since
                  built a wonderful clientele. I now practice from the Proactive
                  location on Thompson Street, where I continue doing the work I
                  love. When I&apos;m not at the clinic, you can usually find me
                  chasing my boys, going on family hikes, enjoying campfires with
                  friends, or spending time out on the water.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
