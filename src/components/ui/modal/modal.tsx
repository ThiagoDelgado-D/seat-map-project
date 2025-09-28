
import { DefaultProps } from "@/utils/components";
import { clx } from "@/utils/styles";
import { PropsWithChildren, useEffect } from "react";
import { Button } from "../button/button";

export interface ModalProps extends DefaultProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: "sm" | "md" | "lg" | "xl";
    variant?: "default" | "dark";
    showCloseButton?: boolean;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
}

export function Modal({
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
    isOpen,
    onClose,
    title,
    size = "md",
    variant = "default",
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
}: PropsWithChildren<ModalProps>) {
    
    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;
        
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className={clx(
                    "absolute inset-0 transition-opacity",
                    variant === "dark" ? "bg-gray-900/80" : "bg-black/50"
                )}
                onClick={() => {
                    if (closeOnOverlayClick) {
                        onClose();
                    }
                }}
            />
            
            <div
                className={clx(
                    "relative w-full mx-4 rounded-lg shadow-xl transition-all",
                    "transform animate-modal-enter",
                    
                    // Sizes
                    size === "sm" && "max-w-md",
                    size === "md" && "max-w-lg",
                    size === "lg" && "max-w-2xl",
                    size === "xl" && "max-w-4xl",
                    
                    // Variants
                    variant === "default" && "bg-white text-gray-900",
                    variant === "dark" && "bg-gray-800 text-white",
                    
                    className,
                )}
                onClick={(evt) => {
                    evt.stopPropagation();
                    onClick?.();
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {(title || showCloseButton) && (
                    <div className={clx(
                        "flex items-center justify-between p-6 border-b",
                        variant === "dark" ? "border-gray-700" : "border-gray-200"
                    )}>
                        {title && (
                            <h2 className={clx(
                                "text-lg font-semibold",
                                variant === "dark" ? "text-white" : "text-gray-900"
                            )}>
                                {title}
                            </h2>
                        )}
                        
                        {showCloseButton && (
                            <Button
                                onClick={onClose}
                                className={clx(
                                    "p-2 rounded-md transition-colors",
                                    variant === "dark" 
                                        ? "text-gray-400 hover:text-white hover:bg-gray-700" 
                                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                                )}
                                type="button"
                                size="md"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </Button>
                        )}
                    </div>
                )}
                
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}