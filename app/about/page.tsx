import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解斑码AI - 专业的AI文档智能解决方案提供商',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            用AI智能体赋能合作伙伴
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们致力于通过人工智能技术，为企业/个人，打造智能、高效的AI智能体解决方案
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
              斑码AI成立于2022年，是一家专注于AI智能体领域的科技公司。我们汇聚了来自人工智能、软件工程等领域的顶尖人才，致力于将最前沿的AI技术应用于智能体开发领域。
            </p>
            <p>
              通过持续的技术创新和产品优化，我们为各行各业的客户提供先进的AI智能体解决方案，帮助客户实现智能化升级和数字化转型。
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            创始团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                name: '华峰',
                title: '联合创始人 & CEO',
                image: '/images/huafeng.png',
                bio: '资深AI领域专家，斑码AI技术社群创始人，拥有超过15年AI领域研发及管理经验。轻竹AI PPT联合创始人，成功打造4000+付费用户的AI产品。《小白的AI编程提效课》作者，课程订阅量超3600人。专注于大模型商业应用落地与行业智能体研发，具有丰富的AI商业化实践经验。'
              },
              {
                name: '王鹤涵',
                title: '联合创始人 & CTO',
                image: '/images/hehan.png',
                bio: '拥有9年大厂技术专家和架构师经验，AI解决方案架构师。FastGPT开源项目核心贡献者，专注于AI智能体和大语言模型应用研发。开发并运营AI工具平台及智能体平台，在AI技术落地和企业应用方面有丰富经验。AI技术公众号"程序员鹤涵"作者。'
              }
            ].map((founder) => (
              <div key={founder.name} className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.title}`}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 192px, 192px"
                    priority
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {founder.title}
                </p>
                <div className="text-gray-600 text-center">
                  <p className="mb-2">{founder.bio}</p>
                  {founder.name === '王鹤涵' && (
                    <p>
                      <a 
                        href="https://www.hehanwang.com/about" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        更多详情访问个人主页
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
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
              { title: '愿景', content: '成为全球领先的AI智能体解决方案提供商' },
              { title: '使命', content: '用AI技术重新定义智能交互方式，创造更智能的未来' },
              { title: '价值观', content: '真诚、利他、共赢、协作' },
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
              { year: '2022', title: '公司成立', content: '斑码AI在北京正式成立' },
              { year: '2023', title: '产品发布', content: '首个AI智能体产品正式发布' },
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
              { title: '公司地址', content: '北京市高碑店四惠东水南庄15号楼1单元' },
              { title: '联系电话', content: '17600108055' },
              { title: '电子邮箱', content: 'hehan2048@gmail.com' },
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