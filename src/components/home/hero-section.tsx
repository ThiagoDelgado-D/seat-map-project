"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PhoneModel } from "./phone-model";

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
      className="relative min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left space-y-8">
            <h1
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <span className="block text-foreground">RESERVED</span>
              <span className="block text-foreground">SEATING</span>
              <span className="block text-foreground">MADE</span>
              <span className="block text-primary font-extrabold">EASY</span>
            </h1>
            
            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            >
              Experience the future of event seating with our innovative platform. 
              Book premium seats effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
                Watch Demo
              </button>
              <button className="px-8 py-4 border border-border text-foreground rounded-lg text-lg font-semibold hover:bg-accent/50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative h-[700px] lg:h-[800px]">
            <PhoneModel videoSrc="/videos/mobile.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}