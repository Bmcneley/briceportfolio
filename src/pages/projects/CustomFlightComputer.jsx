import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "../../components/StarBackground";
import Gallery from "../../components/Gallery";
import flightComputer1 from "../../assets/flightcomputer_1.png";
import flightComputer2 from "../../assets/flightcomputer_2.png";
import flightComputer3 from "../../assets/flightcomputer_3.png";
import flightComputer4 from "../../assets/flightcomputer_4.png";

const galleryImages = [
  flightComputer1,
  flightComputer2,
  flightComputer3,
  flightComputer4,
];

export default function CustomFlightComputer() {
  return (
    <div className="relative min-h-screen bg-black">
      <StarBackground />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <h1 className="mt-8 text-3xl font-bold text-white sm:text-4xl">
          Custom Flight Computer
        </h1>
        <Gallery images={galleryImages} />
        <p className="mt-6 text-base leading-relaxed text-white/80">
          I designed a simple flight computer in KiCad to test my understanding
          of PCB design. The PCB is equipped with a barometer, IMU, flash chip,
          USB-C receptacle, and some breakout pins for debugging. The main
          processing board that the computer uses is a STM32, for low power but
          high processing power capabilities. The main goal of this computer is
          to log rocket flight data and store it onto the flash chip for easy
          retreival and interpretation. This data is most useful for calculating
          the apogee, speed, and trajectory of a rocket.
        </p>
      </div>
    </div>
  );
}
