"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PhoneModel } from "./phone-model";
import "./hero-section.css";

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.5 });

    if (titleRef.current && subtitleRef.current) {
      timeline
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="homepage hero relative min-h-screen"
    >
      <div className="stage-scene">
        <div className="spotlight"></div>
        <div className="spotlight-rays"></div>
        <div className="skylight"></div>
      </div>

      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="text-center lg:text-left space-y-8">
            <h1 ref={titleRef} className="text-white">
              <span className="block">RESERVED</span>
              <span className="block">SEATING</span>
              <span className="block">MADE</span>
              <span className="block">EASY</span>
            </h1>

            <div className="movie-compound">
              <PhoneModel videoSrc="/videos/mobile.mp4" />
            </div>
          </div>

          <div className="flex-reactive text-white">
            <h2 ref={subtitleRef} className="text-3xl">
              Sell more tickets.
            </h2>
            <p>
              Integrate seating charts into your platform in days. Reach new customers. Increase conversion. Deliver an outstanding experience.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              Learn more ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}