'use client';

import { useAppSelector } from "@/utils/hooks/reduxHooks";
import Link from "next/link";



export default function NextButton() {
  const {year, makerId} = useAppSelector(state => state.search);

  return (
    <>
      {year && makerId ? 
        <Link
          href={`/result/${makerId}/${year}`} 
          className=""
          >
          NEXT!
        </Link>
        : <></>}
    </>
    
  )
}