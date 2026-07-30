import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
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
        <p className="text-lg font-serif font-bold tracking-[0.25em] text-white">
          HARU
        </p>

        <p className="text-[10px] tracking-[0.35em] text-white/70">
          NIHONGO LAB
        </p>
      </div>

    </Link>
  );
}