'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
const Header = () => {
  const pathname = usePathname()
  return (
    <header >
      <div className="main-container inner ">
        <Link href="/">
        <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="CoinPulse logo" width={40} height={40}/>
<span className="ml-2 text-white font-bold">MarketForge</span>
        </div>
        </Link>
        <nav>
          <Link href="/" className={cn('nav-link',{'is-active':pathname === '/','is-home':true})}>Home</Link>
          <p>Search Model</p>
          <Link href="/coins" className={cn('nav-link',{'is-active':pathname === '/coins'})}>All Coins</Link>
        </nav>
        </div>
    </header>
  )
}

export default Header