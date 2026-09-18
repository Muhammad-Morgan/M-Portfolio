import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";
import ScrollProgress from "@/components/Atoms/ScrollProgress";
import { ThemeProvider } from "next-themes";

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
  title: "Muhammad Morgan | Full Stack Engineer & Product Builder",
  description:
    "Portfolio of Muhammad Morgan, a full-stack engineer building product-focused experiences, scalable APIs, and thoughtful interfaces with Next.js, React, Node.js, and TypeScript.",
  keywords: [
    "Muhammad Morgan",
    "full-stack engineer",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "Quiz Flow",
    "Aal Matook",
  ],
  openGraph: {
    title: "Muhammad Morgan | Full Stack Engineer & Product Builder",
    description:
      "Explore Muhammad Morgan's latest product work, including Quiz Flow and Aal Matook, alongside scalable API and full-stack builds.",
    url: "https://m-morgan.netlify.app",
    siteName: "M-Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/morgan-cloud/image/upload/v1774191051/favicons_deuoqu.png",
      },
    ],
  },
  verification: {
    google: process.env.GOOGLESITEVER,
  },
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
