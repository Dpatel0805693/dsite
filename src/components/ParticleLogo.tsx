"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;

  homeX: number;
  homeY: number;

  vx: number;
  vy: number;

  size: number;
  seed: number;
};

const MAX_PARTICLES = 3500;

export default function ParticleLogo() {
  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const mouse = useRef({
    x: -9999,
    y: -9999,
  });

  const scroll =
    useRef(0);

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d", {
        alpha: true,
      });

    if (!ctx) return;

    let width =
      window.innerWidth;

    let height =
      window.innerHeight;

    let particles: Particle[] = [];

    let animationFrame = 0;


    /*
     * ======================================================
     * CREATE PARTICLES
     * ======================================================
     */

    const createParticles = () => {
      const source =
        document.createElement(
          "canvas"
        );

      const sourceCtx =
        source.getContext("2d");

      if (!sourceCtx) return;

      /*
       * Internal text canvas.
       */

      const sourceWidth = 1600;
      const sourceHeight = 400;

      source.width =
        sourceWidth;

      source.height =
        sourceHeight;

      sourceCtx.clearRect(
        0,
        0,
        sourceWidth,
        sourceHeight
      );


      /*
       * ====================================================
       * DHWANI PATEL
       * ====================================================
       *
       * Smaller and centered.
       * The actual position is adjusted
       * during rendering below.
       */

      const titleSize =
        Math.min(
          116,
          width * 0.08
        );

      sourceCtx.font =
        `700 ${titleSize}px "Courier New", monospace`;

      sourceCtx.textAlign =
        "center";

      sourceCtx.textBaseline =
        "middle";

      sourceCtx.fillStyle =
        "white";

      sourceCtx.fillText(
        "DHWANI PATEL",
        sourceWidth / 2,
        sourceHeight / 2
      );


      /*
       * Convert text into a mask.
       */

      const image =
        sourceCtx.getImageData(
          0,
          0,
          sourceWidth,
          sourceHeight
        );


      /*
       * ====================================================
       * FIND PARTICLE LOCATIONS
       * ====================================================
       */

      const candidates: {
        x: number;
        y: number;
      }[] = [];


      /*
       * 5px sampling.
       *
       * Dense enough to look good,
       * but safer for performance.
       */

      const sampleGap = 5;

      for (
        let y = 0;
        y < sourceHeight;
        y += sampleGap
      ) {
        for (
          let x = 0;
          x < sourceWidth;
          x += sampleGap
        ) {
          const index =
            (y * sourceWidth + x) *
            4;

          const alpha =
            image.data[
              index + 3
            ];

          if (
            alpha > 120
          ) {
            candidates.push({
              x,
              y,
            });
          }
        }
      }


      /*
       * ====================================================
       * RANDOMIZE
       * ====================================================
       */

      for (
        let i =
          candidates.length - 1;
        i > 0;
        i--
      ) {
        const j =
          Math.floor(
            Math.random() *
              (i + 1)
          );

        const temp =
          candidates[i];

        candidates[i] =
          candidates[j];

        candidates[j] =
          temp;
      }


      /*
       * ====================================================
       * CREATE PARTICLES
       * ====================================================
       */

      const count =
        Math.min(
          MAX_PARTICLES,
          candidates.length
        );

      const nextParticles:
        Particle[] = [];

      for (
        let i = 0;
        i < count;
        i++
      ) {
        const point =
          candidates[i];

        /*
         * Small organic randomness.
         */

        const randomness = 3.2;

        const randomX =
          (Math.random() - 0.5) *
          randomness;

        const randomY =
          (Math.random() - 0.5) *
          randomness;

        /*
         * Small square pixels.
         */

        const size =
          2.3 +
          Math.random() * 1.4;

        nextParticles.push({
          x:
            point.x -
            sourceWidth / 2 +
            randomX,

          y:
            point.y -
            sourceHeight / 2 +
            randomY,

          homeX:
            point.x -
            sourceWidth / 2 +
            randomX,

          homeY:
            point.y -
            sourceHeight / 2 +
            randomY,

          vx: 0,
          vy: 0,

          size,

          seed:
            Math.random(),
        });
      }

      particles =
        nextParticles;
    };


    /*
     * ======================================================
     * RESIZE
     * ======================================================
     */

    const resize = () => {
      width =
        window.innerWidth;

      height =
        window.innerHeight;

      /*
       * Cap DPR at 1.5.
       */

      const dpr =
        Math.min(
          window.devicePixelRatio ||
            1,
          1.5
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
     * ======================================================
     * MOUSE
     * ======================================================
     */

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      mouse.current.x =
        event.clientX -
        rect.left;

      mouse.current.y =
        event.clientY -
        rect.top;
    };

    const handleMouseLeave = () => {
      mouse.current.x =
        -9999;

      mouse.current.y =
        -9999;
    };


    /*
     * ======================================================
     * SCROLL
     * ======================================================
     */

    const handleScroll = () => {
      const heroHeight =
        window.innerHeight;

      const progress =
        window.scrollY /
        (heroHeight * 0.85);

      scroll.current =
        Math.max(
          0,
          Math.min(
            1,
            progress
          )
        );
    };


    /*
     * ======================================================
     * ANIMATION
     * ======================================================
     */

    const animate = () => {
      /*
       * Clear screen.
       */

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
       * ====================================================
       * LOGO SIZE
       * ====================================================
       */

      const scale =
        Math.min(
          width / 1750,
          height / 700
        );

      const scatter =
        scroll.current;


      /*
       * ====================================================
       * LOGO POSITION
       * ====================================================
       *
       * Slightly left and slightly higher
       * to create more breathing room around
       * the person in the background.
       */

      const logoCenterX =
        centerX -
        width * 0.035;

      const logoCenterY =
        centerY -
        height * 0.055;


      /*
       * ====================================================
       * FADE
       * ====================================================
       */

      const fade =
        scatter < 0.62
          ? 1
          : Math.max(
              0,
              1 -
                (scatter - 0.62) /
                  0.38
            );

      const mouseX =
        mouse.current.x;

      const mouseY =
        mouse.current.y;


      /*
       * ====================================================
       * PARTICLES
       * ====================================================
       */

      const rippleRadius =
        210;

      particles.forEach(
        (
          particle,
          index
        ) => {

          /*
           * ------------------------------------------------
           * HOME POSITION
           * ------------------------------------------------
           */

          const targetX =
            particle.homeX *
              scale +
            logoCenterX;

          const targetY =
            particle.homeY *
              scale +
            logoCenterY;


          /*
           * ------------------------------------------------
           * SCATTER
           * ------------------------------------------------
           */

          const angle =
            Math.sin(
              index * 13.17 +
                particle.seed * 20
            ) *
            Math.PI *
            2;

          const distance =
            160 +
            Math.abs(
              Math.sin(
                index * 4.21 +
                  particle.seed
              )
            ) *
              420;

          const scatterX =
            Math.cos(angle) *
            distance;

          const scatterY =
            Math.sin(angle) *
            distance;

          const desiredX =
            targetX +
            scatterX *
              scatter;

          const desiredY =
            targetY +
            scatterY *
              scatter;


          /*
           * ------------------------------------------------
           * MOUSE RIPPLE
           * ------------------------------------------------
           */

          const dx =
            particle.x -
            mouseX;

          const dy =
            particle.y -
            mouseY;

          const distanceToMouse =
            Math.sqrt(
              dx * dx +
                dy * dy
            );

          if (
            distanceToMouse <
              rippleRadius &&
            scatter < 0.45
          ) {
            const strength =
              1 -
              distanceToMouse /
                rippleRadius;

            const angleToMouse =
              Math.atan2(
                dy,
                dx
              );

            /*
             * Outward water ripple.
             */

            const force =
              strength * 7;

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
             * Slight swirl.
             */

            const swirl =
              strength * 1.8;

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
           * RETURN TO FORM
           * ------------------------------------------------
           */

          particle.vx +=
            (desiredX -
              particle.x) *
            0.018;

          particle.vy +=
            (desiredY -
              particle.y) *
            0.018;


          /*
           * Damping.
           */

          particle.vx *=
            0.84;

          particle.vy *=
            0.84;


          /*
           * Update position.
           */

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
            particle.size +
            scatter * 2;

          const particleAlpha =
            fade *
            (1 -
              scatter * 0.35);

          ctx.globalAlpha =
            particleAlpha;

          ctx.fillStyle =
            "white";

          ctx.fillRect(
            particle.x -
              size / 2,
            particle.y -
              size / 2,
            size,
            size
          );
        }
      );


      /*
       * ====================================================
       * SUBTITLE
       * ====================================================
       */

      const subtitleSize =
        Math.min(
          30,
          width * 0.025
        );

      const subtitle =
        "CREATIVE DEVELOPER & DIGITAL DESIGNER";

      ctx.save();

      ctx.font =
        `700 ${subtitleSize}px "Courier New", monospace`;

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";


      /*
       * Subtitle now sits closer
       * to the title.
       */

      const subtitleBaseY =
        logoCenterY +
        82;


      /*
       * ====================================================
       * SUBTITLE MOUSE DISTANCE
       * ====================================================
       */

      const subtitleDx =
        mouseX -
        logoCenterX;

      const subtitleDy =
        mouseY -
        subtitleBaseY;

      const subtitleDistance =
        Math.sqrt(
          subtitleDx *
              subtitleDx +
            subtitleDy *
              subtitleDy
        );

      const subtitleRadius =
        180;

      let rippleStrength =
        0;

      if (
        subtitleDistance <
        subtitleRadius
      ) {
        rippleStrength =
          1 -
          subtitleDistance /
            subtitleRadius;
      }


      /*
       * ====================================================
       * MEASURE CHARACTERS
       * ====================================================
       */

      const characterWidths =
        subtitle
          .split("")
          .map(
            (character) =>
              ctx.measureText(
                character
              ).width
          );

      const totalWidth =
        characterWidths.reduce(
          (
            sum,
            value
          ) =>
            sum + value,
          0
        );

      let currentX =
        logoCenterX -
        totalWidth / 2;


      /*
       * ====================================================
       * DRAW SUBTITLE
       * ====================================================
       */

      subtitle
        .split("")
        .forEach(
          (
            character,
            index
          ) => {
            const characterWidth =
              characterWidths[
                index
              ];

            const characterCenter =
              currentX +
              characterWidth /
                2;

            const distanceFromMouse =
              Math.abs(
                characterCenter -
                  mouseX
              );

            const localStrength =
              Math.max(
                0,
                1 -
                  distanceFromMouse /
                    120
              ) *
              rippleStrength;

            const wave =
              Math.sin(
                index * 0.9
              );

            const rippleY =
              wave *
              localStrength *
              8;

            const rippleX =
              Math.cos(
                index * 0.9
              ) *
              localStrength *
              3;

            ctx.globalAlpha =
              fade;

            ctx.fillStyle =
              "white";

            ctx.fillText(
              character,
              characterCenter +
                rippleX,
              subtitleBaseY +
                rippleY
            );

            currentX +=
              characterWidth;
          }
        );

      ctx.restore();

      ctx.globalAlpha = 1;


      /*
       * ====================================================
       * NEXT FRAME
       * ====================================================
       */

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    /*
     * ======================================================
     * EVENTS
     * ======================================================
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


    /*
     * ======================================================
     * START
     * ======================================================
     */

    resize();

    handleScroll();

    animate();


    /*
     * ======================================================
     * CLEANUP
     * ======================================================
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