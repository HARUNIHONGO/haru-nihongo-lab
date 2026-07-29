import { Question } from "./beginner";

export const advancedQuestions: Question[] = [
  // ==========================
  // Part 1. 단어 (5문제)
  // ==========================

  {
    id: 1,
    category: "단어",
    part: 1,
    question: "彼は約束を（　　　）人です。",
    choices: ["守る", "拾う", "比べる", "壊す"],
    answer: 0,
    explanation: "約束を守る = 약속을 지키다.",
  },

  {
    id: 2,
    category: "단어",
    part: 1,
    question: "この仕事は責任が（　　　）。",
    choices: ["重い", "軽い", "薄い", "深い"],
    answer: 0,
    explanation: "責任が重い = 책임이 무겁다.",
  },

  {
    id: 3,
    category: "단어",
    part: 1,
    question: "会議は予定どおり（　　　）した。",
    choices: ["終了", "発表", "決定", "経験"],
    answer: 0,
    explanation: "終了する = 종료하다.",
  },

  {
    id: 4,
    category: "단어",
    part: 1,
    question: "この辺りは交通が（　　　）です。",
    choices: ["便利", "自由", "有名", "安全"],
    answer: 0,
    explanation: "交通が便利 = 교통이 편리하다.",
  },

  {
    id: 5,
    category: "단어",
    part: 1,
    question: "彼の説明はとても（　　　）。",
    choices: ["具体的", "危険", "簡単", "苦手"],
    answer: 0,
    explanation: "具体的 = 구체적이다.",
  },

  // ==========================
  // Part 2. 문법 (5문제)
  // ==========================

  {
    id: 6,
    category: "문법",
    part: 2,
    question: "時間があれば映画を見に（　　　）。",
    choices: ["行こう", "行く", "行った", "行けば"],
    answer: 0,
    explanation: "～う(의지형) = ~하자.",
  },

  {
    id: 7,
    category: "문법",
    part: 2,
    question: "日本へ来てから寿司が好きに（　　　）。",
    choices: ["なった", "した", "あった", "いる"],
    answer: 0,
    explanation: "好きになる = 좋아하게 되다.",
  },

  {
    id: 8,
    category: "문법",
    part: 2,
    question: "この本は読む（　　　）がある。",
    choices: ["価値", "予定", "必要", "場所"],
    answer: 0,
    explanation: "～価値がある = ~할 가치가 있다.",
  },

  {
    id: 9,
    category: "문법",
    part: 2,
    question: "雨が降る（　　　）ので傘を持って行こう。",
    choices: ["らしい", "ほど", "ように", "ばかり"],
    answer: 0,
    explanation: "～らしい = ~인 것 같다.",
  },

  {
    id: 10,
    category: "문법",
    part: 2,
    question: "宿題を終える（　　　）遊びに行った。",
    choices: ["と", "や", "まで", "しか"],
    answer: 0,
    explanation: "～と = ~하자마자.",
  },
  // ==========================
  // Part 3. 회화 (5문제)
  // ==========================

  {
    id: 11,
    category: "회화",
    part: 3,
    question: "A : 明日の会議ですが、午後2時からでよろしいでしょうか。\nB : （　　　）",
    choices: [
      "はい、その時間でお願いします。",
      "いいえ、昨日でした。",
      "私は学生です。",
      "毎日運動しています。"
    ],
    answer: 0,
    explanation: "회의 시간에 대한 자연스러운 응답이다.",
  },

  {
    id: 12,
    category: "회화",
    part: 3,
    question: "A : レポートはもう提出しましたか。\nB : （　　　）",
    choices: [
      "はい、昨日提出しました。",
      "今日は雨ですね。",
      "先生は優しいです。",
      "来月旅行します。"
    ],
    answer: 0,
    explanation: "提出しました = 제출했습니다.",
  },

  {
    id: 13,
    category: "회화",
    part: 3,
    question: "A : 最近仕事はどうですか。\nB : （　　　）",
    choices: [
      "忙しいですが、頑張っています。",
      "電車で来ました。",
      "本を三冊買いました。",
      "昨日ケーキを食べました。"
    ],
    answer: 0,
    explanation: "질문에 맞는 자연스러운 대답.",
  },

  {
    id: 14,
    category: "회화",
    part: 3,
    question: "A : お待たせしました。\nB : （　　　）",
    choices: [
      "いえ、大丈夫です。",
      "今日は寒いです。",
      "私は会社員です。",
      "毎日勉強します。"
    ],
    answer: 0,
    explanation: "상대를 배려하는 표현.",
  },

  {
    id: 15,
    category: "회화",
    part: 3,
    question: "A : この資料、コピーしてもらえますか。\nB : （　　　）",
    choices: [
      "かしこまりました。",
      "お疲れ様でした。",
      "おめでとうございます。",
      "失礼しました。"
    ],
    answer: 0,
    explanation: "업무 상황에서의 정중한 응답.",
  },

  // ==========================
  // Part 4. 독해 (5문제)
  // ==========================

  {
    id: 16,
    category: "독해",
    part: 4,
    question:
      "図書館は午後6時まで利用できます。ただし土曜日は午後4時までです。\n土曜日は何時まで利用できますか。",
    choices: [
      "午後4時まで",
      "午後5時まで",
      "午後6時まで",
      "午後7時まで"
    ],
    answer: 0,
    explanation: "토요일은 오후 4시까지 이용 가능.",
  },

  {
    id: 17,
    category: "독해",
    part: 4,
    question:
      "この店では5000円以上買うと送料が無料になります。\n送料が無料になる条件は？",
    choices: [
      "5000円以上買う",
      "現金で払う",
      "朝に行く",
      "会員になる"
    ],
    answer: 0,
    explanation: "5000엔 이상 구매 시 무료배송.",
  },

  {
    id: 18,
    category: "독해",
    part: 4,
    question:
      "来週の月曜日は祝日のため会社は休みです。\n会社はいつ休みですか。",
    choices: [
      "来週の月曜日",
      "今週の日曜日",
      "来週の火曜日",
      "毎週月曜日"
    ],
    answer: 0,
    explanation: "다음 주 월요일이 휴무.",
  },

  {
    id: 19,
    category: "독해",
    part: 4,
    question:
      "会議は予定より30分早く始まります。\n会議はどうなりますか。",
    choices: [
      "30分早く始まる",
      "30分遅く始まる",
      "予定どおり始まる",
      "中止になる"
    ],
    answer: 0,
    explanation: "예정보다 30분 일찍 시작.",
  },

  {
    id: 20,
    category: "독해",
    part: 4,
    question:
      "雨の場合、イベントは体育館で行います。\n雨の日はどこで行いますか。",
    choices: [
      "体育館",
      "公園",
      "駅前",
      "学校"
    ],
    answer: 0,
    explanation: "비가 오면 체육관에서 진행.",
  },
];