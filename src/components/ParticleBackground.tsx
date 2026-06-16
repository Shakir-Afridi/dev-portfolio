"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseRadius: number;
    phase: number;
    twinkleSpeed: number;
}

const PARTICLE_COUNT = 35;
const MAX_DISTANCE = 150;
const MAX_DIST_SQ = MAX_DISTANCE * MAX_DISTANCE;
const PARTICLE_SPEED = 0.35;
const FRAME_INTERVAL = 1000 / 40; // cap at 40 fps

function drawSparkle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    outer: number,
    inner: number
) {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const angle = (i * Math.PI) / 4 - Math.PI / 4;
        const px = x + r * Math.cos(angle);
        const py = y + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let particles: Particle[] = [];
        let lastTime = 0;

        const resize = () => {
            // Fixed canvas — only the viewport is ever visible
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const initParticles = () => {
            particles = Array.from({ length: PARTICLE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
                vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
                baseRadius: 1.5 + Math.random() * 2,
                phase: Math.random() * Math.PI * 2,
                twinkleSpeed: 0.25 + Math.random() * 0.5,
            }));
        };

        const draw = (timestamp: number) => {
            animationId = requestAnimationFrame(draw);

            if (timestamp - lastTime < FRAME_INTERVAL) return;
            lastTime = timestamp;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const now = timestamp / 1000;

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            }

            // All connection lines in a single batched stroke call
            ctx.beginPath();
            ctx.strokeStyle = "rgba(180, 195, 230, 0.22)";
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    if (dx * dx + dy * dy < MAX_DIST_SQ) {
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                    }
                }
            }
            ctx.stroke();

            // Sparkle shapes + core dots
            for (const p of particles) {
                const twinkle =
                    0.5 + 0.5 * Math.sin(now * p.twinkleSpeed + p.phase);
                const opacity = 0.3 + 0.4 * twinkle;
                const radius = p.baseRadius * (0.7 + 0.3 * twinkle);

                drawSparkle(ctx, p.x, p.y, radius * 2.2, radius * 0.45);
                ctx.fillStyle = `rgba(230, 240, 255, ${opacity})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p.x, p.y, radius * 0.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        };

        const handleResize = () => {
            resize();
            initParticles();
        };

        resize();
        initParticles();
        animationId = requestAnimationFrame(draw);

        window.addEventListener("resize", handleResize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            aria-hidden="true"
        />
    );
}
