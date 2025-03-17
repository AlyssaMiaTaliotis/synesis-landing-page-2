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

      angle += 0.000005;
      requestAnimationFrame(drawSpiral);
    }

    drawSpiral();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#a6a6a6] text-gray-100">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-15" />

      {/* Headline Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-16 text-center">
        <h1 className="text-7xl font-extrabold tracking-wide text-gray-50 opacity-90">
          Synesis
        </h1>
        <p className="mt-4 text-3xl text-gray-200 max-w-3xl font-georgia leading-snug">
          AI-powered medical intelligence optimizing cross-specialty comorbidity treatment.
        </p>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-24 px-16 py-24 flex flex-col items-start text-left">

        {/* The Problem */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-5xl font-semibold text-gray-100">The Problem</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Managing comorbidities is one of the most complex challenges in medicine.

            In the US, 42% of adults have at least two chronic diseases, yet physicians are forced 
            to operate blindly in a fragmented healthcare system where specialists work in silos with
             limited visibility into a patient’s full treatment plan across disciplines. 
             This lack of coordination leads to medication conflicts, misdiagnoses, treatment gaps, and redundant 
             testing - costing the US healthcare system $200 billion annually and ultimately compromising clinical 
             decision-making. As a result, care is inadvertently suboptimal, cost-inefficient, and often fatal. 

          </p>
        </section>

        {/* Our Solution */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-5xl font-semibold text-gray-100">The Synesis Solution</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
          Synesis is AI-powered medical intelligence designed to support healthcare providers streamline 
          comorbidity management by bridging cross-specialty gaps and enabling physicians to deliver safe, 
          data-driven, personalized treatment strategies.
          </p>
          <p className="text-2xl text-gray-200 leading-relaxed">

          At the core of Synesis is a cutting-edge AI engine for personalized treatment optimization. It continuously 
          analyzes real-world clinical data, physician decision patterns, and evolving medical guidelines to deliver proactive, 
          evidence-based recommendations. Using reinforcement learning, it refines its insights based on clinician feedback and 
          adapts to newly identified drug interactions, providing essential intelligence that would be impossible to track manually 
          and ensuring physicians stay ahead of an ever-changing pharmaceutical landscape. Rather than replacing clinical judgment, Synesis enhances it. 
          </p>
        </section>

        {/* The Synesis Advantage */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-5xl font-semibold text-gray-100">The Synesis Advantage</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
          Synesis redefines clinical decision support with personalized, cross-specialty treatment optimization powered by machine learning. 
          It continuously refines recommendations based on real physician decisions, evolving medical guidelines, and patient-specific factors, 
          ensuring insights remain dynamic and clinically relevant. Unlike traditional systems that burden physicians with generic, low-value alerts, 
          Synesis delivers only the most actionable, context-aware insights. Designed for seamless workflow integration, it empowers care teams to provide 
          smart, safe, and coordinated treatment—without disruption.
          </p>

          <p className="text-2xl text-gray-200 leading-relaxed">
          Synesis has secured strong early traction, with interest from major healthcare organizations 
            such as <span className="font-semibold text-gray-50">Kaiser Permanente</span> and 
            strategic support from <span className="font-semibold text-gray-50">Mitsubishi Electric Innovation Center</span>. 
            
          </p>
        </section>

        
        {/* Research Team */}
        <section className="space-y-6 max-w-4xl">
          <h2 className="text-5xl font-semibold text-gray-100">Research Team</h2>
          <div className="text-2xl text-gray-200 space-y-4">
            <p>
              <span className="font-semibold text-gray-50">Alyssa Mia Taliotis</span> <br />
              AI, ML for Medical Innovation Research at Harvard SEAS & MIT <br />
              Mathematician <br />
              <Link href="https://www.linkedin.com/in/alyssa-mia-taliotis/" target="_blank" className="text-black-400 font-semibold hover:underline">
                LinkedIn
              </Link>
            </p>
            <p>
              <span className="font-semibold text-gray-50">Zulal Akarsu</span> <br />
              AI, ML for Medical Innovation Research at Harvard SEAS & MIT <br />
              Mathematician <br />
              <Link href="https://www.linkedin.com/in/alyssa-mia-taliotis/" target="_blank" className="text-black-400 font-semibold hover:underline">
                LinkedIn
              </Link>
            </p>
            
            
            <p>
              <span className="font-semibold text-gray-50">Shiv Redhu</span> <br />
              AI, ML for Medical Innovation Research at Harvard SEAS & MIT <br />
              Mathematician <br />
              <Link href="https://www.linkedin.com/in/alyssa-mia-taliotis/" target="_blank" className="text-black-400 font-semibold hover:underline">
                LinkedIn
              </Link>
            </p>


            
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-6 max-w-3xl text-center mx-auto">
          <h2 className="text-5xl font-semibold text-gray-100">Join Us</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Help shape the future of AI-powered medical intelligence. <br />
            Whether you're a physician, healthcare system, or investor, we’d love to connect.
          </p>
          <Link href="mailto:alyssamiataliotis@gmail.com" className="px-6 py-3 text-lg font-semibold text-gray-100 bg-gray-800 rounded-lg hover:bg-gray-700">
            Get in Touch
          </Link>
        </section>

      </div>
    </div>
  );
}
