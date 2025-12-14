"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const particlesInit = async (engine: unknown) => {
    await loadFull(engine as Parameters<typeof loadFull>[0]);
  };

  return (
    <Particles
      init={particlesInit}
      className="pointer-events-none absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        fullScreen: { enable: false },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: "#569601" },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#569601",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 90 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
