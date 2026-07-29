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

export const intermediateQuestions: Question[] = [

  // =========================
  // Part 1 : 단어 (N4)
  // =========================

  {
    id: 1,
    category: "단어",
    part: 1,
    question: "約束",
    furigana: "やくそく",
    choices: [
      "약속",
      "계획",
      "공부",
      "회의",
    ],
    answer: 0,
    explanation: "約束는 '약속'이라는 뜻입니다.",
  },

  {
    id: 2,
    category: "단어",
    part: 1,
    question: "残業",
    furigana: "ざんぎょう",
    choices: [
      "출장",
      "야근",
      "휴가",
      "회의",
    ],
    answer: 1,
    explanation: "残業는 '야근'이라는 뜻입니다.",
  },

  {
    id: 3,
    category: "단어",
    part: 1,
    question: "受付",
    furigana: "うけつけ",
    choices: [
      "안내 데스크",
      "계단",
      "엘리베이터",
      "창문",
    ],
    answer: 0,
    explanation: "受付는 접수처, 안내 데스크를 의미합니다.",
  },

  {
    id: 4,
    category: "단어",
    part: 1,
    question: "最近",
    furigana: "さいきん",
    choices: [
      "예전",
      "최근",
      "내일",
      "아침",
    ],
    answer: 1,
    explanation: "最近은 '최근'이라는 뜻입니다.",
  },

  {
    id: 5,
    category: "단어",
    part: 1,
    question: "途中",
    furigana: "とちゅう",
    choices: [
      "도착",
      "출발",
      "도중",
      "종료",
    ],
    answer: 2,
    explanation: "途中는 '도중'이라는 뜻입니다.",
  },  // =========================
  // Part 2 : 문법 (N4)
  // =========================

  {
    id: 6,
    category: "문법",
    part: 2,
    question: "毎日、日本語を（　　　）います。",
    choices: [
      "勉強し",
      "勉強して",
      "勉強する",
      "勉強",
    ],
    answer: 1,
    explanation: "「～ています」는 현재 계속되는 동작이나 습관을 나타냅니다.",
  },

  {
    id: 7,
    category: "문법",
    part: 2,
    question: "今日は雨ですから、傘を（　　　）ほうがいいです。",
    choices: [
      "持つ",
      "持って",
      "持ち",
      "持った",
    ],
    answer: 3,
    explanation: "「～たほうがいいです」는 '~하는 것이 좋습니다'라는 표현입니다.",
  },

  {
    id: 8,
    category: "문법",
    part: 2,
    question: "私は京都へ二回（　　　）ことがあります。",
    choices: [
      "行く",
      "行き",
      "行った",
      "行って",
    ],
    answer: 2,
    explanation: "경험을 나타낼 때는 「～たことがあります」를 사용합니다.",
  },

  {
    id: 9,
    category: "문법",
    part: 2,
    question: "時間がありませんから、急いで駅へ（　　　）。",
    choices: [
      "行かなければなりません",
      "行ってもいいです",
      "行きたいです",
      "行くでしょう",
    ],
    answer: 0,
    explanation: "「～なければなりません」는 '~해야 합니다'라는 의미입니다.",
  },

  {
    id: 10,
    category: "문법",
    part: 2,
    question: "田中さんは来ない（　　　）思います。",
    choices: [
      "を",
      "が",
      "と",
      "で",
    ],
    answer: 2,
    explanation: "의견을 말할 때는 「～と思います」를 사용합니다.",
  },  // =========================
  // Part 3 : 회화 (N4)
  // =========================

  {
    id: 11,
    category: "회화",
    part: 3,
    question: "A : 明日の飲み会に行きますか。\nB : すみません。仕事があるので（　　　）。",
    choices: [
      "行きます",
      "行けません",
      "行きましょう",
      "行っています",
    ],
    answer: 1,
    explanation: "일이 있어서 갈 수 없다는 상황이므로 「行けません」가 가장 자연스럽습니다.",
  },

  {
    id: 12,
    category: "회화",
    part: 3,
    question: "A : この漢字が読めません。\nB : じゃあ、私が（　　　）。",
    choices: [
      "読みます",
      "読めます",
      "読んでいます",
      "読ませます",
    ],
    answer: 0,
    explanation: "상대를 도와 '제가 읽어드릴게요.'라는 의미이므로 「読みます」가 맞습니다.",
  },

  {
    id: 13,
    category: "회화",
    part: 3,
    question: "A : 日本の生活はどうですか。\nB : 最初は大変でしたが、今は（　　　）。",
    choices: [
      "慣れました",
      "覚えました",
      "忘れました",
      "止めました",
    ],
    answer: 0,
    explanation: "생활에 익숙해졌다는 의미의 「慣れました」가 정답입니다.",
  },

  {
    id: 14,
    category: "회화",
    part: 3,
    question: "A : すみません、この近くに銀行がありますか。\nB : はい。この道をまっすぐ行くと、右に（　　　）。",
    choices: [
      "あります",
      "います",
      "なります",
      "行きます",
    ],
    answer: 0,
    explanation: "건물의 존재를 나타낼 때는 「あります」를 사용합니다.",
  },

  {
    id: 15,
    category: "회화",
    part: 3,
    question: "A : お待たせしました。\nB : （　　　）。",
    choices: [
      "こちらこそ",
      "気にしないでください",
      "ありがとうございます",
      "いただきます",
    ],
    answer: 1,
    explanation: "상대가 기다리게 해서 미안하다고 할 때는 「気にしないでください」가 자연스럽습니다.",
  },  // =========================
  // Part 4 : 독해 (N4)
  // =========================

  {
    id: 16,
    category: "독해",
    part: 4,
    question:
      "山田さんは毎朝７時に家を出ます。会社まで電車で３０分かかります。今日は電車が１０分遅れました。\n\n山田さんはどうなりましたか。",
    choices: [
      "会社に１０分早く着きました。",
      "会社に１０分遅れて着きました。",
      "家を１０分遅く出ました。",
      "今日は会社へ行きませんでした。",
    ],
    answer: 1,
    explanation: "전철이 10분 늦었으므로 회사에도 10분 늦게 도착했습니다.",
  },

  {
    id: 17,
    category: "독해",
    part: 4,
    question:
      "スーパーのお知らせ\n\n本日は午後８時まで営業します。\n明日は店内点検のため休みです。\n\n正しいものはどれですか。",
    choices: [
      "今日は休みです。",
      "今日は午後８時まで営業します。",
      "明日は午後８時まで営業します。",
      "明日は午前だけ営業します。",
    ],
    answer: 1,
    explanation: "오늘은 오후 8시까지 영업하며 내일은 휴무입니다.",
  },

  {
    id: 18,
    category: "독해",
    part: 4,
    question:
      "田中さんは毎週土曜日にテニスをします。でも今週は雨なので映画を見に行きます。\n\n今週の土曜日、田中さんは何をしますか。",
    choices: [
      "テニスをします。",
      "映画を見ます。",
      "買い物をします。",
      "仕事をします。",
    ],
    answer: 1,
    explanation: "비가 와서 이번 주는 영화를 보러 갑니다.",
  },

  {
    id: 19,
    category: "독해",
    part: 4,
    question:
      "図書館は月曜日が休みです。火曜日から日曜日までは午前９時から午後６時まで開いています。\n\n火曜日は何時まで開いていますか。",
    choices: [
      "午後５時",
      "午後６時",
      "午後７時",
      "午後８時",
    ],
    answer: 1,
    explanation: "화요일은 오후 6시까지 이용할 수 있습니다.",
  },

  {
    id: 20,
    category: "독해",
    part: 4,
    question:
      "メール\n\n明日の会議は午前１０時からです。９時５０分までに会議室へ来てください。\n\n正しいものはどれですか。",
    choices: [
      "１０時に来ればいいです。",
      "９時５０分までに来ます。",
      "１１時に会議があります。",
      "会議は午後です。",
    ],
    answer: 1,
    explanation: "회의 시작 전인 9시 50분까지 도착해야 합니다.",
  },

];