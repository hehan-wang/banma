// import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 - 云鹤未来',
  description: '了解云鹤未来 - 专业的AI文档智能解决方案提供商',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            用AI重新定义文档智能
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们致力于通过人工智能技术，为企业提供智能、高效的文档处理解决方案
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            公司简介
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-600">
            <p>
              云鹤未来成立于2022年，是一家专注于AI文档智能领域的科技公司。我们汇聚了来自人工智能、软件工程等领域的顶尖人才，致力于将最前沿的AI技术应用于文档处理领域。
            </p>
            <p>
              通过持续的技术创新和产品优化，我们为金融、政务、企业等领域的客户提供智能化的文档处理解决方案，帮助客户实现效率提升和数字化转型。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            企业使命
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '愿景', content: '成为全球领先的AI文档智能解决方案提供商' },
              { title: '使命', content: '用AI技术重新定义文档处理方式，提升企业效率' },
              { title: '价值观', content: '创新、专注、协作、正直' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            发展历程
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              { year: '2022', title: '公司成立', content: '云鹤未来在北京正式成立' },
              { year: '2023', title: '产品发布', content: '首个AI文档智能产品正式发布' },
              { year: '2024', title: '快速发展', content: '服务客户超过100家，持续技术创新' },
            ].map((item, index) => (
              <div key={item.year} className="relative pb-12 last:pb-0">
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                    {index !== 2 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-4" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            联系方式
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: '公司地址', content: '北京市海淀区科技园区' },
              { title: '联系电话', content: '400-XXX-XXXX' },
              { title: '电子邮箱', content: 'contact@example.com' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}