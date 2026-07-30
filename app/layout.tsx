import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HARU NIHONGO LAB | 일본어 1:1 맞춤 수업",
  description:
    "Tutor HARU와 함께하는 일본어 1:1 맞춤 수업. JLPT, 회화, 여행 일본어까지 목표에 맞춘 커리큘럼을 제공합니다.",

  keywords: [
    "일본어 과외",
    "일본어 회화",
    "JLPT",
    "일본어 온라인 수업",
    "HARU NIHONGO LAB",
  ],

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "HARU NIHONGO LAB | 일본어 1:1 맞춤 수업",
    description:
      "일본어 회화부터 JLPT까지 Tutor HARU와 함께하는 맞춤 일본어 수업",
    url: "https://www.harunihongolab.site",
    siteName: "HARU NIHONGO LAB",
    locale: "ko_KR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">

      <body>
        {children}
      </body>

    </html>
  );
}