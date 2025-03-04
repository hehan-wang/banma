import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "斑码云 - 高效易用的AI算力云平台",
  description: "为AI开发者和企业提供稳定、高性能、低成本的算力解决方案，加速您的AI模型训练与推理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">产品</h3>
                <ul className="space-y-2">
                  <li><a href="/products" className="text-gray-400 hover:text-gray-300">GPU实例</a></li>
                  <li><a href="/products/inference" className="text-gray-400 hover:text-gray-300">模型推理</a></li>
                  <li><a href="/products/training" className="text-gray-400 hover:text-gray-300">模型训练</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">解决方案</h3>
                <ul className="space-y-2">
                  <li><a href="/solutions/training" className="text-gray-400 hover:text-gray-300">大规模模型训练</a></li>
                  <li><a href="/solutions/inference" className="text-gray-400 hover:text-gray-300">高效推理服务</a></li>
                  <li><a href="/solutions/saas" className="text-gray-400 hover:text-gray-300">AI应用SaaS部署</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">资源</h3>
                <ul className="space-y-2">
                  <li><a href="/docs" className="text-gray-400 hover:text-gray-300">技术文档</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-gray-300">博客</a></li>
                  <li><a href="/support" className="text-gray-400 hover:text-gray-300">帮助中心</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">公司</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-gray-400 hover:text-gray-300">关于我们</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-gray-300">联系我们</a></li>
                  <li><a href="/careers" className="text-gray-400 hover:text-gray-300">加入我们</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>© {new Date().getFullYear()} 斑码云. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
