import "@/styles/globals.css";
import type { Metadata } from "next";
import { roboto, offBiteBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";



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
      <body className={cn(roboto.variable, offBiteBold.variable, "antialiased text-muted-foreground")}>
        {children}
      </body>
    </html>
  );
}
