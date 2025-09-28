import Image from "next/image";

interface HeaderLogoProps {
    variant?: "default" | "minimal" | "dark";
    onClick?: () => void;
}

export function HeaderLogo({ variant = "default", onClick }: HeaderLogoProps) {
    const logoSource = variant === "dark" ? "/seatsio-white.png" : "/seatsio-black.png";
    
    return (
        <button
            onClick={onClick}
            className="hover:opacity-80 transition-opacity"
        >
            <Image
                src={logoSource}
                alt="Seats.io logo"
                width={120} 
                height={40} 
                priority
            />
        </button>
    );
}