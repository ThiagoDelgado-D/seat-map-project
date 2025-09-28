"use client";

import { PropsWithChildren } from "react";
import { clx } from "@/utils/styles";
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";


export interface MainLayoutProps extends PropsWithChildren {
  className?: string;
}

export function MainLayout({ className, children }: MainLayoutProps) {
  return (
    <div className={clx("flex flex-col min-h-screen", className)}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
