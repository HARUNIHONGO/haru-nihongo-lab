"use client";

import { useState } from "react";
import Link from "next/link";

const menu = [
  { name: "About", href: "#about" },
  { name: "STEP", href: "#step" },
  { name: "Level Test", href: "#level-test" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-xl md:px-8">

        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] text-white transition hover:opacity-80 md:text-lg"
        >
          HARU NIHONGO LAB
        </Link>

        {/* PC 메뉴 */}
        <nav className="hidden gap-10 md:flex">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/90 transition duration-300 hover:scale-105 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="mx-auto mt-3 w-[92%] rounded-3xl border border-white/20 bg-black/70 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-white transition hover:text-[#D4AF37]"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}