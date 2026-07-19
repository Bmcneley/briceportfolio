import nasaLogo from "../assets/NASA_logo.svg";
import midAmericanEnergyLogo from "../assets/MidAmerican_Energy_Company_logo.svg";
import iowaStateLogo from "../assets/Iowa_State_Cyclones_logo.svg";
import karlLogo from "../assets/karl.png";

const experience = [
  {
    role: "Electrical Team Lead",
    org: "NASA Student Launch Initiative",
    period: "Aug 2025 - Present",
    bullets: [
      "Delivered a competition-qualified rocket payload that passed 100% of NASA safety and performance benchmarks by leading a 4-engineer team through the full systems engineering lifecycle",
      "Earned approval at every NASA review milestone by authoring Proposal, PDR, CDR, and FRR documentation and performing requirements verification for payload electrical design, testing, and system safety",
      "Achieved zero faults at final assembly, confirmed through systems integration and test, by developing wiring diagrams, electrical schematics, and CAD models and coordinating across mechanical, operations, and safety teams",
      "Met the NASA target apogee within 2% of requirement by performing Ansys Fluent CFD simulations to model rocket aerodynamics, improve stability, and optimize vehicle design",
      "Held total payload mass under 5 lb while improving vehicle stability by 3D-printing the payload structure and iterating the design through ground and flight testing",
    ],
    logo: nasaLogo,
  },
  {
    role: "Electric Distribution Engineer",
    org: "MidAmerican Energy",
    period: "May 2026 - Present",
    bullets: [
      "Designed overhead and underground power distribution for residential and commercial customers, producing work orders, one-line diagrams, and construction prints to utility and NESC standards",
      "Sized transformers and conductors for new and upgraded services by modeling circuits in GIS and running load and voltage-drop calculations",
      "Managed project scope, budget, schedule, and easements through construction release, coordinating with field crews, operations teams, and customers",
    ],
    logo: midAmericanEnergyLogo,
  },
  {
    role: "M2I Lab Monitor",
    org: "Iowa State University",
    period: "Jan 2026 - Present",
    bullets: [
      "Oversaw the Make to Innovate (M2I) lab during open hours, providing hands-on assistance and guidance that helped student teams achieve their project goals",
      "Enforced lab safety regulations and equipment protocols, maintaining a zero-incident safety record",
      "Trained new lab users on 3D printers, laser cutters, and CNC equipment, expanding safe and independent use of the makerspace",
    ],
    logo: iowaStateLogo,
  },
  {
    role: "New Car Wash Bay Detailer",
    org: "Karl Chevrolet",
    period: "Jun 2023 - Jan 2026",
    bullets: [
      "Detailed new vehicles with precision, ensuring exceptional customer experience through rigorous attention to detail and quality standards",
      "Optimized lot organization and layout by strategically planning vehicle placement, demonstrating critical thinking and effective problem-solving under high-pressure conditions, which improved sale conversion rates",
      "Coordinated the detailing workflow to guarantee timely vehicle delivery, balancing operational efficiency with quality through effective time management and clear team communications",
    ],
    logo: karlLogo,
  },
];

export default function Experience() {
  return (
    <div className="border-t border-white/10">
      <section
        id="experience"
        className="mx-auto max-w-4xl scroll-mt-24 px-4 py-20 sm:px-6"
      >
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          My Project and Job Experience
        </h2>
        <div className="mt-10 flex flex-col gap-6">
          {experience.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition-colors hover:border-white/30 sm:flex-row sm:items-start sm:p-6 sm:text-left"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/90 p-2">
                <img
                  src={item.logo}
                  alt={item.org}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col items-center gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <span className="text-sm text-white/40">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-white/60">
                  {item.org}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-left text-sm text-white/70 marker:text-white/30">
                  {item.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
