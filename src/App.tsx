import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import WhyMe from "./components/WhyMe.tsx"
import Understanding from "./components/Understanding.tsx";
import Services from "./components/Services.tsx";
import Treated from "./components/Treated.tsx";
import Pricing from "./components/Pricing.tsx";
import FAQ from "./components/FAQ.tsx";

export default function App() {
  return (
    <div className="bg-cream-soft">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Understanding />
      <Treated />
      <WhyMe />
      <FAQ />
    </div>
  );
}
