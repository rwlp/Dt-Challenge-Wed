'use client';

import { BASE_CDN_URL, ICON_SIZE } from "@/utils/constants";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


export default function Header(): React.ReactNode {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggleThemeClick = () => {
    setIsDarkTheme(state => {
      const newTheme = !state;

      if (state) {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }

      return !state;
    })
  }

  return (
    <header
      className="fixed top-0 w-full h-12 flex items-center justify-between p-2"
      id="top"
      >
        <Link href={'/'} >
          <Image width={ICON_SIZE} height={ICON_SIZE} src={`${BASE_CDN_URL}/logo.png`} alt="Logo Image" aria-label="Go to Home" />
        </Link>

        <button onClick={handleToggleThemeClick} aria-label="Switch Theme Button">
          {isDarkTheme ? <SunIcon width={ICON_SIZE} height={ICON_SIZE} className="text-blue-200 animate-fadeIn"/> : <MoonIcon width={ICON_SIZE} height={ICON_SIZE} className="text-blue-950 animate-fadeIn"/>}
        </button>
    </header>
  )
}