"use client";
import { cn } from "@/lib/utils";
import InfiniteText from "./ui/infinite-text";

const Hero = () => {
  return (
    <header>
        <h1 className={cn("font-offbite-bold", "text-9xl my-2")}>
            <InfiniteText text="Daily Code" />
        </h1>
    </header>
  )
}

export default Hero