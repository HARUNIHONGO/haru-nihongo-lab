"use client";

export default function Hero() {
  const moveToTest = () => {
    document
      .getElementById("level-test")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/35" />


      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">


        <p className="mb-5 tracking-[0.4em] text-sm">
          HARU NIHONGO LAB
        </p>


        <h1 className="text-5xl font-light leading-tight md:text-7xl">
          일본어를,
          <br />
          더 자연스럽게.
        </h1>


        <p className="mt-6 text-lg tracking-[0.2em]">
          日本語を、もっと自然に。
        </p>


        <p className="mt-10 max-w-xl leading-8 opacity-90">
          일본어를 배우는 가장 자연스러운 방법.
          <br />
          실전 회화부터 JLPT까지,
          <br />
          하루 니혼고 랩과 함께 성장해보세요.
        </p>


        <button
          onClick={moveToTest}
          className="mt-12 rounded-full bg-white px-8 py-4 text-black transition hover:scale-105"
        >
          무료 레벨 테스트
        </button>


      </div>

    </section>
  );
}