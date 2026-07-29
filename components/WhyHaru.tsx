export default function WhyHaru() {
  const features = [
    {
      icon: "📚",
      title: "자체 제작 교재",
      description: (
        <>
          실제 수업 경험을 바탕으로 직접 제작한 교재로
          <br />
          더욱 쉽게 이해할 수 있습니다.
        </>
      ),
    },
    {
      icon: "🇯🇵",
      title: "현지 표현 중심",
      description: (
        <>
          교과서 일본어가 아닌 일본인이 실제 사용하는
          <br />
          자연스러운 일본어를 배웁니다.
        </>
      ),
    },
    {
      icon: "👨‍🏫",
      title: "1:1 맞춤 수업",
      description: (
        <>
          무료 레벨 테스트 후
          <br />
          실력에 맞는 커리큘럼으로 진행됩니다.
        </>
      ),
    },
  ];

  return (
    <section
      id="why"
      className="bg-[#FAFAF8] py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm tracking-[0.35em] text-[#4B6584]">
          WHY HARU
        </p>

        <h2 className="mb-16 text-[42px] font-light leading-[1.3] text-[#1E2433]">
          왜 HARU NIHONGO LAB일까요?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {item.icon}
              </div>

              <h3 className="mb-5 text-2xl font-light text-[#1E2433]">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}