import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Daily Code",
  description: "DailyCode is a platform where I publish daily coding challenges, including problem statements and solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-noise bg-background" suppressHydrationWarning>
      <body className={`${roboto.variable} antialiased text-muted-foreground `}>
        {children}
      </body>
    </html>
  );
}
