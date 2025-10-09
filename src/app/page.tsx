import Image from "next/image";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import Products from "./components/Products";
import Benefits from "./components/Benefits";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Products />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
