'use client'

import { offBiteBold } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface IError {
  error: Error & { digest?: string }
  reset: () => void
}
 
export default function GlobalError({ error, reset}: IError) {

  return (
    <html lang="en" className="dark bg-noise bg-background" suppressHydrationWarning>
      <body className="flex flex-col items-center justify-center h-screen">
        <h2 className={cn("text-8xl", offBiteBold.className)}>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}