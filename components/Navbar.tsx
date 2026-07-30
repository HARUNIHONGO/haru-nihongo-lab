"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <Image
            src="/logo/haru-symbol.png"
            alt="HARU NIHONGO LAB"
            width={45}
            height={45}
            priority
          />


          <div className="leading-tight">

            <p className="font-serif text-lg font-bold tracking-[0.25em] text-white">
              HARU
            </p>


            <p className="text-[10px] tracking-[0.35em] text-white/70">
              NIHONGO LAB
            </p>

          </div>


        </Link>



        {/* PC MENU */}

        <nav className="hidden items-center gap-8 md:flex">


          <Link
            href="/#about"
            className="text-sm text-white/80 transition hover:text-white"
          >
            소개
          </Link>


          <Link
            href="/#curriculum"
            className="text-sm text-white/80 transition hover:text-white"
          >
            수업
          </Link>


          <Link
            href="/contact"
            className="text-sm text-white/80 transition hover:text-white"
          >
            튜터
          </Link>


          <Link
            href="/contact"
            className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#14213D] transition hover:scale-105"
          >
            수업 문의하기
          </Link>


        </nav>



        {/* MOBILE BUTTON */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >

          <div className="space-y-1">

            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>

          </div>

        </button>


      </div>



      {/* MOBILE MENU */}

      {open && (

        <div className="border-t border-white/10 bg-[#0F172A] px-6 py-6 md:hidden">


          <div className="flex flex-col gap-5">


            <Link
              href="/#about"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              소개
            </Link>


            <Link
              href="/#curriculum"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              수업
            </Link>


            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              튜터
            </Link>


            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-white px-6 py-3 text-center font-semibold text-[#14213D]"
            >
              수업 문의하기
            </Link>


          </div>


        </div>

      )}


    </header>
  );
}