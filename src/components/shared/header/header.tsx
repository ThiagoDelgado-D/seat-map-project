import { clx } from "@/utils/styles";
import { PropsWithChildren, useState } from "react";
import { HeaderLogo } from "./header-logo";
import { Button } from "@/components/ui/button/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export interface HeaderProps {
  className?: string;
  sticky?: boolean;
  variant?: "default" | "minimal" | "dark";
  onLogoClick?: () => void;
  onLogin?: () => void;
  onSignup?: () => void;
}

export function Header({
  className,
  sticky = true,
  variant = "default",
  onLogoClick,
  onLogin,
  onSignup,
  children,
}: PropsWithChildren<HeaderProps>) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Demos", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Learn", href: "/docs" }
  ];

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
                  "text-sm font-medium transition-colors hover:opacity-80",
                  variant === "dark"
                    ? "text-header-dark-foreground"
                    : "text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={onLogin}
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
            <Button
              onClick={onSignup}
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
          </div>
          
          <button
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
          </button>
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
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  onClick={onLogin}
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
                <Button
                  onClick={onSignup}
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
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </header>
  );
}