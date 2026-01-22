import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frozen Orphans | A Documentary Film",
  description:
    "Three hopeful moms face the ethical dilemmas of IVF in this film about the modern pursuit of parenthood.",
  keywords: ["documentary", "IVF", "embryo adoption", "fertility", "family"],
  authors: [{ name: "Frozen Orphans" }],
  openGraph: {
    title: "Frozen Orphans | A Documentary Film",
    description:
      "Three hopeful moms face the ethical dilemmas of IVF in this film about the modern pursuit of parenthood.",
    type: "website",
    locale: "en_US",
    siteName: "Frozen Orphans",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frozen Orphans | A Documentary Film",
    description:
      "Three hopeful moms face the ethical dilemmas of IVF in this film about the modern pursuit of parenthood.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
