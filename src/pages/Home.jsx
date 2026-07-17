import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import StarBackground from "../components/StarBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
