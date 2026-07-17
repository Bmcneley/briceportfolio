import { Link } from "react-router-dom";
import threeDViewPCB from "../assets/customflight_3dviewv2.png";
// Drop your image files in src/assets, import them here, and set them
// as the src on the matching <img> below.
// import nasaUsliPreview from "../assets/nasa-usli-preview.png";
// import highAltitudePreview from "../assets/high-altitude-preview.png";
// import midAmericanPreview from "../assets/midamerican-preview.png";

export default function Portfolio() {
  return (
    <div className="border-t border-white/10">
      <section
        id="portfolio"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20"
      >
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          View My Portfolio
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            to="/portfolio/custom-flight-computer"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30"
          >
            <div className="relative h-40 overflow-hidden bg-white/5">
              <img
                src={threeDViewPCB}
                alt="Custom Flight Computer PCB 3D view"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                Custom Flight Computer
              </h3>
            </div>
          </Link>

          <Link
            to="/portfolio/nasa-usli-payload"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30"
          >
            <div className="relative h-40 overflow-hidden bg-white/5">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7"
                alt="NASA USLI Payload"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                NASA USLI Payload
              </h3>
            </div>
          </Link>

          <Link
            to="/portfolio/high-altitude-weather-aircraft"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30"
          >
            <div className="relative h-40 overflow-hidden bg-white/5">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7"
                alt="High Altitude Weather Aircraft"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                High Altitude Weather Aircraft
              </h3>
            </div>
          </Link>

          <Link
            to="/portfolio/midamerican-energy-intern"
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30"
          >
            <div className="relative h-40 overflow-hidden bg-white/5">
              <img
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7"
                alt="MidAmerican Energy Intern"
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">
                MidAmerican Energy Intern
              </h3>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
