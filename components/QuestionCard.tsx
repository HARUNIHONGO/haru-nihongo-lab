import { Question } from "@/data/beginner";

interface QuestionCardProps {
  question: Question;
  current: number;
  total: number;
  selected: number | null;
  onSelect: (index: number) => void;
}

export default function QuestionCard({
  question,
  current,
  total,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

      {/* 상단 */}
      <div className="flex items-center justify-between">

        <span className="rounded-full bg-[#14213D]/10 px-4 py-2 text-sm font-medium text-[#14213D]">
          {question.category}
        </span>

        <span className="text-sm text-gray-500">
          Question {current} / {total}
        </span>

      </div>

      {/* 문제 */}
      <div className="mt-10 text-center">

        {question.furigana ? (
          <ruby className="text-4xl font-light text-[#1E2433]">
            {question.question}
            <rt className="text-base text-gray-500">
              {question.furigana}
            </rt>
          </ruby>
        ) : (
          <h2 className="whitespace-pre-line text-3xl font-light leading-relaxed text-[#1E2433]">
            {question.question}
          </h2>
        )}

      </div>

      {/* 선택지 */}
      <div className="mt-10 space-y-4">

        {question.choices.map((choice, index) => {

          const isSelected = selected === index;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`w-full rounded-2xl border p-5 text-left transition-all duration-200 ${
                isSelected
                  ? "border-[#14213D] bg-[#14213D] text-white shadow-lg scale-[1.02]"
                  : "border-gray-200 bg-white hover:border-[#14213D] hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                    isSelected
                      ? "bg-white text-[#14213D]"
                      : "bg-[#F5F5F5]"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                <span className="text-lg">
                  {choice}
                </span>

              </div>
            </button>
          );

        })}

      </div>

    </div>
  );
}