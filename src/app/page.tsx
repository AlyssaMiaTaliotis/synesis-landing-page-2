"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let angle = 0;

    function drawSpiral() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      for (let i = 0; i < 500; i++) {
        const x = (0.4 * i) * Math.cos(i * 0.05 + angle);
        const y = (0.4 * i) * Math.sin(i * 0.05 + angle);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.resetTransform();

      angle += 0.000005; // Smooth, slow movement
      requestAnimationFrame(drawSpiral);
    }

    drawSpiral();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#b4b4b4] text-gray-100">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-15" />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-16 text-center">
        <h1 className="text-8xl font-extrabold tracking-wide text-gray-50">Synesis</h1>
        <p className="mt-4 text-3xl text-gray-200 max-w-3xl font-light leading-snug">
          AI-powered medical intelligence delivering real-time, cross-specialty treatment insights for physicians.
        </p>
      </div>

      {/* Content Sections on the Side */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-24 px-16 py-24 flex flex-col items-start text-left">
        <section className="space-y-6 max-w-3xl">
          <h2 className="text-5xl font-semibold text-gray-100">Current Solutions</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Synesis competes with EHR-embedded clinical decision support systems 
            (e.g., Epic’s Best Practice Advisories), AI-driven analytics platforms 
            (e.g., Tempus, IBM Watson Health), and medication management tools 
            (e.g., MedAware, First Databank). These systems often generate excessive alerts, 
            lack cross-specialty coordination, or rely on static rule-based recommendations 
            rather than personalized insights.
          </p>
        </section>

        <section className="space-y-6 max-w-3xl">
          <h2 className="text-5xl font-semibold text-gray-100">The Synesis Advantage</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Synesis provides personalized, cross-specialty treatment optimization that 
            adapts to individual patients. Using machine learning, it continuously refines 
            recommendations based on real physician decisions, evolving guidelines, and patient-specific factors. 
            Unlike traditional systems that overwhelm doctors with generic alerts, Synesis delivers actionable, 
            context-aware insights, reducing cognitive burden. By integrating seamlessly into physician workflows, 
            it enables smarter, safer, and coordinated care without disruption.
          </p>
        </section>

        <section className="space-y-6 max-w-3xl">
          <h2 className="text-5xl font-semibold text-gray-100">Founding Team</h2>
          <p className="text-2xl text-gray-200">
            <span className="font-semibold text-gray-50">Alyssa Mia Taliotis</span> <br />
            AI, ML for Medical Innovation Research at Harvard SEAS & MIT <br />
            Mathematician <br />
            <Link href="https://www.linkedin.com/in/alyssa-mia-taliotis/" target="_blank" className="text-black-400 font-semibold hover:underline">
              LinkedIn
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
