"use client";

import { LogoItem } from "@/constants/logos";
import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import Image from "next/image";
import { PropsWithChildren } from "react";


export interface LogosSectionProps extends DefaultProps {
    logos: LogoItem[];
    title?: string;
    subtitle?: string;
    variant?: "default" | "minimal" | "dark";
    centered?: boolean;
    animationSpeed?: "slow" | "normal" | "fast";
    pauseOnHover?: boolean;
    showMultipleRows?: boolean;
    onLogoClick?: (logo: LogoItem) => void;
}

export function LogosSection({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    logos,
    title = "They trust us.",
    subtitle,
    variant = "default",
    centered = true,
    animationSpeed = "normal",
    pauseOnHover = true,
    showMultipleRows = false,
    onLogoClick,
}: PropsWithChildren<LogosSectionProps>) {

    const logoRows = showMultipleRows
        ? [
            logos.slice(0, Math.ceil(logos.length / 3)),
            logos.slice(Math.ceil(logos.length / 3), Math.ceil(logos.length * 2 / 3)),
            logos.slice(Math.ceil(logos.length * 2 / 3))
        ]
        : [logos];

    const getAnimationDuration = () => {
        switch (animationSpeed) {
            case 'slow': return '60s';
            case 'fast': return '20s';
            default: return '40s';
        }
    };

    const LogoCarousel = ({ rowLogos, reverse = false }: { rowLogos: LogoItem[], reverse?: boolean }) => {
        const duplicatedRowLogos = [...rowLogos, ...rowLogos];

        return (
            <div className="relative overflow-hidden">
                <div
                    className={clx(
                        "flex items-center gap-8 lg:gap-12",
                        pauseOnHover && "hover:pause",
                        reverse ? "animate-scroll-reverse" : "animate-scroll"
                    )}
                    style={{
                        animationDuration: getAnimationDuration(),
                        width: `${duplicatedRowLogos.length * 200}px`
                    }}
                >
                    {duplicatedRowLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className={clx(
                                "flex items-center justify-center flex-shrink-0 w-40 h-16 lg:w-48 lg:h-20",
                                "transition-all duration-200",
                                onLogoClick && "cursor-pointer hover:scale-105"
                            )}
                            onClick={() => {
                                if (onLogoClick) {
                                    onLogoClick(logo);
                                }
                            }}
                        >
                            <Image
                                src={logo.imageUrl}
                                alt={logo.alt}
                                className={clx(
                                    "max-w-full max-h-full object-contain transition-opacity duration-200",
                                    variant === "dark" ? "filter brightness-0 invert opacity-70 hover:opacity-100" : "opacity-60 hover:opacity-100"
                                )}
                                loading="lazy"
                                width={150}
                                height={80}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section
            className={clx(
                "w-full py-16 sm:py-20 overflow-hidden",

                // Variants
                variant === "default" && "bg-white",
                variant === "minimal" && "bg-gray-50",
                variant === "dark" && "bg-gray-900 text-white",

                className,
            )}
            onClick={(evt) => {
                evt.stopPropagation();
                onClick?.();
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className={clx(
                        "mb-12 sm:mb-16",
                        centered && "text-center"
                    )}>
                        {title && (
                            <h2 className={clx(
                                "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",
                                variant === "dark" ? "text-white" : "text-gray-900"
                            )}>
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className={clx(
                                "text-lg sm:text-xl max-w-3xl",
                                variant === "dark" ? "text-gray-300" : "text-gray-600",
                                centered && "mx-auto"
                            )}>
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div className="space-y-8 lg:space-y-12">
                    {showMultipleRows ? (
                        logoRows.map((rowLogos, index) => (
                            <LogoCarousel
                                key={index}
                                rowLogos={rowLogos}
                                reverse={index % 2 === 1}
                            />
                        ))
                    ) : (
                        <LogoCarousel rowLogos={logos} />
                    )}
                </div>

                {children && (
                    <div className={clx(
                        "mt-12 sm:mt-16",
                        centered && "text-center"
                    )}>
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}