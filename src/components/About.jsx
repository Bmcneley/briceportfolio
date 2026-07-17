import meInASuit from "../assets/MeInASuit.JPG";

export default function About() {
  return (
    <div className="border-t border-white/10">
      <section
        id="about"
        className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6"
      >
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          About Me
        </h2>
        <div className="mt-10 flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-white/30 sm:flex-row sm:items-center sm:p-6 sm:text-left">
          <img
            src={meInASuit}
            alt="Brice McNeley"
            className="h-56 w-44 shrink-0 rounded-2xl object-cover object-top sm:h-60 sm:w-48"
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-white">
              Who am I and why should you care?
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
              I'm Brice - someone who learns quickly and learns by doing.
              Throughout my engineering education and career, I've deliberately
              sought out the toughest challenges I could find, sharpening my
              skills and turning them toward real innovation. Serving as
              Electrical Lead on my university's NASA Launch Challenge team and
              working as an Electric Distribution Engineer have both pushed me
              to apply what I learn quickly and under pressure, and to manage
              projects end to end, coordinating people, timelines, and technical
              trade-offs to get things moving.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
