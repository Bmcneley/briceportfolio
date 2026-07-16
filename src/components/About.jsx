import { User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl scroll-mt-24 px-6 py-16 text-center"
    >
      <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <User className="h-16 w-16 text-white/30" />
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
