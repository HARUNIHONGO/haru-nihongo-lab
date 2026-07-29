"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { intermediateQuestions } from "@/data/intermediate";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

export default function IntermediatePage() {
  const router = useRouter();

  // 현재 문제 번호
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // 사용자가 현재 선택한 답
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // 모든 답 저장
  const [answers, setAnswers] = useState<number[]>(
    Array(intermediateQuestions.length).fill(-1)
  );

  // 현재 문제
  const question = intermediateQuestions[currentQuestion];

  // 답 선택
  const handleSelect = (index: number) => {
    setSelectedAnswer(index);

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = index;
    setAnswers(newAnswers);
  };

  // 이전 문제
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

  // 다음 문제
  const handleNext = () => {
    if (selectedAnswer === null) {
      alert("답을 선택해주세요.");
      return;
    }

    // 마지막 문제라면 결과 계산
    if (currentQuestion === intermediateQuestions.length - 1) {
      let score = 0;

      intermediateQuestions.forEach((question, index) => {
        if (answers[index] === question.answer) {
          score++;
        }
      });

      const result = {
        score,
        total: intermediateQuestions.length,
        answers,
      };

      // Intermediate 결과 저장
      localStorage.setItem(
        "intermediateResult",
        JSON.stringify(result)
      );

      // 이전 Advanced 결과 삭제
      localStorage.removeItem("advancedResult");

      // 18점 이상이면 Advanced 테스트
      if (score >= 18) {
        router.push("/level-test/advanced");
      } else {
        router.push("/level-test/result");
      }

      return;
    }

    const next = currentQuestion + 1;

    setCurrentQuestion(next);

    if (answers[next] === -1) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answers[next]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <ProgressBar
          current={currentQuestion + 1}
          total={intermediateQuestions.length}
        />

        <div className="mt-8">
          <QuestionCard
            question={question}
            current={currentQuestion + 1}
            total={intermediateQuestions.length}
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
            {currentQuestion === intermediateQuestions.length - 1
              ? "결과 보기"
              : "다음"}
          </button>
        </div>
      </div>
    </main>
  );
}