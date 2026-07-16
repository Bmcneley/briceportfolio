export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[65vh] scroll-mt-24 flex-col items-center justify-center px-6 pb-8 text-center"
    >
      <p className="mb-4 text-sm font-medium tracking-widest text-white/50 uppercase">
        Aerospace Engineering, B.S.
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
        <span className="block">Hello, I'm</span>
        <span className="block bg-clip-text text-transparent [animation:shimmer_7s_ease-in-out_infinite] [background-image:linear-gradient(100deg,rgba(255,255,255,0.25)_46%,rgba(255,255,255,1)_50%,rgba(255,255,255,0.25)_54%)] [background-size:250%_100%]">
          Brice McNeley
        </span>
      </h1>
      <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
        I'm an Iowa State student pursuing a bachelor's degree in Aerospace
        Engineering, specializing in rocketry, avionics, and project management.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
    </section>
  );
}
