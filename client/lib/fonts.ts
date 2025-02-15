import localFont from 'next/font/local'

import {  Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
  subsets: ["latin"],
});

const offBiteBold = localFont({
    src: "../fonts/OffBite-Bold.woff2",
    display: "swap",
    variable: "--font-offbite-bold",
})

export { roboto, offBiteBold }