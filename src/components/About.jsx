import { Router } from "react-router-dom";
import { Rocket } from "lucide-react";
import meInASuit from "../assets/MeInASuit.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-20 text-center"
    >
      <div className="mx-auto flex h-80 w-80 items-center justify-center overflow-hidden">
      <div className="relative flex h-72 w-72 items-center justify-center">
        <div className="pointer-events-none absolute inset-0 [animation:spin-ring_5s_linear_infinite]">
          <div className="absolute inset-0 [transform:rotate(-12deg)]">
            <span className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
          </div>
          <div className="absolute inset-0 [transform:rotate(-24deg)]">
            <span className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45" />
          </div>
          <div className="absolute inset-0 [transform:rotate(-36deg)]">
            <span className="absolute top-0 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/25" />
          </div>
          <div className="absolute inset-0 [transform:rotate(-48deg)]">
            <span className="absolute top-0 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10" />
          </div>
          <Rocket className="absolute top-0 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 text-white" />
        </div>
        <div className="h-64 w-64 overflow-hidden rounded-full border border-white/10 bg-white/5">
          <img
            src={meInASuit}
            alt="Brice McNeley"
            className="h-full w-full scale-150 object-cover object-top [transform-origin:top]"
          />
        </div>
      </div>
      </div>
      <h2 className="mt-8 text-2xl font-bold text-white sm:text-3xl">
        Who am I and why should you care?
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
        I'm Brice - someone who learns quickly and learns by doing. Throughout
        my engineering education and career, I've deliberately sought out the
        toughest challenges I could find, sharpening my skills and turning them
        toward real innovation. Serving as Electrical Lead on my university's
        NASA Launch Challenge team and working as an Electric Distribution
        Engineer have both pushed me to apply what I learn quickly and under
        pressure, and to manage projects end to end, coordinating people,
        timelines, and technical trade-offs to get things moving.
      </p>
    </section>
  );
}
