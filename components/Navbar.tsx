"use client";

import Link from "next/link";


const menu = [
  { name: "About", href: "#about" },
  { name: "STEP", href: "#step" },
  { name: "Level Test", href: "#level-test" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">

      <div className="mx-auto mt-5 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl">


        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.3em] text-white transition hover:opacity-80"
        >
          HARU NIHONGO LAB
        </Link>


        <nav className="hidden gap-10 md:flex">

          {menu.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="text-sm text-white/90 transition duration-300 hover:text-white hover:scale-105"
            >
              {item.name}
            </a>

          ))}

        </nav>


      </div>

    </header>
  );
}