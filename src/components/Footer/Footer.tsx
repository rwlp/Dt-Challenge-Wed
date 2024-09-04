'use client';

import { ICON_SIZE } from "@/utils/constants";
import { ArrowUpCircleIcon, CommandLineIcon, HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

export default function Footer(): React.ReactNode {

  return (
    <footer className="stick bottom-0 w-full h-16 flex items-center justify-center gap-3">
      <Link 
        className="w-24 h-8 flex text-center justify-center rounded-lg hover:bg-blue-400"
        href="https://github.com/rwlp/Dt-Challenge-Wed"
        aria-label="Go to GitHub Code Repository"
        >
          <CommandLineIcon width={ICON_SIZE} height={ICON_SIZE} className="text-blue-950" />
      </Link>

      <Link 
        className="w-24 h-8 flex text-center justify-center  rounded-lg hover:bg-blue-400"
        href="/"
        aria-label="Go to Home"
        >
          <HomeIcon width={ICON_SIZE} height={ICON_SIZE} className="text-blue-950" />
      </Link>

      <Link
        className="w-24 h-8 flex text-center justify-center  rounded-lg hover:bg-blue-400"
        href="#top"
        aria-label="Go to Top of Page"
        >
        <ArrowUpCircleIcon width={ICON_SIZE} height={ICON_SIZE} className="text-blue-950" />
      </Link>
    </footer>
  );
}