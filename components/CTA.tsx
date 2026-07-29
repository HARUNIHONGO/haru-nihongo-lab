import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="level-test"
      className="bg-gradient-to-br from-[#14213D] via-[#1B2A49] to-[#0F172A] py-28 px-6"
    >
      <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 px-10 py-20 text-center backdrop-blur-sm">

        <p className="mb-4 text-sm tracking-[0.35em] text-blue-200">
          FREE LEVEL TEST
        </p>

        <h2 className="text-4xl font-light leading-[1.4] text-white md:text-5xl">
          당신의 일본어 실력,
          <br />
          지금 바로 확인해 보세요.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          약 5분 정도의 테스트를 통해 현재 실력을 확인하고
          <br />
          HARU NIHONGO LAB의 맞춤 커리큘럼을 추천해 드립니다.
        </p>


        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-white transition hover:bg-white/15">
            ✓ 약 5-10분 소요
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-white transition hover:bg-white/15">
            ✓ 자동 채점
          </div>

          <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-white transition hover:bg-white/15">
            ✓ 맞춤 STEP 추천
          </div>

        </div>


        <Link
          href="/level-test/beginner"
          className="mt-14 inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#14213D] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
        >
          무료 테스트 시작하기 →
        </Link>


      </div>
    </section>
  );
}