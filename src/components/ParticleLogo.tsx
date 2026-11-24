"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  size: number;
  seed: number;
  color: string;
};

const MASK_WIDTH = 1600;
const MASK_HEIGHT = 500;
const DESKTOP_PARTICLES = 3500;
const MOBILE_PARTICLES = 1300;

export default function ParticleLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const ctx = context;
    const parent = canvas.parentElement;
    if (!parent) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let width = 1;
    let height = 1;
    let progress = 0;
    let animationFrame = 0;
    let isVisible = true;

    // The mask uses fixed typography. The rendered logo is scaled to the
    // available container instead of depending on the browser window size.
    const makeParticles = () => {
      const source = document.createElement("canvas");
      source.width = MASK_WIDTH;
      source.height = MASK_HEIGHT;
      const sourceCtx = source.getContext("2d", { willReadFrequently: true });
      if (!sourceCtx) return;

      sourceCtx.font = '700 160px "Courier New", monospace';
      sourceCtx.textAlign = "center";
      sourceCtx.textBaseline = "middle";
      sourceCtx.fillStyle = "#D4A900";
      sourceCtx.fillText("DHWANI", MASK_WIDTH / 2, 185);
      sourceCtx.fillStyle = "#CFCFCF";
      sourceCtx.fillText("PATEL", MASK_WIDTH / 2, 345);

      const pixelData = sourceCtx.getImageData(0, 0, MASK_WIDTH, MASK_HEIGHT).data;
      const candidates: Array<{ x: number; y: number; color: string }> = [];

      for (let y = 0; y < MASK_HEIGHT; y += 5) {
        for (let x = 0; x < MASK_WIDTH; x += 5) {
          const index = (y * MASK_WIDTH + x) * 4;
          if (pixelData[index + 3] < 120) continue;
          candidates.push({
            x: x - MASK_WIDTH / 2,
            y: y - MASK_HEIGHT / 2,
            color: y < 265 ? "#D4A900" : "#CFCFCF",
          });
        }
      }

      // Scatter candidate selection so the text stays uniformly filled.
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
      }

      const limit = width < 640 ? MOBILE_PARTICLES : DESKTOP_PARTICLES;
      particles = candidates.slice(0, limit).map(({ x, y, color }) => ({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        homeX: x + (Math.random() - 0.5) * 3,
        homeY: y + (Math.random() - 0.5) * 3,
        size: 2.7 + Math.random() * 1.6,
        seed: Math.random(),
        color,
      }));

      // Start formed, so resizing doesn't make the name fly in from offscreen.
      const layout = getLayout();
      particles.forEach((particle) => {
        particle.x = layout.x + particle.homeX * layout.scale;
        particle.y = layout.y + particle.homeY * layout.scale;
      });
    };

    const getLayout = () => {
      const isMobile = width < 640;
      const scale = Math.min(
        width / (isMobile ? 1050 : 1750),
        height / (isMobile ? 950 : 700),
      );

      return {
        scale,
        x: width * 0.489,
        y: height * (isMobile ? 0.46 : 0.445),
      };
    };

    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeParticles();
      if (reducedMotion.matches) draw();
    };

    const updateScroll = () => {
      progress = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight * 0.85)));
      if (reducedMotion.matches) draw();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reducedMotion.matches) return;
      const bounds = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * width;
      pointer.y = ((event.clientY - bounds.top) / bounds.height) * height;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);
      const layout = getLayout();
      const scatter = reducedMotion.matches ? 0 : progress;
      const fade = scatter < 0.62 ? 1 : Math.max(0, 1 - (scatter - 0.62) / 0.38);
      const opacity = fade * (1 - scatter * 0.35);
      ctx.globalAlpha = opacity;

      for (let index = 0; index < particles.length; index++) {
        const particle = particles[index];
        const angle = Math.sin(index * 13.17 + particle.seed * 20) * Math.PI * 2;
        const distance = 160 + Math.abs(Math.sin(index * 4.21 + particle.seed)) * 420;
        const desiredX = layout.x + particle.homeX * layout.scale + Math.cos(angle) * distance * scatter;
        const desiredY = layout.y + particle.homeY * layout.scale + Math.sin(angle) * distance * scatter;

        if (reducedMotion.matches) {
          particle.x = desiredX;
          particle.y = desiredY;
        } else {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < 210 && scatter < 0.45) {
            const force = (1 - dist / 210) * 7;
            particle.vx += (dx / dist) * force;
            particle.vy += (dy / dist) * force;
          }

          particle.vx = (particle.vx + (desiredX - particle.x) * 0.018) * 0.84;
          particle.vy = (particle.vy + (desiredY - particle.y) * 0.018) * 0.84;
          particle.x += particle.vx;
          particle.y += particle.vy;
        }

        const size = Math.max(1.2, (particle.size + scatter * 2) * Math.min(1, layout.scale * 1.5));
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x - size / 2, particle.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      if (isVisible) draw();
      if (!reducedMotion.matches) animationFrame = requestAnimationFrame(animate);
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        if (reducedMotion.matches) draw();
        else if (!animationFrame) animationFrame = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const handleMotionChange = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      if (reducedMotion.matches) draw();
      else animate();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("scroll", updateScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionChange);

    resize();
    updateScroll();
    if (!reducedMotion.matches) animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", updateScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
      role="img"
      aria-label="Animated title: Dhwani Patel"
    />
  );
}
