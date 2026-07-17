import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20"
    >
      <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
        Portfolio
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          to="/portfolio/custom-flight-computer"
          className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-white/30"
        >
          <div className="flex h-40 items-center justify-center bg-white/5 text-white">
            Project preview
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
          <div className="flex h-40 items-center justify-center bg-white/5 text-white">
            Project preview
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
          <div className="flex h-40 items-center justify-center bg-white/5 text-white">
            Project preview
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
          <div className="flex h-40 items-center justify-center bg-white/5 text-white">
            Project preview
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-white">
              MidAmerican Energy Intern
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
