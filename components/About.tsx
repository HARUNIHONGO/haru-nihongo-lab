export default function About() {
  return (
    <section
      id="about"
      className="bg-[#FAFAF8] py-32 px-6"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-24">

        {/* 왼쪽 */}
        <div className="w-[60%]">

          <p className="mb-4 text-sm tracking-[0.35em] text-[#4B6584]">
            ABOUT
          </p>

          <h2 className="mb-10 text-[42px] font-light leading-[1.3] text-[#1E2433]">
            일본어를 외우는 것이 아닌,
            <br />
            자연스럽게 말하는 힘을 기릅니다.
          </h2>

          <p className="max-w-2xl text-[18.5px] leading-[2] text-gray-600">
            HARU NIHONGO LAB은 단순히 시험을 위한 일본어가 아니라, 실제 일본에서
            <br />
            사용하는 표현과 자연스러운 회화를 배우는 것을 목표로 합니다. 여행,
            회화, JLPT까지
            <br />
            단계별 커리큘럼으로 일본어를 더욱 자신 있게 사용할 수 있도록
            도와드립니다.
          </p>

        </div>

        {/* 오른쪽 */}
        <div className="w-[40%]">
          <img
            src="/about.jpg"
            alt="HARU NIHONGO LAB"
            className="w-full rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}