import { HeroIntro } from "./HeroIntro";
import { HeroShowcase } from "./HeroShowcase";

function AuroraBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute left-[8%] top-[-10%] h-[48vw] max-h-[680px] w-[48vw] max-w-[680px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,.30),transparent_62%)] blur-[36px] animate-aurora-a" />
      <div className="absolute bottom-[-14%] right-[4%] h-[44vw] max-h-[620px] w-[44vw] max-w-[620px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,.22),transparent_60%)] blur-[40px] animate-aurora-b" />
      <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_50%_-10%,transparent_40%,rgba(7,7,10,.7))]" />
    </div>
  );
}

// Sección hero (texto + showcase de dispositivo)
export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Leonardo Buleje"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden px-6 pb-20 pt-[120px] max-[560px]:px-[18px]"
    >
      <AuroraBackground />
      <div className="relative z-[2] mx-auto grid w-full max-w-[1180px] items-center gap-12 min-[881px]:grid-cols-[1.05fr_0.95fr]">
        <HeroIntro />
        <HeroShowcase />
      </div>
    </section>
  );
}
