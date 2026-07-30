export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAF8] py-20 px-6 md:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 md:flex-row md:gap-24">

        {/* 왼쪽 */}
        <div className="w-full text-center md:w-[60%] md:text-left">

          <p className="mb-4 text-sm tracking-[0.35em] text-[#4B6584]">
            ABOUT
          </p>

          <h2 className="mb-8 text-3xl font-light leading-relaxed text-[#1E2433] md:text-[42px]">
            일본어를 외우는 것이 아닌,
            <br className="hidden md:block" />
            자연스럽게 말하는 힘을 기릅니다.
          </h2>

          <p className="text-base leading-8 text-gray-600 md:max-w-2xl md:text-[18px]">
            HARU NIHONGO LAB은 단순히 시험을 위한 일본어가 아니라,
            실제 일본에서 사용하는 표현과 자연스러운 회화를 배우는 것을 목표로 합니다.
            <br className="hidden md:block" />
            여행, 회화, JLPT까지 단계별 커리큘럼으로 일본어를 더욱 자신 있게 사용할 수 있도록
            도와드립니다.
          </p>

        </div>

        {/* 오른쪽 */}
        <div className="w-full md:w-[40%]">
          <img
            src="/about.jpg"
            alt="HARU NIHONGO LAB"
            className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}