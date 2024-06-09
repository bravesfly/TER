"use client";
import { useState, useEffect } from 'react';
import { ModeToggle } from './ThemeSwitcher';
import LangSwitcher  from './LangSwitcher';
import { useTheme } from 'next-themes';
import Image from 'next/image';
export default function Header() {
  // const [open, setOpen] = useState(false);
  const {theme, setTheme} = useTheme()
  return (
    <div>
      <section className="relative border-b border-white/10 overflow-hidden bg-muted">
        <div className="items-center relative flex text-center bg-[#687af0] gap-x-6 isolate overflow-hidden px-6 py-2.5 sm:px-3.5">
          <div className="relative flex flex-wrap items-center justify-center mx-auto text-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-white">Simply transfer 1TRX to this address before the transfer to start using it immediately.</p>
            <a className="text-white text-sm focus-visible:outline-2 focus-visible:outline-offset-2 bg-black flex-none focus-visible:outline focus-visible:outline-gray-900 font-semibold hover:bg-gray-700 px-3.5 py-1 rounded-full shadow-sm" href="#_">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="relative w-full mx-auto max-w-7xl ">
          <div className="relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6" x-data="{ open: false }">
            <div className="flex flex-row items-center justify-between text-sm lg:justify-start">
              <Image src='/tron.svg' width={40} height={40} alt='logo'></Image>
              <a href="/" className='lg:ml-4 text-xl'>TER</a>

              <button className="inline-flex items-center justify-center p-2  text-white focus:outline-none focus:text-white/50 hover:text-white md:hidden">
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path className="inline-flex" d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path className="hidden" d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>


            </div>
            <nav className="flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0">
              <ModeToggle></ModeToggle>
              <LangSwitcher></LangSwitcher>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}