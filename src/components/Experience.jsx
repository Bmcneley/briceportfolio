import nasaLogo from "../assets/NASA_logo.svg";
import midAmericanEnergyLogo from "../assets/MidAmerican_Energy_Company_logo.svg";
import iowaStateLogo from "../assets/Iowa_State_Cyclones_logo.svg";
import karlLogo from "../assets/karl.png";

const experience = [
  {
    role: "Role Title",
    org: "NASA Student Launch Initiative",
    period: "20XX — Present",
    description:
      "Short description of the role, responsibilities, and impact. Replace with real experience.",
    logo: nasaLogo,
  },
  {
    role: "Role Title",
    org: "MidAmerican Energy",
    period: "20XX — 20XX",
    description:
      "Short description of the role, responsibilities, and impact. Replace with real experience.",
    logo: midAmericanEnergyLogo,
  },
  {
    role: "Role Title",
    org: "Iowa State University",
    period: "20XX — Present",
    description:
      "Short description of the role, responsibilities, and impact. Replace with real experience.",
    logo: iowaStateLogo,
  },
  {
    role: "Role Title",
    org: "Karl Chevrolet",
    period: "20XX — 20XX",
    description:
      "Short description of the role, responsibilities, and impact. Replace with real experience.",
    logo: karlLogo,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-24 px-6 pt-8 pb-24">
      <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">Experience</h2>
      <div className="mt-10 flex flex-col gap-6">
        {experience.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/90 p-2">
              <img
                src={item.logo}
                alt={item.org}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="text-sm text-white/40">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-white/60">{item.org}</p>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
