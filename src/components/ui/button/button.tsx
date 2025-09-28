import { DefaultProps } from "@/utils/components/default-props";
import { clx } from "@/utils/styles/clx";
import { PropsWithChildren } from "react";

export interface ButtonProps extends DefaultProps {
    disabled?: boolean;
    title?: string;
    type?: "button" | "submit" | "reset";
    flavor?: "raised" | "outline" | "clear";
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "orange" | "none";
    loading?: boolean;
    fullWidth?: boolean;
    size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
    disabled,
    title,
    type,
    flavor,
    color,
    loading,
    fullWidth,
    size,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
}: PropsWithChildren<ButtonProps>) {
    return (
        <button
            type={type}
            className={
                clx(
                    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",

                    // Sizes
                    size === "sm" && "h-8 px-3 text-xs",
                    size === "md" && "h-10 px-4 py-2 text-sm",
                    size === "lg" && "h-12 px-6 text-base",
                    size === "icon" && "h-10 w-10",

                    // Flavors base
                    (flavor === "raised" || flavor === "outline") && "shadow-sm hover:shadow-md",
                    flavor === "outline" && "border",

                    // Raised colors
                    flavor === "raised" && color === "primary" && "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
                    flavor === "raised" && color === "secondary" && "bg-gray-600 text-white hover:bg-gray-700 active:bg-gray-800",
                    flavor === "raised" && color === "success" && "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
                    flavor === "raised" && color === "danger" && "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
                    flavor === "raised" && color === "warning" && "bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700",
                    flavor === "raised" && color === "orange" && "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700",
                    flavor === "raised" && color === "none" && "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",

                    // Outline colors
                    flavor === "outline" && color === "primary" && "border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100",
                    flavor === "outline" && color === "secondary" && "border-gray-600 text-gray-600 hover:bg-gray-50 active:bg-gray-100",
                    flavor === "outline" && color === "success" && "border-green-600 text-green-600 hover:bg-green-50 active:bg-green-100",
                    flavor === "outline" && color === "danger" && "border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100",
                    flavor === "outline" && color === "warning" && "border-yellow-500 text-yellow-600 hover:bg-yellow-50 active:bg-yellow-100",
                    flavor === "outline" && color === "orange" && "border-orange-500 text-orange-600 hover:bg-orange-50 active:bg-orange-100",
                    flavor === "outline" && color === "none" && "border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-100",

                    // Clear colors
                    flavor === "clear" && color === "primary" && "text-blue-700 hover:bg-blue-100 active:bg-blue-200",
                    flavor === "clear" && color === "secondary" && "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
                    flavor === "clear" && color === "success" && "text-green-700 hover:bg-green-100 active:bg-green-200",
                    flavor === "clear" && color === "danger" && "text-red-700 hover:bg-red-100 active:bg-red-200",
                    flavor === "clear" && color === "warning" && "text-yellow-700 hover:bg-yellow-100 active:bg-yellow-200",
                    flavor === "clear" && color === "orange" && "text-orange-700 hover:bg-orange-100 active:bg-orange-200",
                    flavor === "clear" && color === "none" && "text-gray-600 hover:bg-gray-100 active:bg-gray-200",

                    // States
                    fullWidth && "w-full",
                    (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none",
                    className,
                )
            }
            disabled={disabled || loading}
            onClick={(evt) => {
                evt.stopPropagation();
                if (!disabled && !loading) {
                    onClick?.();
                }
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            title={title}
        >
            {
                loading && (
                    <svg
                        className="h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )
            }
            {children}
        </button>
    )
}