import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "庖丁智能",
  description: "全流程文档智能利器，推动文档工作提质增效",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
