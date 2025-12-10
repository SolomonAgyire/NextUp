import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Demo from "../components/Demo";
import About from "../components/About";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <About />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}