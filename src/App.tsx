import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import WhyMe from "./components/WhyMe.tsx"
import Understanding from "./components/Understanding.tsx";
import Services from "./components/Services.tsx";
import Process from "./components/Process.tsx";
import Treated from "./components/Treated.tsx";
import Pricing from "./components/Pricing.tsx";
import Testimonials from "./components/Testimonials.tsx";
import FAQ from "./components/FAQ.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div id="top" className="bg-cream-soft">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Understanding />
      <Treated />
      <Process />
      <About />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
