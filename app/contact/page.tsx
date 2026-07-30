"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  GraduationCap,
  MessageCircle,
  Monitor,
  Sparkles,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-10 h-10 text-sky-500" />,
    title: "1:1 맞춤 수업",
    description:
      "학생 한 명 한 명의 목표와 현재 실력에 맞춘 커리큘럼으로 수업을 진행합니다.",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-sky-500" />,
    title: "실전 회화",
    description:
      "암기가 아닌 실제 일본에서 사용할 수 있는 자연스러운 회화를 배웁니다.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-sky-500" />,
    title: "JLPT 대비",
    description:
      "N5부터 N1까지 목표 등급에 맞춰 체계적으로 준비할 수 있습니다.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-sky-500" />,
    title: "온라인 수업",
    description:
      "Discord를 이용해 전국 어디서나 편하게 수업을 받을 수 있습니다.",
  },
];

const faqs = [
  {
    question: "온라인 수업도 가능한가요?",
    answer: "네. Discord를 이용한 1:1 온라인 수업을 진행합니다.",
  },
  {
    question: "교재는 어떻게 제공되나요?",
    answer:
      "현재 HARU NIHONGO LAB 자체 교재는 개발 중이며, 현재는 검증된 기성 교재를 사용합니다.",
  },
  {
    question: "수업은 얼마나 진행되나요?",
    answer:
      "학생의 목표에 따라 다르며 상담 후 가장 적합한 커리큘럼을 제안드립니다.",
  },
  {
    question: "일본어를 처음 배우는데 괜찮을까요?",
    answer:
      "물론입니다. 히라가나부터 차근차근 시작할 수 있도록 맞춤형으로 진행합니다.",
  },
];

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-slate-50">
      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">

          <div>

            <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/20 px-4 py-2 text-sm font-medium">

              🇯🇵 HARU NIHONGO LAB

            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">

              일본어는
              <br />

              <span className="text-sky-400">

                즐겁게 배워야

              </span>

              <br />

              오래 갑니다.

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              안녕하세요.
              <br />
              HARU NIHONGO LAB의
              <span className="font-semibold text-white">
                {" "}튜터 하루
              </span>
              입니다.

              <br /><br />

              여행 일본어부터 JLPT,
              실전 회화까지

              학생 한 명 한 명에게 맞춘
              1:1 일본어 수업을 진행하고 있습니다.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="#contact"
                className="flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold transition hover:bg-sky-400"
              >
                무료 상담 신청
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#faq"
                className="rounded-xl border border-white/20 px-7 py-4 transition hover:bg-white/10"
              >
                FAQ 보기
              </Link>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-sky-500 opacity-20 blur-3xl" />

              <Image
                src="/tutor.jpg"
                alt="튜터 하루"
                width={430}
                height={560}
                className="relative rounded-3xl border border-white/10 object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>      {/* WHY */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-sky-600 font-semibold tracking-widest">

              WHY HARU NIHONGO LAB

            </span>

            <h2 className="mt-4 text-4xl font-bold">

              왜 HARU NIHONGO LAB일까요?

            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-8">

              단순히 일본어를 외우는 것이 아니라
              실제로 사용할 수 있도록 배우는 수업을 지향합니다.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {features.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="inline-flex rounded-2xl bg-sky-100 p-4">

                  {item.icon}

                </div>

                <h3 className="mt-6 text-xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {item.description}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROFILE */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div className="relative">

              <div className="absolute -inset-4 rounded-3xl bg-sky-500/10 blur-2xl" />

              <Image
                src="/tutor.jpg"
                alt="튜터 하루"
                width={520}
                height={650}
                className="relative rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="font-semibold text-sky-600">

                Tutor Profile

              </span>

              <h2 className="mt-3 text-4xl font-bold">

                안녕하세요,
                <br />
                튜터 하루입니다.

              </h2>

              <p className="mt-8 leading-8 text-slate-600">

                일본어는 시험을 위한 과목이 아니라,
                사람과 사람을 연결하는 언어라고 생각합니다.

                <br />
                <br />

                그래서 HARU NIHONGO LAB에서는
                학생의 목표와 성향을 먼저 이해하고,
                그에 맞는 커리큘럼을 직접 설계합니다.

                <br />
                <br />

                여행 일본어부터
                JLPT,
                회화,
                기초 문법,
                일본 취업 및 유학 준비까지
                폭넓게 함께합니다.

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-green-500" />

                  <span>100% 1:1 맞춤형 수업</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-green-500" />

                  <span>Discord 온라인 라이브 수업</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-green-500" />

                  <span>회화 · JLPT · 여행 일본어 전문</span>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle className="text-green-500" />

                  <span>수업 후 피드백 및 복습 자료 제공</span>

                </div>

              </div>

              <div className="mt-12 flex flex-wrap gap-4">

                <div className="rounded-2xl bg-white px-6 py-5 shadow">

                  <div className="text-3xl font-bold text-sky-600">

                    1:1

                  </div>

                  <div className="mt-1 text-sm text-slate-500">

                    Personalized Lesson

                  </div>

                </div>

                <div className="rounded-2xl bg-white px-6 py-5 shadow">

                  <div className="text-3xl font-bold text-sky-600">

                    Online

                  </div>

                  <div className="mt-1 text-sm text-slate-500">

                    Discord Class

                  </div>

                </div>

                <div className="rounded-2xl bg-white px-6 py-5 shadow">

                  <div className="text-3xl font-bold text-sky-600">

                    JLPT

                  </div>

                  <div className="mt-1 text-sm text-slate-500">

                    N5 ~ N1

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>      {/* 추천하는 학생 */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-sky-600 font-semibold tracking-widest">

              RECOMMENDED

            </span>

            <h2 className="mt-4 text-4xl font-bold">

              이런 분들에게 추천합니다.

            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-8">

              아래 내용 중 하나라도 해당된다면
              HARU NIHONGO LAB과 함께 시작해보세요.

            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "일본어를 처음 배우는 분",
                desc: "히라가나부터 차근차근 배우고 싶은 분",
              },
              {
                title: "JLPT를 준비하는 분",
                desc: "시험 합격을 목표로 체계적으로 공부하고 싶은 분",
              },
              {
                title: "여행 일본어가 필요한 분",
                desc: "일본 여행에서 자연스럽게 대화하고 싶은 분",
              },
              {
                title: "애니·드라마를 좋아하는 분",
                desc: "자막 없이 이해하고 싶은 분",
              },
              {
                title: "일본 취업·유학 준비",
                desc: "실전 일본어가 필요한 분",
              },
              {
                title: "회화 실력을 늘리고 싶은 분",
                desc: "실제로 말하는 연습을 꾸준히 하고 싶은 분",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-500">

                  <Star className="h-7 w-7 text-sky-600 group-hover:text-white" />

                </div>

                <h3 className="mt-6 text-2xl font-bold">

                  {item.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">

            <span className="text-sky-600 font-semibold tracking-widest">

              LESSON PROCESS

            </span>

            <h2 className="mt-4 text-4xl font-bold">

              수업은 이렇게 진행됩니다.

            </h2>

            <p className="mt-5 text-lg text-slate-600">

              처음 상담부터 수업 종료 후 피드백까지
              체계적으로 함께합니다.

            </p>

          </div>

          <div className="mt-20 space-y-10">

            {[
              {
                step: "01",
                title: "무료 상담",
                text: "현재 실력과 목표를 확인하고 가장 적합한 방향을 상담합니다.",
              },
              {
                step: "02",
                title: "레벨 체크",
                text: "기초 문법과 회화 실력을 확인하여 커리큘럼을 설계합니다.",
              },
              {
                step: "03",
                title: "1:1 맞춤 수업",
                text: "학생에게 맞춘 개인 수업을 Discord를 통해 진행합니다.",
              },
              {
                step: "04",
                title: "복습 및 피드백",
                text: "수업 후 부족했던 부분과 복습 내용을 정리하여 제공합니다.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-lg md:flex-row md:items-center"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sky-500 text-2xl font-bold text-white">

                  {item.step}

                </div>

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-3 leading-8 text-slate-600">

                    {item.text}

                  </p>

                </div>

                <ArrowRight className="hidden text-sky-500 md:block" />

              </div>

            ))}

          </div>

        </div>

      </section>      {/* 교재 안내 */}

      <section className="py-24 bg-slate-100">

        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[32px] bg-white p-10 shadow-xl lg:p-14">

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

                <BookOpen className="h-8 w-8 text-sky-600" />

              </div>

              <div>

                <span className="font-semibold text-sky-600">

                  TEXTBOOK

                </span>

                <h2 className="mt-1 text-4xl font-bold">

                  교재 안내

                </h2>

              </div>

            </div>

            <p className="mt-10 text-lg leading-9 text-slate-600">

              현재 <strong>HARU NIHONGO LAB 자체 교재</strong>는
              개발 중입니다.

              <br />
              <br />

              현재는 학습 효과가 검증된 기성 교재를 사용하며,
              학생의 수준과 목표에 맞춰 가장 적합한 교재를
              선정하여 수업을 진행합니다.

              <br />
              <br />

              온라인(PDF) 또는 실물 교재 중 원하는 방식을
              선택하실 수 있습니다.

            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2">

              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">

                <div className="text-4xl">

                  💻

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  온라인 PDF

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  태블릿과 노트북으로 편하게 학습할 수 있으며,
                  실물 교재보다 저렴하게 이용 가능합니다.

                </p>

              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

                <div className="text-4xl">

                  📖

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  실물 교재

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  필기하며 공부하는 것을 선호하는 학생에게
                  추천드립니다.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 수업 특징 */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="font-semibold tracking-widest text-sky-600">

              LESSON FEATURES

            </span>

            <h2 className="mt-4 text-4xl font-bold">

              하루 수업만의 장점

            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">

              학생 한 명 한 명에게 맞는 수업을 위해
              항상 고민합니다.

            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-slate-50 p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

                <Sparkles className="h-8 w-8 text-sky-600" />

              </div>

              <h3 className="mt-7 text-2xl font-bold">

                맞춤형 커리큘럼

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                모든 학생은 목표와 학습 속도가 다릅니다.

                <br />
                여행 일본어,
                JLPT,
                회화,
                취업 준비 등

                목표에 맞추어
                개인별 커리큘럼을 설계합니다.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">

                <Monitor className="h-8 w-8 text-sky-600" />

              </div>

              <h3 className="mt-7 text-2xl font-bold">

                Discord 온라인 수업

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                집에서도 편안하게
                고음질 온라인 수업을 받을 수 있으며,
                화면 공유와 실시간 피드백으로
                오프라인 못지않은 학습 환경을 제공합니다.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="py-24 bg-slate-50"
      >

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <span className="font-semibold tracking-widest text-sky-600">

              FAQ

            </span>

            <h2 className="mt-4 text-4xl font-bold">

              자주 묻는 질문

            </h2>

          </div>

          <div className="mt-16 space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <span className="text-lg font-semibold">

                    {faq.question}

                  </span>

                  <span className="text-3xl font-light">

                    {open === index ? "−" : "+"}

                  </span>

                </button>

                {open === index && (

                  <div className="px-8 pb-8 leading-8 text-slate-600">

                    {faq.answer}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>      {/* CONTACT */}

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-24 text-white"
      >

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/20 px-5 py-2 text-sm font-semibold">

            🇯🇵 HARU NIHONGO LAB

          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight">

            일본어,
            <br />

            오늘부터 시작해보세요.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">

            일본어는 혼자 오래 고민하는 것보다
            올바른 방향으로 시작하는 것이 훨씬 중요합니다.

            <br />
            무료 상담을 통해
            현재 실력과 목표에 맞는
            가장 효율적인 커리큘럼을 안내해드립니다.

          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <a
              href="https://open.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-[#FEE500] px-8 py-6 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-3xl">

                💬

              </div>

              <div className="mt-4">

                카카오톡 상담

              </div>

            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 px-8 py-6 text-lg font-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="text-3xl">

                📷

              </div>

              <div className="mt-4">

                Instagram

              </div>

            </a>

            <a
              href="mailto:example@gmail.com"
              className="group rounded-3xl bg-sky-500 px-8 py-6 text-lg font-bold transition-all duration-300 hover:-translate-y-2 hover:bg-sky-400 hover:shadow-2xl"
            >

              <div className="text-3xl">

                📧

              </div>

              <div className="mt-4">

                Email

              </div>

            </a>

          </div>

          <div className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur">

            <h3 className="text-3xl font-bold">

              HARU NIHONGO LAB

            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">

              일본어를 배우는 가장 즐거운 방법.

              <br />

              학생의 목표를 함께 이루는
              1:1 일본어 전문 클래스입니다.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link
                href="/"
                className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
              >
                홈으로
              </Link>

              <Link
                href="#faq"
                className="rounded-xl border border-white/20 px-6 py-3 transition hover:bg-white/10"
              >
                FAQ
              </Link>

              <Link
                href="#contact"
                className="rounded-xl bg-sky-500 px-6 py-3 font-semibold transition hover:bg-sky-400"
              >
                무료 상담
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:text-left">

          <div>

            <h3 className="text-xl font-bold text-slate-900">

              HARU NIHONGO LAB

            </h3>

            <p className="mt-2 text-slate-500">

              Learn Japanese Naturally.

            </p>

          </div>

          <div className="text-sm leading-7 text-slate-500">

            © {new Date().getFullYear()} HARU NIHONGO LAB.
            <br />
            All Rights Reserved.

          </div>

        </div>

      </footer>

    </main>

  );

}