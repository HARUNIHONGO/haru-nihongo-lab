"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { beginnerQuestions } from "@/data/beginner";
import { intermediateQuestions } from "@/data/intermediate";
import { advancedQuestions } from "@/data/advanced";

type Result = {
  score: number;
  total: number;
  answers: number[];
};

export default function ResultPage() {
  const router = useRouter();

  const [result, setResult] = useState<Result | null>(null);
  const [testType, setTestType] = useState<
    "beginner" | "intermediate" | "advanced"
  >("beginner");

  useEffect(() => {
    const advanced = localStorage.getItem("advancedResult");
    const intermediate = localStorage.getItem("intermediateResult");
    const beginner = localStorage.getItem("beginnerResult");

    if (advanced) {
      setResult(JSON.parse(advanced));
      setTestType("advanced");
      return;
    }

    if (intermediate) {
      setResult(JSON.parse(intermediate));
      setTestType("intermediate");
      return;
    }

    if (beginner) {
      setResult(JSON.parse(beginner));
      setTestType("beginner");
      return;
    }

    router.replace("/level-test");
  }, [router]);

  const questions = useMemo(() => {
    switch (testType) {
      case "advanced":
        return advancedQuestions;
      case "intermediate":
        return intermediateQuestions;
      default:
        return beginnerQuestions;
    }
  }, [testType]);

  const percent = useMemo(() => {
    if (!result) return 0;
    return Math.round((result.score / result.total) * 100);
  }, [result]);

  const level = useMemo(() => {
    if (!result) return "";

    if (testType === "advanced") {
      if (result.score >= 18) return "JLPT N2 Ready";
      if (result.score >= 14) return "JLPT N3";
      return "JLPT N4";
    }

    if (testType === "intermediate") {
      if (result.score >= 18) return "JLPT N3";
      if (result.score >= 14) return "JLPT N4";
      return "JLPT N5";
    }

    if (result.score >= 18) return "JLPT N4";
    if (result.score >= 14) return "JLPT N5";
    return "Hiragana";
  }, [result, testType]);

  const recommendation = useMemo(() => {
    switch (level) {
      case "JLPT N2 Ready":
        return "Advanced Plus Course";

      case "JLPT N3":
        return "Advanced Course";

      case "JLPT N4":
        return "Intermediate Course";

      case "JLPT N5":
        return "Beginner Course";

      default:
        return "히라가나 마스터 코스";
    }
  }, [level]);

  const categoryResult = useMemo(() => {
    if (!result) return [];

    const categories = [...new Set(questions.map((q) => q.category))];

    return categories.map((category) => {
      const list = questions.filter(
        (q) => q.category === category
      );

      let correct = 0;

      list.forEach((q) => {
        if (result.answers[q.id - 1] === q.answer) {
          correct++;
        }
      });

      return {
        category,
        correct,
        total: list.length,
      };
    });
  }, [result, questions]);

  if (!result) return null;  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6">

        <div className="rounded-3xl bg-white p-10 shadow-sm">

          <h1 className="text-center text-4xl font-bold">
            🎉 Level Test Complete
          </h1>

          <p className="mt-3 text-center text-gray-500">
            {testType === "beginner" && "Beginner Test"}
            {testType === "intermediate" && "Intermediate Test"}
            {testType === "advanced" && "Advanced Test"}
          </p>

          <p className="mt-8 text-center text-7xl font-extrabold text-[#14213D]">
            {result.score} / {result.total}
          </p>

          <p className="mt-4 text-center text-3xl font-semibold text-gray-500">
            {percent}%
          </p>

          <div className="mt-10 flex justify-center">
            <span className="rounded-full bg-blue-100 px-6 py-3 text-lg font-semibold text-blue-700">
              {level}
            </span>
          </div>

          <div className="mt-10 rounded-2xl bg-gray-100 p-6">
            <h2 className="text-xl font-bold">
              추천 과정
            </h2>

            <p className="mt-3 text-lg text-gray-700">
              {recommendation}
            </p>
          </div>

          <div className="mt-10">

            <h2 className="mb-5 text-2xl font-bold">
              분야별 분석
            </h2>

            <div className="space-y-4">

              {categoryResult.map((item) => (
                <div
                  key={item.category}
                  className="rounded-2xl border bg-white p-5"
                >
                  <div className="flex justify-between">

                    <span className="font-semibold">
                      {item.category}
                    </span>

                    <span>
                      {item.correct} / {item.total}
                    </span>

                  </div>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-[#14213D]"
                      style={{
                        width: `${(item.correct / item.total) * 100}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          <div className="mt-12">

            <h2 className="mb-5 text-2xl font-bold">
              틀린 문제 복습
            </h2>

            <div className="space-y-5">              {questions
                .filter((question) => {
                  return (
                    result.answers[question.id - 1] !==
                    question.answer
                  );
                })
                .map((question) => (
                  <div
                    key={question.id}
                    className="rounded-2xl border bg-white p-6"
                  >
                    <p className="font-semibold">
                      Q{question.id}. {question.question}
                    </p>

                    {question.furigana && (
                      <p className="mt-1 text-sm text-gray-500">
                        {question.furigana}
                      </p>
                    )}

                    <div className="mt-4 space-y-2">

                      <p className="text-red-600">
                        ❌ 내 답 :{" "}
                        {result.answers[question.id - 1] === -1
                          ? "선택 안 함"
                          : question.choices[
                              result.answers[question.id - 1]
                            ]}
                      </p>

                      <p className="text-green-600">
                        ✅ 정답 :{" "}
                        {question.choices[question.answer]}
                      </p>

                      <p className="text-gray-600">
                        {question.explanation}
                      </p>

                    </div>
                  </div>
                ))}

              {questions.every(
                (question) =>
                  result.answers[question.id - 1] ===
                  question.answer
              ) && (
                <div className="rounded-2xl border bg-green-50 p-6 text-center">
                  🎉 모든 문제를 맞혔습니다!
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/level-test/beginner"
              onClick={() => {
                localStorage.removeItem("beginnerResult");
                localStorage.removeItem("intermediateResult");
                localStorage.removeItem("advancedResult");
              }}
              className="flex-1 rounded-xl bg-[#14213D] px-6 py-4 text-center font-semibold text-white transition hover:opacity-90"
            >
              다시 테스트
            </Link>

            <Link
              href="/"
              className="flex-1 rounded-xl border border-gray-300 px-6 py-4 text-center font-semibold transition hover:bg-gray-100"
            >
              홈으로
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}