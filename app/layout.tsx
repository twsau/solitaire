import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Settings } from "@/components/Settings";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solitare",
  description: "Classic card game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={cn(inter.className, "h-full")}>
        <header className="container flex items-center h-14 border-b gap-3">
          <h1>Solitaire v1</h1>
          <a
            className="text-primary hover:text-foreground transition-colors"
            href="https://bossweb.dev/projects/solitaire#content"
          >
            About
          </a>
          <div className="ml-auto" />
          <Settings />
        </header>
        {children}
      </body>
    </html>
  );
}
