import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Understanding from "./components/Understanding.tsx";
import Services from "./components/Services.tsx";
import massage1 from "./assets/figures/images/massage_1.jpg";
import massage2 from "./assets/figures/images/massage_2.jpg";
import massage3 from "./assets/figures/images/massage_3.jpg";

export default function App() {
  return (
    <div className="bg-cream-soft">
      <Navbar />
      <Hero />
      <Understanding />
      <Services
        eyebrow="Services"
        title="What I Offer"
        description="Three approaches to meet your needs."
        items={[
          {
            title: "Relaxation massage",
            description:
              "Ease tension and calm the nervous system. Gentle, flowing work for restoration.",
            imageSrc: massage1,
          },
          {
            title: "Deep tissue work",
            description:
              "Targeted pressure on muscle and fascia. Effective for chronic tension and injury recovery.",
            imageSrc: massage2,
          },
          {
            title: "Therapeutic release",
            description:
              "Specialized technique for restricted movement and pain. Combines assessment with precise treatment.",
            imageSrc: massage3,
          },
        ]}
      />
    </div>
  );
}
