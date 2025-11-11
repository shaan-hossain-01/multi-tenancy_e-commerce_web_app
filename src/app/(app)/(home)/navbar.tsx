"use client";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavbarSidebar from './navbar-sidebar';
import { useState } from 'react';
import { MenuIcon } from 'lucide-react';


const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

interface NavBarItemsProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavBarItem = ({ href, children, isActive }: NavBarItemsProps) => {
  return (
    <Button variant="outline" asChild className={cn('bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg', isActive && "bg-black text-white hover:bg-black hover:text-white")}>
      <Link href={href}>
        {children}
      </Link>
    </Button>
  )
}

const navbarLinks = [
  { href: '/', children: 'Home' },
  { href: '/about', children: 'About' },
  { href: '/features', children: 'Features' },
  { href: '/pricing', children: 'Pricing' },
  { href: '/contact', children: 'Contact' },
]

const Navbar = () => {
  const pathname = usePathname();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <nav className="h-20 border-b flex justify-between font-medium bg-white">
      <Link href='/' className='pl-6 flex items-center'>
        <span className={cn("text-5xl font-semibold", poppins.className)}>funroad</span>
      </Link>

      <NavbarSidebar items={navbarLinks} open={isSideBarOpen} onOpenChange={setIsSideBarOpen} />

      <div className='hidden lg:flex items-center gap-4'>
        {navbarLinks.map((item) => (
          <NavBarItem key={item.href} href={item.href} isActive={pathname === item.href}>{item.children}</NavBarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button asChild variant="secondary" className="border-l border-r-0 border-t-0 border-b-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"><Link href="/sign-in">Log In</Link></Button>
        <Button asChild className="border-l border-r-0 border-t-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"><Link href="/sign-up">Start Selling</Link></Button>
      </div>

      <div className='flex lg:hidden items-center justify-center'>
        <Button variant="ghost"
          className='size-12 border-transparent bg-white'
          onClick={() => setIsSideBarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
