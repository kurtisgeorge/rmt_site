import pinkFlower from "../assets/figures/images/pink_flower_hero.jpg"

export default function Hero() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-gray-400/50 sm:max-w-none sm:flex sm:items-stretch">
            <div className="flex flex-col justify-center gap-5 p-6 sm:w-1/2 sm:p-8 md:p-10 lg:p-12">
                <h1 className="hero-animate-1 text-center font-serif text-5xl leading-tight sm:text-left md:text-5xl lg:text-6xl">
                    Healing hands, professional care, lasting relief
                </h1>
                <p className="hero-animate-2 mx-auto max-w-md text-center text-sm leading-7 sm:mx-0 sm:text-left md:text-base lg:text-lg">
                    Registered massage therapy tailored to your body—relaxation, deep tissue, and therapeutic treatment for real results.
                </p>
            </div>
            <div className="hero-animate-image aspect-square w-full overflow-hidden sm:w-1/2 sm:flex-none">
                <img 
                src={pinkFlower} 
                alt="Pink Flower"
                className="h-full w-full object-cover" />
            </div>
        </div>
      </div>
    </section>
  )
}
