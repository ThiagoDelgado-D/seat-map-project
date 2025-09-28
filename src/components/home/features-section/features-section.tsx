"use client";

import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import Image from "next/image";
import { PropsWithChildren } from "react";

export interface FeatureItem {
  id: string;
  text: string;
}

export interface FeatureSectionProps extends DefaultProps {
    title?: string;
    subtitle?: string;
    features?: FeatureItem[];
    imageUrl?: string;
    imageAlt?: string;
    ctaText?: string;
    variant?: "default" | "dark" | "gradient";
    imagePosition?: "left" | "right" | "center";
    onCtaClick?: () => void;
    onImageClick?: () => void;
}

export function FeatureSection({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    title = "Floor plan designer",
    subtitle = "Design beautiful charts.",
    features = [], 
    imageUrl = "/sit-manager.png",
    imageAlt = "Floor plan designer interface",
    ctaText = "Learn more",
    variant = "dark",
    imagePosition = "center",
    onCtaClick,
    onImageClick,
}: PropsWithChildren<FeatureSectionProps>) {
    return (
        <section
            className={clx(
                "w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden",
                
                // Variants
                variant === "default" && "bg-white text-gray-900",
                variant === "dark" && "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white",
                variant === "gradient" && "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white",
                
                className,
            )}
            onClick={(evt) => {
                evt.stopPropagation();
                onClick?.();
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {variant === "dark" && (
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            )}
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className={clx(
                    "grid gap-8 lg:gap-16 items-center",
                    imagePosition === "left" && "lg:grid-cols-2",
                    imagePosition === "right" && "lg:grid-cols-2",
                    imagePosition === "center" && "lg:grid-cols-1 text-center"
                )}>
                    
                    <div className={clx(
                        "space-y-6",
                        imagePosition === "right" && "lg:order-1",
                        imagePosition === "center" && "mx-auto max-w-4xl"
                    )}>
                        <div className="space-y-4">
                            <p className={clx(
                                "text-sm font-medium uppercase tracking-wide",
                                variant === "dark" ? "text-blue-300" : "text-blue-600"
                            )}>
                                {title}
                            </p>
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                {subtitle}
                            </h2>
                        </div>

                        {features && features.length > 0 && (
                            <div className="space-y-4">
                                {features.map((feature) => (
                                    <p
                                        key={feature.id}
                                        className={clx(
                                            "text-lg sm:text-xl leading-relaxed",
                                            variant === "dark" ? "text-gray-300" : "text-gray-600"
                                        )}
                                    >
                                        {feature.text}
                                    </p>
                                ))}
                            </div>
                        )}

                        {ctaText && (
                            <div className={clx(
                                "pt-4",
                                imagePosition === "center" && "flex justify-center"
                            )}>
                                <button
                                    onClick={(evt) => {
                                        evt.stopPropagation();
                                        onCtaClick?.();
                                    }}
                                    className={clx(
                                        "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200",
                                        "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30",
                                        "backdrop-blur-sm",
                                        "group"
                                    )}
                                >
                                    {ctaText}
                                    <svg 
                                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {children}
                    </div>

                    <div className={clx(
                        "relative",
                        imagePosition === "center" && "mt-12 lg:mt-16"
                    )}>
                        <div
                            className={clx(
                                "relative",
                                "transform transition-all duration-300 hover:scale-105",
                                onImageClick && "cursor-pointer"
                            )}
                            onClick={(evt) => {
                                evt.stopPropagation();
                                onImageClick?.();
                            }}
                        >
                            {variant === "dark" && (
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transform scale-105"></div>
                            )}
                            
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                className="w-full h-auto"
                                loading="lazy"
                                width={800}  
                                height={450} 
                                quality={90} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}