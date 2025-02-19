"use client";
import { cn } from "@/lib/utils";
import InfiniteText from "./ui/infinite-text";
import useScreenSize from "@/hooks/use-screen-size"

import MediaBetweenText from "@/components/ui/media-between-text";

const Hero = () => {


  const screenSize = useScreenSize()

  return (
    <header className="border border-l-2">
      <h1 className={cn("font-offbite-bold", "text-9xl my-2")}>
        <MediaBetweenText firstText="DAILY" secondText="CODE" mediaUrl="/me.png" mediaType="image" triggerType="hover"
          mediaContainerClassName="w-full h-[30px] sm:h-[100px] overflow-hidden mx-px mt-1 sm:mx-2 sm:mt-4"
          className="cursor-pointer text-3xl sm:text-7xl font-calendas flex flex-col font-light items-center justify-center"
          animationVariants={{
            initial: {
              width: screenSize.lessThan("sm") ? "160px" : "220px",
              height: 0,
              transition: { duration: 0.7, ease: [0.944, 0.008, 0.147, 1.002] }
            },
            animate: {
              width: screenSize.lessThan("sm") ? "160px" : "220px",
              height: screenSize.lessThan("sm") ? "160px" : "220px",
              transition: { duration: 0.7, ease: [0.944, 0.008, 0.147, 1.002] }
            },
          }} />
      </h1>
    </header>
  )
}

export default Hero