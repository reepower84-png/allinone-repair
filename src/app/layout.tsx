import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "올인원설비 | 누수·하수구·설비·인테리어 전문",
  description: "합리적인 금액으로 누수·하수구·설비·인테리어 올인원 해결! 전국 어디서나 신속하고 정확한 서비스를 제공합니다.",
  keywords: "누수, 하수구, 설비, 인테리어, 수리, 전국, 올인원, 합리적, 신속",
  openGraph: {
    title: "올인원설비 | 누수·하수구·설비·인테리어 전문",
    description: "합리적인 금액으로 누수·하수구·설비·인테리어 올인원 해결!",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
