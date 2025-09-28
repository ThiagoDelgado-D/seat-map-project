"use client";

import { StatItem } from "@/constants/stats";
import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { PropsWithChildren } from "react";


export interface StatsSectionProps extends DefaultProps {
    stats: StatItem[];
    title?: string;
    subtitle?: string;
    variant?: "default" | "minimal" | "dark";
    centered?: boolean;
    showDescription?: boolean;
}

export function StatsSection({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    stats,
    title = "SeatMap Studio in numbers",
    subtitle,
    variant = "default",
    centered = true,
    showDescription = false,
}: PropsWithChildren<StatsSectionProps>) {
    return (
        <section
            className={clx(
                "w-full py-16 sm:py-20",
                
                // Variants
                variant === "default" && "bg-gray-50",
                variant === "minimal" && "bg-white",
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={clx(
                                "text-center space-y-2",
                                "animate-fadeIn"
                            )}
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            <div className={clx(
                                "text-4xl sm:text-5xl lg:text-6xl font-bold",
                                "bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                            )}>
                                {stat.value}
                            </div>
                            
                            <div className={clx(
                                "text-sm sm:text-base font-semibold tracking-wide uppercase",
                                variant === "dark" ? "text-orange-400" : "text-orange-600"
                            )}>
                                {stat.label}
                            </div>
                            
                            {showDescription && stat.description && (
                                <p className={clx(
                                    "text-sm mt-2 max-w-xs mx-auto",
                                    variant === "dark" ? "text-gray-400" : "text-gray-500"
                                )}>
                                    {stat.description}
                                </p>
                            )}
                        </div>
                    ))}
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