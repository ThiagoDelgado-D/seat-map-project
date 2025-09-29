"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PhoneModelProps {
  videoSrc?: string;
}

export function PhoneModel({ videoSrc }: PhoneModelProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (phoneRef.current) {
      gsap.fromTo(
        phoneRef.current,
        {
          y: 100,
          opacity: 0,
          rotateX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );

    }
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        ref={phoneRef}
        className="relative w-72 h-[600px] mx-auto transform-gpu translate-x-8"
        style={{
          perspective: "1000px",
        }}
      >
        <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl p-2">
          <div className="w-full h-full bg-black rounded-[2.5rem] p-3 relative overflow-hidden">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>
            
            <div className="w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden relative">
              {videoSrc ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-blue-900 to-green-800 flex items-center justify-center relative">
                  <div className="relative w-full h-full">
                    <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                    
                    <div className="absolute bottom-0 w-full h-2/3">
                      <div className="absolute bottom-0 w-full h-1/2 bg-green-600">
                        <div className="absolute inset-0 opacity-30">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-full h-px bg-white"
                              style={{ bottom: `${(i + 1) * 20}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="absolute bottom-1/2 w-full h-1/2 bg-gradient-to-t from-gray-600 to-gray-400">
                        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-white text-xs opacity-75">
                      KNCD Theater & Stadium
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 w-1 h-8 bg-gray-600 rounded-full"></div>
          <div className="absolute top-16 right-4 w-1 h-6 bg-gray-600 rounded-full"></div>
          <div className="absolute top-24 right-4 w-1 h-6 bg-gray-600 rounded-full"></div>
          <div className="absolute top-20 left-4 w-1 h-12 bg-gray-600 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-3xl -z-10"></div>
    </div>
  );
}