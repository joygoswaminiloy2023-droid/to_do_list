
'use client'
import React from 'react';
    import { useState } from "react";
import { Link, Button } from "@heroui/react";
import logo from "../../../../public/logo.jpg"
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Nav = () => {
  



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path=usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-cyan-200 bg-background/70 backdrop-blur-lg">
      <header className="relative mx-auto flex h-16  items-center px-6">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Nil's To Do Logo" width={40} height={40} />
          <span className="hidden text-lg font-semibold md:block">
            Nil’s To Do’s
          </span>
        </div>

        {/* Center - Links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <li>
            <Link href="/"  className={`hover:text-cyan-400 transition ${path==="/"? "text-cyan-400 font-semibold underline decoration-cyan-400 underline-offset-4 " : ""} `}>
             Lists
            </Link>
          </li>
          <li>
            <Link href="/jk" className="hover:text-cyan-400 transition">
              Pricing
            </Link>
          </li>
        </ul>

        {/* Right - Mobile Button */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-3 p-4">
            <li>
              <Link href="#" className="block py-2 hover:text-cyan-400">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 hover:text-cyan-400">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}



export default Nav;