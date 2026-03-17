import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import WhyMe from "./components/WhyMe.tsx"
import Understanding from "./components/Understanding.tsx";
import Services from "./components/Services.tsx";
import Treated from "./components/Treated.tsx";

export default function App() {
  return (
    <div className="bg-cream-soft">
      <Navbar />
      <Hero />
      <Services />
      <Understanding />
      <Treated />
      <WhyMe />
    </div>
  );
}
