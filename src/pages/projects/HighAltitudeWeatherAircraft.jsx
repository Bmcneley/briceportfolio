import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import StarBackground from "../../components/StarBackground";
import Gallery from "../../components/Gallery";
import aeronimbus2 from "../../assets/aeronimbus/aeronimbus_2.png";
import aeronimbus1 from "../../assets/aeronimbus/aeronimbus_1.png";
import aeronimbus3 from "../../assets/aeronimbus/aeronimbus_3.png";
import aeronimbus4 from "../../assets/aeronimbus/aeronimbus_4.png";

const galleryImages = [aeronimbus3, aeronimbus1, aeronimbus2, aeronimbus4];

export default function HighAltitudeWeatherAircraft() {
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
          High Altitude Weather Aircraft
        </h1>
        <Gallery images={galleryImages} />
        <p className="mt-6 text-base leading-relaxed text-white/80">
          During my performance & design class, I designed a conceptual aircraft
          to fly modular weather instruments at 50,000 ft, leading sizing,
          cost/performance, and trade studies on a 3-person team to match or
          exceed existing weather-collection UAVs. I cut airframe drag while
          packaging all atmospheric sensing instruments by building a full-scale
          SOLIDWORKS CAD model backed by component-level drag build-up
          estimates. We successfully closed the design with a 12% flight-time
          margin above mission requirements by iterating MATLAB analyses of
          range, endurance, climb, and power.
        </p>
      </div>
    </div>
  );
}
