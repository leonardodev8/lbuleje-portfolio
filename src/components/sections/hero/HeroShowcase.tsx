import heroScreenshot from "../../../assets/hero/hero-screenshot.webp";
import { heroCopy, orbitTech } from "../../../data/profile";
import { useLanguage } from "../../../i18n/useLanguage";
import { Reveal } from "../../ui/Reveal";

// Radio(px) de la órbita del stack alrededor del dispositivo
const ORBIT_RADIUS = 205;
// Inclinación del plano de la órbita(grados)
const ORBIT_TILT = 22;

// Dispositivo central(icono y leyenda)
function PhoneDevice({ caption }: { caption: string }) {
  return (
    <div
      className="relative h-[540px] w-[268px] rounded-[42px] border border-border2 bg-gradient-to-br from-white/[0.13] to-white/[0.03] p-[11px] shadow-[0_40px_90px_-30px_rgba(0,0,0,.8)]"
      style={{ transform: "translateZ(26px)" }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[32px] bg-gradient-to-b from-[#0e0e16] to-[#0a0a10]">
        <div className="absolute left-1/2 top-3 z-[3] h-6 w-24 -translate-x-1/2 rounded-[14px] bg-black" />
        <img
          src={heroScreenshot}
          alt={caption}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/**
  Anillo 3D de tecnologías que orbita el dispositivo. Cada nodo se coloca con
  `rotateY(θ) translateZ(r)`, se "billboard-ea" con `rotateY(-θ)` para mirar a
  cámara y un contador (`orbit-reverse`) cancela la rotación del anillo para que
  el texto permanezca legible mientras gira.
**/
function OrbitRing({ items }: { items: string[] }) {
  const step = 360 / items.length;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 [transform-style:preserve-3d]"
      style={{ transform: `rotateX(${ORBIT_TILT}deg)` }}
    >
      <div className="absolute inset-0 [transform-style:preserve-3d] animate-orbit motion-reduce:animate-none">
        {items.map((tech, i) => {
          const angle = step * i;
          return (
            <div
              key={tech}
              className="absolute inset-0 grid [transform-style:preserve-3d] place-items-center"
              style={{ transform: `rotateY(${angle}deg) translateZ(${ORBIT_RADIUS}px)` }}
            >
              <div className="[transform-style:preserve-3d]" style={{ transform: `rotateY(${-angle}deg)` }}>
                <div className="animate-orbit-reverse motion-reduce:animate-none">
                  <span className="whitespace-nowrap rounded-[10px] border border-border2 bg-bg2/90 px-3 py-1.5 font-mono text-[11px] text-text shadow-[0_8px_20px_-8px_rgba(0,0,0,.7)]">
                    {tech}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Columna visual del hero Split: dispositivo 3D con el stack orbitando
export function HeroShowcase() {
  const { t } = useLanguage();

  return (
    <Reveal delay={150} className="relative flex justify-center">
      {/* Capa 1: perspectiva pura(sin transform propio) */}
      <div className="relative [perspective:1400px] max-[420px]:scale-90">
        {/* Capa 2: flotación del conjunto(preserve-3d para propagar la perspectiva) */}
        <div className="relative [transform-style:preserve-3d] animate-floaty motion-reduce:animate-none">
          {/* Capa 3: inclinación por puntero(sin will-change para no aplanar el 3D) */}
          <div
            className="relative [transform-style:preserve-3d] transition-transform duration-200 ease-out"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-[-8%] inset-y-[-12%] bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,.22),transparent_60%)] blur-[30px]"
              style={{ transform: "translateZ(-90px)" }}
            />
            <PhoneDevice caption={t(heroCopy.screenshotCaption)} />
            <OrbitRing items={orbitTech} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
