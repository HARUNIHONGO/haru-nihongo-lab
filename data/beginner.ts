export interface Question {
  id: number;
  category: string;
  part: number;
  question: string;
  furigana?: string;
  choices: string[];
  answer: number;
  explanation: string;
}

export const beginnerQuestions: Question[] = [
  // =========================
  // Part 1 : 문자
  // =========================

  {
    id: 1,
    category: "문자",
    part: 1,
    question: "「ぬ」의 올바른 발음은?",
    choices: ["nu", "ne", "no", "na"],
    answer: 0,
    explanation: "「ぬ」는 'nu'입니다.",
  },

  {
    id: 2,
    category: "문자",
    part: 1,
    question: "「ね」의 올바른 발음은?",
    choices: ["ni", "ne", "na", "nu"],
    answer: 1,
    explanation: "「ね」는 'ne'입니다.",
  },

  {
    id: 3,
    category: "문자",
    part: 1,
    question: "「シ」는 무엇일까요?",
    choices: ["shi", "tsu", "so", "chi"],
    answer: 0,
    explanation: "シ는 'shi'입니다.",
  },

  {
    id: 4,
    category: "문자",
    part: 1,
    question: "「ツ」는 무엇일까요?",
    choices: ["shi", "tsu", "su", "to"],
    answer: 1,
    explanation: "ツ는 'tsu'입니다.",
  },

  {
    id: 5,
    category: "문자",
    part: 1,
    question: "「ネコ」의 뜻은?",
    choices: ["강아지", "고양이", "토끼", "새"],
    answer: 1,
    explanation: "ネコ는 고양이입니다.",
  },

  // =========================
  // Part 2 : 기초 단어
  // =========================

  {
    id: 6,
    category: "단어",
    part: 2,
    question: "学生",
    furigana: "がくせい",
    choices: ["학생", "선생님", "회사원", "의사"],
    answer: 0,
    explanation: "学生는 학생입니다.",
  },

  {
    id: 7,
    category: "단어",
    part: 2,
    question: "テレビ",
    choices: ["컴퓨터", "텔레비전", "휴대폰", "라디오"],
    answer: 1,
    explanation: "テレビ는 텔레비전입니다.",
  },  {
    id: 8,
    category: "단어",
    part: 2,
    question: "コーヒー",
    choices: ["커피", "우유", "차", "주스"],
    answer: 0,
    explanation: "コーヒー는 커피입니다.",
  },

  {
    id: 9,
    category: "단어",
    part: 2,
    question: "先生",
    furigana: "せんせい",
    choices: ["학생", "선생님", "회사원", "의사"],
    answer: 1,
    explanation: "先生는 선생님입니다.",
  },

  {
    id: 10,
    category: "단어",
    part: 2,
    question: "学校",
    furigana: "がっこう",
    choices: ["학교", "병원", "회사", "도서관"],
    answer: 0,
    explanation: "学校는 학교입니다.",
  },

  // =========================
  // Part 3 : 문법
  // =========================

  {
    id: 11,
    category: "문법",
    part: 3,
    question: "私___学生です。",
    furigana: "わたし   がくせい です。",
    choices: ["は", "が", "を", "に"],
    answer: 0,
    explanation: "주제를 나타내는 조사 'は'를 사용합니다.",
  },

  {
    id: 12,
    category: "문법",
    part: 3,
    question: "水___飲みます。",
    furigana: "みず のみます。",
    choices: ["を", "に", "へ", "で"],
    answer: 0,
    explanation: "목적어에는 조사 'を'를 사용합니다.",
  },

  {
    id: 13,
    category: "문법",
    part: 3,
    question: "学校___行きます。",
    furigana: "がっこう  いきます。",
    choices: ["を", "に", "の", "が"],
    answer: 1,
    explanation: "목적지를 나타낼 때는 조사 'に'를 사용합니다.",
  },

  {
    id: 14,
    category: "문법",
    part: 3,
    question: "これは私___本です。",
    furigana: "これ は わたし  ほん です。",
    choices: ["の", "が", "を", "へ"],
    answer: 0,
    explanation: "'~의'를 나타낼 때는 조사 'の'를 사용합니다.",
  },  {
    id: 15,
    category: "문법",
    part: 3,
    question: "今は3時___。",
    furigana: "いま は さんじ ___。",
    choices: ["です", "ます", "でした", "ません"],
    answer: 0,
    explanation: "시간을 말할 때는 'です'를 사용합니다.",
  },

  // =========================
  // Part 4 : 회화
  // =========================

  {
    id: 16,
    category: "회화",
    part: 4,
    question: "「おはようございます」의 뜻은?",
    choices: [
      "좋은 아침입니다.",
      "안녕히 가세요.",
      "감사합니다.",
      "잘 먹겠습니다.",
    ],
    answer: 0,
    explanation: "아침 인사입니다.",
  },

  {
    id: 17,
    category: "회화",
    part: 4,
    question: "「ありがとうございます」의 뜻은?",
    choices: [
      "죄송합니다.",
      "감사합니다.",
      "안녕하세요.",
      "실례합니다.",
    ],
    answer: 1,
    explanation: "'감사합니다.'라는 의미입니다.",
  },

  {
    id: 18,
    category: "회화",
    part: 4,
    question: "A : お名前は？\nB : ____",
    choices: [
      "田中です。",
      "ありがとう。",
      "さようなら。",
      "おやすみ。",
    ],
    answer: 0,
    explanation: "이름을 물으면 '○○です.'라고 대답합니다.",
  },

  {
    id: 19,
    category: "회화",
    part: 4,
    question: "A : ありがとうございます。\nB : ____",
    choices: [
      "どういたしまして。",
      "こんにちは。",
      "いただきます。",
      "おはよう。",
    ],
    answer: 0,
    explanation: "'천만에요.'라는 표현입니다.",
  },

  {
    id: 20,
    category: "회화",
    part: 4,
    question: "「私は韓国人です。」의 뜻은?",
    furigana: "わたし は かんこくじん です。",
    choices: [
      "저는 일본인입니다.",
      "저는 학생입니다.",
      "저는 한국인입니다.",
      "저는 선생님입니다.",
    ],
    answer: 2,
    explanation: "'저는 한국인입니다.'라는 뜻입니다.",
  },
];