export default function StepSection() {
  const steps = [
    {
      number: "STEP 01",
      title: (
        <>
          히라가나 ·
          <br />
          가타카나
        </>
      ),
      description: "일본어의 가장 기초부터 차근차근 시작합니다.",
    },
    {
      number: "STEP 02",
      title: "기초 문법",
      description: "회화에 꼭 필요한 문법을 쉽게 익힙니다.",
    },
    {
      number: "STEP 03",
      title: "실전 회화",
      description: "실제 일본인이 사용하는 표현을 배웁니다.",
    },
    {
      number: "STEP 04",
      title: "JLPT",
      description: "N5부터 N1까지 단계별 시험을 준비합니다.",
    },
    {
      number: "STEP 05",
      title: "Native",
      description: "현지인처럼 자연스러운 일본어를 완성합니다.",
    },
  ];

  return (
    <section
      id="step"
      className="bg-white py-32 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm tracking-[0.35em] text-[#4B6584]">
          STEP SYSTEM
        </p>

        <h2 className="mb-16 text-[42px] font-light leading-[1.3] text-[#1E2433]">
          당신의 수준에 맞는
          <br />
          5단계 커리큘럼
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-gray-200 bg-[#FAFAF8] p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:border-[#1E2B68]"
            >
              <p className="text-xs tracking-[0.3em] text-gray-500">
                {step.number}
              </p>

              <h3 className="mt-6 text-2xl font-light leading-[1.4] text-[#1E2433]">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}