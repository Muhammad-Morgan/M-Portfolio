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
  title: "Muhammad Morgan | Full Stack Engineer",
  description:
    "Full-stack engineer specializing in Next.js, Node.js, and Express, delivering scalable RESTful APIs, clean UI, and performance-first applications.",
  openGraph: {
    title: "Muhammad Morgan | Full Stack Engineer",
    description:
      "Full-stack engineer specializing in Next.js, Node.js, and Express, delivering scalable RESTful APIs, clean UI, and performance-first applications.",
    url: "https://m-morgan.netlify.app",
    siteName: "M-Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/morgan-cloud/image/upload/v1774191051/favicons_deuoqu.png",
      },
    ],
  },
  verification:{
    google: process.env.GOOGLESITEVER
  }
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
