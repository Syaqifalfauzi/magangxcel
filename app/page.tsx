// src/app/page.tsx
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import AboutCompany from "./components/sections/AboutCompany";
import Internship from "./components/sections/Internship";
import Activities from "./components/sections/Activities";
import Stats from "./components/sections/Stats";
import Team from "./components/sections/Team";
import Sponsors from "./components/sections/Sponsors";
import CTA from "./components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutCompany />
        <Internship />
        <Activities />
        <Stats />
        <Team />
        <CTA />
        <Sponsors />

      </main>

      <Footer />
    </>
  );
}
