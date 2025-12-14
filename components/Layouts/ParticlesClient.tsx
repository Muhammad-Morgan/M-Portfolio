"use client";

import Particles from "react-tsparticles";

const ParticlesClient = () => {
  return (
    <Particles
      options={{
        fps_limit: 60,
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1, enable: true },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
};

export default ParticlesClient;
