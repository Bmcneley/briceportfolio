import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "../../components/StarBackground";
import Gallery from "../../components/Gallery";
import nasaPayload1 from "../../assets/nasapayload/IMG_3386.JPG";
import nasaPayload2 from "../../assets/nasapayload/IMG_3470.PNG";
import nasaPayload3 from "../../assets/nasapayload/IMG_3353.jpg";
import nasaPayload4 from "../../assets/nasapayload/IMG_3357.jpg";
import nasaPayload5 from "../../assets/nasapayload/IMG_3394.jpg";
import nasaPayload6 from "../../assets/nasapayload/IMG_3423.jpg";
import nasaPayload7 from "../../assets/nasapayload/IMG_3430.jpg";

const galleryImages = [
  nasaPayload1,
  nasaPayload2,
  nasaPayload3,
  nasaPayload4,
  nasaPayload5,
  nasaPayload6,
  nasaPayload7,
];

export default function NasaUsliPayload() {
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
          NASA USLI
        </h1>
        <Gallery images={galleryImages} />
        <p className="mt-6 text-base leading-relaxed text-white/80">
          The NASA USLI payload was a soil collection rover that was designed by
          my team and I during the 2025-2026 NASA Student Launch Initiative
          Competition cycle. The rover was designed to drive out of the rocket's
          payload bay upon landing, collect at least 50mL of soil, and test it
          for either nitrate-nitrogen level, pH level, or electrical
          conductivity. I was in charge of coordinating the team and designing
          the payload's electrical system along with calculating the power
          budget. The rover was functional before the final competition day,
          however, the payload bay suffered catastrophic failure mid-flight
          which resulted in the payload hitting the ground and becoming
          destroyed. Designing the electrical system for the payload taught me a
          lot about microcontrollers, soldering, and embedded systems, and made
          me more motivated to design my own PCB in the following year. The
          student launch challenge also taught me a lot about project management
          and documentation, as we were required to complete certain
          "milestones" that were due on certain dates throughout the competition
          cycle.
        </p>
      </div>
    </div>
  );
}
