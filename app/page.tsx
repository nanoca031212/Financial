import Cardtext from "./components/cardtext";
import Estrutura from "./components/estrutura";
import Hero from "./components/hero";
import Michaelbg from "./components/Michaelbg";
import Navbar from "./components/navbar";
import Section from "./components/section";
import ExperienceCard from "./components/ExperienceCard";
import ClaritySection from "./components/clarity-section";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Navbar />
      <Section />
      <Estrutura />
      <Cardtext />
      <Michaelbg />
      <ExperienceCard />
      <ClaritySection />
    </div>
  );
}
