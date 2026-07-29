import Link from "next/link";

export default function Page1() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#14213D] to-[#1D4ED8] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            HARU NIHONGO LAB
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            당신의 일본어 실력을
            <br />
            지금 바로 확인해보세요.
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/80">
            HARU NIHONGO LAB에서 준비한 무료 일본어 레벨 테스트입니다.
            <br />
            초급부터 고급까지 단계별 테스트를 통해
            <br />
            현재 자신의 일본어 실력을 객관적으로 확인할 수 있습니다.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">20문항</h3>
              <p className="mt-2 text-sm text-white/70">
                단계별 20문항으로 구성
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">약 15분</h3>
              <p className="mt-2 text-sm text-white/70">
                누구나 부담 없이 응시
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur">
              <h3 className="text-xl font-semibold">무료</h3>
              <p className="mt-2 text-sm text-white/70">
                회원가입 없이 이용 가능
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/level-test/beginner"
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#14213D] transition hover:scale-105"
            >
              테스트 시작하기 →
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/20 px-8 py-4 text-lg transition hover:bg-white/10"
            >
              홈으로
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}