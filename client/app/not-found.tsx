import Link from 'next/link'
import { cn } from '@/lib/utils'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-8xl font-offbite-bold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}