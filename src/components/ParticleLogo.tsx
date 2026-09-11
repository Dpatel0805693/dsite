"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  seed: number;
};

const MAX_PARTICLES = 5000;

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: -9999,
    y: -9999,
  });

  const scroll = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let particles: Particle[] = [];
    let animationFrame = 0;

    /*
     * --------------------------------------------------
     * CREATE PARTICLE TEXT
     * --------------------------------------------------
     */

    const createParticles = () => {
      const source = document.createElement("canvas");

      const sourceCtx =
        source.getContext("2d");

      if (!sourceCtx) return;

      const sourceWidth = 1600;
      const sourceHeight = 500;

      source.width = sourceWidth;
      source.height = sourceHeight;

      sourceCtx.clearRect(
        0,
        0,
        sourceWidth,
        sourceHeight
      );

      /*
       * DHWANI PATEL
       */

      const titleSize = Math.min(
        170,
        width * 0.12
      );

      sourceCtx.font =
        `600 ${titleSize}px "Courier New", monospace`;

      sourceCtx.textAlign = "center";
      sourceCtx.textBaseline = "middle";
      sourceCtx.fillStyle = "white";

      sourceCtx.fillText(
        "DHWANI PATEL",
        sourceWidth / 2,
        180
      );

      /*
       * CREATIVE DEVELOPER...
       */

      const subtitleSize = Math.min(
        46,
        width * 0.033
      );

      sourceCtx.font =
        `500 ${subtitleSize}px "Courier New", monospace`;

      sourceCtx.fillText(
        "CREATIVE DEVELOPER & DIGITAL DESIGNER",
        sourceWidth / 2,
        315
      );

      const image =
        sourceCtx.getImageData(
          0,
          0,
          sourceWidth,
          sourceHeight
        );

      /*
       * Larger gap = fewer particles.
       * This is intentionally conservative
       * for performance.
       */

      const gap = 9;

      const nextParticles: Particle[] = [];

      for (
        let y = 0;
        y < sourceHeight;
        y += gap
      ) {
        for (
          let x = 0;
          x < sourceWidth;
          x += gap
        ) {
          if (
            nextParticles.length >=
            MAX_PARTICLES
          ) {
            break;
          }

          const index =
            (y * sourceWidth + x) * 4;

          const alpha =
            image.data[index + 3];

          if (alpha > 150) {
            nextParticles.push({
              x:
                x -
                sourceWidth / 2,

              y:
                y -
                sourceHeight / 2,

              homeX:
                x -
                sourceWidth / 2,

              homeY:
                y -
                sourceHeight / 2,

              vx: 0,
              vy: 0,

              seed:
                Math.random(),
            });
          }
        }

        if (
          nextParticles.length >=
          MAX_PARTICLES
        ) {
          break;
        }
      }

      /*
       * If particle count changes after resize,
       * start them at their correct locations.
       */

      particles =
        nextParticles;
    };

    /*
     * --------------------------------------------------
     * RESIZE
     * --------------------------------------------------
     */

    const resize = () => {
      width =
        window.innerWidth;

      height =
        window.innerHeight;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width =
        width * dpr;

      canvas.height =
        height * dpr;

      canvas.style.width =
        `${width}px`;

      canvas.style.height =
        `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      createParticles();
    };

    /*
     * --------------------------------------------------
     * MOUSE
     * --------------------------------------------------
     */

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.current.x =
        event.clientX -
        rect.left -
        width / 2;

      mouse.current.y =
        event.clientY -
        rect.top -
        height / 2;
    };

    const handleMouseLeave = () => {
      mouse.current.x =
        -9999;

      mouse.current.y =
        -9999;
    };

    /*
     * --------------------------------------------------
     * SCROLL
     * --------------------------------------------------
     */

    const handleScroll = () => {
      /*
       * Hero is approximately one viewport.
       *
       * 0 = intact
       * 1 = completely scattered
       */

      const progress =
        window.scrollY /
        (window.innerHeight * 0.85);

      scroll.current =
        Math.max(
          0,
          Math.min(1, progress)
        );
    };

    /*
     * --------------------------------------------------
     * ANIMATION
     * --------------------------------------------------
     */

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const centerX =
        width / 2;

      const centerY =
        height / 2;

      /*
       * Responsive scale
       */

      const scale = Math.min(
        width / 1500,
        height / 650
      );

      const scatter =
        scroll.current;

      /*
       * Fade begins near the end
       * of the hero transition.
       */

      const fade =
        scatter < 0.68
          ? 1
          : 1 -
            (scatter - 0.68) /
              0.32;

      /*
       * Mouse settings
       */

      const mouseX =
        mouse.current.x;

      const mouseY =
        mouse.current.y;

      const mouseRadius = 190;

      particles.forEach(
        (particle) => {
          /*
           * ------------------------------------------------
           * TARGET POSITION
           * ------------------------------------------------
           */

          const targetX =
            particle.homeX *
              scale +
            centerX;

          const targetY =
            particle.homeY *
              scale +
            centerY;

          /*
           * ------------------------------------------------
           * SCATTER POSITION
           * ------------------------------------------------
           *
           * Each particle gets its own
           * stable direction.
           */

          const angle =
            particle.seed *
            Math.PI *
            2;

          const distance =
            300 +
            particle.seed *
              500;

          const scatterX =
            Math.cos(angle) *
            distance;

          const scatterY =
            Math.sin(angle) *
            distance;

          /*
           * Smoothly interpolate
           * between text and scattered position.
           */

          const desiredX =
            targetX +
            scatterX * scatter;

          const desiredY =
            targetY +
            scatterY * scatter;

          /*
           * ------------------------------------------------
           * MOUSE RIPPLE
           * ------------------------------------------------
           */

          const currentX =
            particle.x;

          const currentY =
            particle.y;

          const dx =
            currentX -
            (mouseX + centerX);

          const dy =
            currentY -
            (mouseY + centerY);

          const distanceToMouse =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distanceToMouse <
              mouseRadius &&
            scatter < 0.35
          ) {
            const strength =
              1 -
              distanceToMouse /
                mouseRadius;

            const angleToMouse =
              Math.atan2(
                dy,
                dx
              );

            /*
             * Strong outward push
             */

            const force =
              strength * 8;

            particle.vx +=
              Math.cos(
                angleToMouse
              ) *
              force;

            particle.vy +=
              Math.sin(
                angleToMouse
              ) *
              force;

            /*
             * Small tangential movement
             * creates the water-like swirl.
             */

            const swirl =
              strength * 2.5;

            particle.vx +=
              -Math.sin(
                angleToMouse
              ) *
              swirl;

            particle.vy +=
              Math.cos(
                angleToMouse
              ) *
              swirl;
          }

          /*
           * ------------------------------------------------
           * RETURN / SCATTER PHYSICS
           * ------------------------------------------------
           */

          const spring =
            scatter > 0.01
              ? 0.018
              : 0.014;

          particle.vx +=
            (desiredX -
              particle.x) *
            spring;

          particle.vy +=
            (desiredY -
              particle.y) *
            spring;

          /*
           * Damping
           */

          particle.vx *=
            0.84;

          particle.vy *=
            0.84;

          particle.x +=
            particle.vx;

          particle.y +=
            particle.vy;

          /*
           * ------------------------------------------------
           * DRAW
           * ------------------------------------------------
           */

          const size =
            4 -
            scatter * 1.2;

          /*
           * Instead of using expensive
           * per-particle blur, we create
           * softness by reducing opacity
           * and slightly enlarging the
           * particle during scattering.
           */

          const softSize =
            size +
            scatter * 2;

          ctx.globalAlpha =
            Math.max(
              0,
              fade
            );

          ctx.fillStyle =
            "white";

          ctx.fillRect(
            particle.x -
              softSize / 2,
            particle.y -
              softSize / 2,
            softSize,
            softSize
          );
        }
      );

      ctx.globalAlpha = 1;

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    /*
     * --------------------------------------------------
     * EVENTS
     * --------------------------------------------------
     */

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    resize();

    handleScroll();

    animate();

    /*
     * --------------------------------------------------
     * CLEANUP
     * --------------------------------------------------
     */

    return () => {
      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        h-full
        w-full
        pointer-events-auto
      "
      aria-label="Dhwani Patel"
    />
  );
}