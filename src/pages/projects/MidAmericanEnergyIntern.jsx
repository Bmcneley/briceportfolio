import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "../../components/StarBackground";
import Gallery from "../../components/Gallery";

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
        <Gallery />
        <p className="mt-6 text-base leading-relaxed text-white/80">
          Placeholder project description — replace with real details about
          this project: the problem, your approach, the tech stack, and the
          outcome.
        </p>
      </div>
    </div>
  );
}
