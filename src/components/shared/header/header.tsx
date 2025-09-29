// components/layout/header.tsx
import { clx } from "@/utils/styles";
import { PropsWithChildren, useState } from "react";
import { HeaderLogo } from "./header-logo";
import { Button } from "@/components/ui/button/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface HeaderProps {
  className?: string;
  sticky?: boolean;
  variant?: "default" | "minimal" | "dark";
  onLogoClick?: () => void;
}

export function Header({
  className,
  sticky = true,
  variant = "default",
  onLogoClick,
  children,
}: PropsWithChildren<HeaderProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" }
  ];

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={clx(
        "w-full border-b transition-all duration-200",
        sticky && "sticky top-0 z-50",
        variant === "default" && "bg-background border-border",
        variant === "minimal" && "bg-background/80 backdrop-blur-md border-border/50",
        variant === "dark" && "bg-header-dark border-header-border text-header-dark-foreground",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <HeaderLogo variant={variant} onClick={onLogoClick} />

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clx(
                  "text-sm font-medium transition-colors hover:opacity-80 relative",
                  variant === "dark"
                    ? "text-header-dark-foreground"
                    : "text-foreground",
                  isActiveLink(link.href) && "font-semibold"
                )}
              >
                {link.name}
                {isActiveLink(link.href) && (
                  <span className={clx(
                    "absolute -bottom-6 left-0 w-full h-0.5",
                    variant === "dark" ? "bg-header-accent" : "bg-blue-600"
                  )} />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/signin">
              <Button
                flavor="outline"
                color={variant === "dark" ? "none" : "primary"}
                size="md"
                className={clx(
                  "uppercase tracking-wide",
                  variant === "dark" ? "text-header-dark-foreground border-header-dark-foreground/30 hover:bg-header-dark-foreground/10" : ""
                )}
              >
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                flavor="raised"
                color="primary"
                size="md"
                className={clx(
                  "uppercase tracking-wide",
                  variant === "dark" ? "bg-header-accent text-header-dark hover:bg-header-accent/90" : ""
                )}
              >
                Sign up
              </Button>
            </Link>
          </div>
          
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clx(
              "md:hidden p-2 rounded-md transition-colors",
              variant === "dark"
                ? "text-header-muted hover:text-header-dark-foreground hover:bg-header-dark-foreground/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent",
            )}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {mobileOpen && (
          <div
            className={clx(
              "md:hidden border-t pb-4",
              variant === "dark"
                ? "border-header-border bg-header-dark"
                : "border-border bg-background",
            )}
          >
            <div className="px-4 py-3 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clx(
                    "block text-sm font-medium py-2 transition-colors",
                    variant === "dark"
                      ? "text-header-dark-foreground hover:opacity-80"
                      : "text-foreground hover:opacity-80",
                    isActiveLink(link.href) && clx(
                      "font-semibold",
                      variant === "dark" ? "text-header-accent" : "text-blue-600"
                    )
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Link href="/signin" onClick={() => setMobileOpen(false)}>
                  <Button
                    flavor="outline"
                    color={variant === "dark" ? "none" : "primary"}
                    size="md"
                    fullWidth
                    className={clx(
                      "uppercase tracking-wide justify-center",
                      variant === "dark" ? "text-header-dark-foreground border-header-dark-foreground/30 hover:bg-header-dark-foreground/10" : ""
                    )}
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setMobileOpen(false)}>
                  <Button
                    flavor="raised"
                    color="primary"
                    size="md"
                    fullWidth
                    className={clx(
                      "uppercase tracking-wide justify-center",
                      variant === "dark" ? "bg-header-accent text-header-dark hover:bg-header-accent/90" : ""
                    )}
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </header>
  );
}