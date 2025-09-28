import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";

export interface InputProps extends DefaultProps {
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    type?: "text" | "email" | "password" | "number" | "search";
    name?: string;
    id?: string;
    required?: boolean;
    readOnly?: boolean;
    autoFocus?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "filled" | "underline";
    error?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    onChange?: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function Input({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    disabled = false,
    placeholder,
    value,
    type = "text",
    name,
    id,
    required = false,
    readOnly = false,
    autoFocus = false,
    size = "md",
    variant = "default",
    error = false,
    onFocus,
    onBlur,
    onChange,
    onKeyDown,
}: InputProps) {
    return (
        <input
            type={type}
            className={clx(
                "border rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                
                // Sizes
                size === "sm" && "h-8 px-3 text-xs",
                size === "md" && "h-10 px-4 text-sm",
                size === "lg" && "h-12 px-5 text-base",
                
                // Variants
                variant === "default" && "bg-white border-gray-300 hover:border-gray-400",
                variant === "filled" && "bg-gray-50 border-gray-200 hover:bg-gray-100",
                variant === "underline" && "bg-transparent border-0 border-b-2 border-gray-300 rounded-none hover:border-gray-400 focus:border-blue-500",
                
                // States
                error && "border-red-500 focus:ring-red-500",
                disabled && "bg-gray-100 text-gray-500 cursor-not-allowed opacity-50",
                readOnly && "bg-gray-50 cursor-default",
                
                className,
            )}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoFocus={autoFocus}
            onClick={(evt) => {
                evt.stopPropagation();
                onClick?.();
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={() => {
                onFocus?.();
            }}
            onBlur={() => {
                onBlur?.();
            }}
            onChange={(evt) => {
                onChange?.(evt.target.value);
            }}
            onKeyDown={onKeyDown}
        />
    );
}