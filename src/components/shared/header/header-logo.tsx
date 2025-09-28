import { Button } from "@/components/ui/button/button";
import Image from "next/image";
import Link from "next/link";

interface HeaderLogoProps {
    variant?: "default" | "minimal" | "dark";
    onClick?: () => void;
}

export function HeaderLogo({ variant = "default", onClick }: HeaderLogoProps) {
    const logoSource = variant === "dark" ? "/seatsio-white.png" : "/seatsio-black.png";

    return (
        <Link
            href='/'
        >
            <Button
                onClick={onClick}
                size="md"
                className="hover:opacity-80 transition-opacity"
            >
                <Image
                    src={logoSource}
                    alt="Seats.io logo"
                    width={120}
                    height={40}
                    priority
                />
            </Button>

        </Link>
    );
}