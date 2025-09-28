"use client";

import { Button } from "@/components/ui/button/button";
import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { PropsWithChildren } from "react";

export interface CTASectionProps extends DefaultProps {
    title?: string;
    subtitle?: string;
    planName?: string;
    ctaText?: string;
    variant?: "default" | "dark" | "gradient";
    onCtaClick?: () => void;
    id?: string
}

export function CTASection({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    title = "Start integrating today.",
    subtitle = "Free testing account with technical support for integration.",
    planName = "Pricing plans",
    ctaText = "Sign up",
    variant = "default",
    id,
}: PropsWithChildren<CTASectionProps>) {
    return (
        <section
            id={id}
            className={clx(
                "w-full py-16 sm:py-20 lg:py-24 relative overflow-hidden",
                
                // Variants
                variant === "default" && "bg-gray-100 text-gray-900",
                variant === "dark" && "bg-gray-900 text-white",
                variant === "gradient" && "bg-gradient-to-br from-blue-600 to-purple-700 text-white",
                
                className,
            )}
            onClick={(evt) => {
                evt.stopPropagation();
                onClick?.();
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className={clx(
                        "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",
                        variant === "dark" ? "text-white" : "text-gray-900"
                    )}>
                        {title}
                    </h2>
                    
                    <p className={clx(
                        "text-lg sm:text-xl mb-8 max-w-2xl mx-auto",
                        variant === "dark" ? "text-gray-300" : "text-gray-600"
                    )}>
                        {subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            className={clx(
                                "inline-flex items-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-200",
                                variant === "dark" 
                                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                                    : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                            )}
                        >
                            {planName} →
                        </Button>
                        
                        <Button
                            className={clx(
                                "inline-flex items-center px-6 py-3 rounded-lg font-medium text-base transition-all duration-200",
                                variant === "dark" 
                                    ? "bg-white text-gray-900 hover:bg-gray-100" 
                                    : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"
                            )}
                        >
                            {ctaText} →
                        </Button>
                    </div>

                    {children}
                </div>
            </div>
        </section>
    );
}