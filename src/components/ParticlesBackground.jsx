import React, { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { Particles } from "react-particles";

function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0F172A", // Dark background color for contrast
          },
        },
        color: {
          value: ["#0EA5E9", "#3B82F6", "#38BDF8", "#7DD3FC"] // Color gradient for particles
        },
        fpsLimit: 120, // Set the frame rate to keep animations smooth
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true, // Make the particles responsive on screen resize
          },
          modes: {
            push: {
              quantity: 4, // Push 4 new particles on click
            },
            repulse: {
              distance: 200, // Distance for repulsion
              duration: 0.4, // Duration of repulsion effect
            },
          },
        },
        particles: {
          color: {
            value: "#0EA5E9", // Particle color
          },
          links: {
            color: "#0EA5E9", // Color for the links connecting particles
            distance: 150, // Link distance between particles
            enable: true,
            opacity: 0.5, // Opacity of the links
            width: 1, // Width of the link lines
          },
          move: {
            direction: "none", // Random particle direction
            enable: true,
            outModes: {
              default: "bounce", // Particle bounce when they reach the boundary
            },
            random: false,
            speed: 2, // Speed of particle movement
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 600, // Density of particles
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Opacity of the particles
          },
          shape: {
            type: "circle", // Change to 'circle', 'square', 'triangle', etc.
          },
          size: {
            value: { min: 1, max: 5 }, // Size range of the particles
          },
        },
        detectRetina: true, // Enable retina display support
      }}
    />
  );
}

export default ParticlesBackground;
