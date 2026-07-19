import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-dvh flex-col items-center justify-center scroll-mt-24 px-6 text-center"
    >
      <div className="flex -translate-y-8 flex-col items-center sm:-translate-y-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-white/70 uppercase">
          <Rocket className="h-3.5 w-3.5" />
          Aerospace Engineering
        </div>
        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="block">Hello, I'm</span>
          <span className="block bg-clip-text text-transparent [animation:shimmer_2.5s_ease-in-out_infinite_alternate] [background-image:linear-gradient(100deg,rgba(255,255,255,0.6)_30%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.6)_70%)] [background-size:250%_100%]">
            Brice McNeley
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
          I'm an Iowa State student pursuing a bachelor's degree in Aerospace
          Engineering, specializing in rocketry, avionics, and project management.
        </p>
        <div className="mt-10 flex w-full max-w-xs flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#portfolio"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            View Portfolio
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            See Experience
          </a>
        </div>
      </div>
    </section>
  );
}
