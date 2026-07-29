"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { advancedQuestions } from "@/data/advanced";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

export default function AdvancedPage() {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const [answers, setAnswers] = useState<number[]>(
    Array(advancedQuestions.length).fill(-1)
  );

  const question = advancedQuestions[currentQuestion];

  const handleSelect = (index: number) => {
    setSelectedAnswer(index);

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  const handlePrev = () => {
    if (currentQuestion === 0) return;

    const prev = currentQuestion - 1;

    setCurrentQuestion(prev);

    if (answers[prev] === -1) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answers[prev]);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      alert("답을 선택해주세요.");
      return;
    }

    if (currentQuestion === advancedQuestions.length - 1) {
      let score = 0;

      advancedQuestions.forEach((question, index) => {
        if (answers[index] === question.answer) {
          score++;
        }
      });

      const result = {
        score,
        total: advancedQuestions.length,
        answers,
      };

      localStorage.setItem(
        "advancedResult",
        JSON.stringify(result)
      );

      router.push("/level-test/result");

      return;
    }

    const next = currentQuestion + 1;

    setCurrentQuestion(next);

    if (answers[next] === -1) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answers[next]);
    }
  };  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">

        <ProgressBar
          current={currentQuestion + 1}
          total={advancedQuestions.length}
        />

        <div className="mt-8">
          <QuestionCard
            question={question}
            current={currentQuestion + 1}
            total={advancedQuestions.length}
            selected={selectedAnswer}
            onSelect={handleSelect}
          />
        </div>

        <div className="mt-10 flex justify-between">

          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="rounded-xl border border-gray-300 px-6 py-3 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            이전
          </button>

          <button
            onClick={handleNext}
            className="rounded-xl bg-[#14213D] px-8 py-3 font-medium text-white transition hover:opacity-90"
          >
            {currentQuestion === advancedQuestions.length - 1
              ? "결과 보기"
              : "다음"}
          </button>

        </div>

      </div>
    </main>
  );
}