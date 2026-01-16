import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Morgan | Software Engineer",
  description:
    "Muhammad Morgan is a software engineer specializing in Next.js and MERN stack development. Explore his portfolio, projects, and full-stack work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${bricolageGrotesque.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
