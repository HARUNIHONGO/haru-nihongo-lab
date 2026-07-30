import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0F172A] px-6 py-28 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <div className="rounded-[40px] border border-white/10 bg-white/5 px-10 py-16 backdrop-blur-sm">

          <div className="text-center">

            <p className="text-sm tracking-[0.35em] text-blue-200">
              CONTACT
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight md:text-5xl">
              일본어 공부,
              <br />
              함께 시작해 보세요.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              수업 문의부터 학습 방향 상담까지
              <br />
              TUTOR HARU가 도와드립니다.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <p className="text-sm text-blue-200">
                EMAIL
              </p>

              <p className="mt-3 text-xl">
                iamdw12@daum.net
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

              <p className="text-sm text-blue-200">
                TEL
              </p>

              <p className="mt-3 text-xl">
                010-7325-7033
              </p>

            </div>

          </div>

          <div className="mt-12 flex justify-center">

            <Link
              href="/contact"
              className="rounded-full bg-white px-10 py-4 font-semibold text-[#14213D] transition hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            >
              수업 문의하기 →
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}