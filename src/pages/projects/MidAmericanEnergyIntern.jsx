import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "../../components/StarBackground";
import Gallery from "../../components/Gallery";
import midAmerican1 from "../../assets/midamerican/IMG_0328.jpg";
import midAmerican2 from "../../assets/midamerican/IMG_0514.jpg";

const galleryImages = [midAmerican1, midAmerican2];

export default function MidAmericanEnergyIntern() {
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
          MidAmerican Energy Intern
        </h1>
        <Gallery images={galleryImages} />
        <p className="mt-6 text-base leading-relaxed text-white/80">
          I interned for MidAmerican Energy Company as an Electric Distribution
          Engineer during the summer of 2026. During my internship, I designed
          overhead and underground power distribution for residential and
          commercial customers, producing work orders, one-line diagrams, and
          construction prints to utility and NESC standards. I also sized
          transformers and conductors for new and upgraded services by modeling
          circuits in GIS and running load and voltage-drop calculations,
          managed project scope, budget, schedule, and easements through
          construction release, coordinating with field crews, operations teams,
          and customers. A significant part of the internsip was re-designing
          red-tagged poles, which are poles nearing the end of their lifespan.
          An example of a pole like this is in image 1.
        </p>
      </div>
    </div>
  );
}
