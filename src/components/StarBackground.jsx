export default function StarBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-repeat opacity-80 animate-[drift-stars_10s_linear_infinite] [background-image:radial-gradient(1.5px_1.5px_at_20px_30px,white,transparent),radial-gradient(1.5px_1.5px_at_40px_70px,white,transparent),radial-gradient(1px_1px_at_90px_40px,white,transparent),radial-gradient(1px_1px_at_130px_80px,white,transparent),radial-gradient(1.5px_1.5px_at_160px_120px,white,transparent),radial-gradient(1px_1px_at_180px_20px,white,transparent)] [background-size:200px_200px]" />
  );
}
