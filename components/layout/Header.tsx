"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Default icon for menu items
const DEFAULT_ICON = "/icons/default.svg"

// Define menu item interface
interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  url: string;
  tag?: string;
}

// Define menu items
const menuItems = {
  courses: [
    {
      id: "course-1",
      title: "《小白的AI编程提效课》",
      description: "专为编程新手打造的AI辅助开发课程",
      image: "/images/courses/ai-programming.png",
      url: "https://www.xiaobot.net/p/chatai666?refer=e5248818-dc47-4062-86a7-73cc0336dd63",
      tag: "热门"
    },
    {
      id: "course-2", 
      title: "《AI自动化爆款训练营》",
      description: "深入学习AI自动化技术，掌握创建工作流",
      image: "/images/courses/ai-automation.png",
      url: "https://l0lupq5bcjq.feishu.cn/docx/Nue8dP3eVoVvAYxWdWvcNijnnNf",
      tag: "新课"
    },
    {
      id: "course-3",
      title: "《斑码合伙人》",
      description: "探索技术创业与合作机遇",
      image: "/images/courses/business-partner.png",
      url: "https://l0lupq5bcjq.feishu.cn/docx/KYBPd25Mko5eVQxjPo6cYnBMnEc",
      tag: "推荐"
    }
  ],
  products: [
    {
      id: 'product-1',
      title: '问问AI',
      description: '支持 ChatGPT、Midjourney、Dall-e-3 等主流模型，解决网络问题，直接稳定访问',
      image: '/images/products/wenwen-ai.png',
      icon: '/icons/wenwen.svg',
      url: 'https://chat.wenwen-ai.com/',
      tag: '立即体验'
    },
    {
      id: 'product-2',
      title: '问问Agent', 
      description: '基于大模型+RAG+画布编排，快速构建和部署AI应用，可视化配置界面',
      image: '/images/products/wenwen-agent.png',
      icon: '/icons/wenwen.svg',
      url: 'https://app.wenwen-ai.com/',
      tag: '新品上线'
    },
    {
      id: 'product-3',
      title: '问问API',
      description: '多模型API集成',
      image: '/images/products/wenwen-api.png',
      icon: '/icons/wenwen.svg',
      url: 'https://key.wenwen-ai.com/',
      tag: '开放接入'
    },
    {
      id: 'product-4',
      title: '问问Bot',
      description: '微信智能问答机器人',
      image: '/images/products/wenwen-bot.png',
      icon: '/icons/wenwen.svg',
      url: 'https://ei3yj6pays9.feishu.cn/wiki/FJC1wT4QUiPc8Tkth5icrNy8nNe',
      tag: '新品上线'
    }
  ],
  solutions: [
    {
      id: 'solution-1',
      title: 'AI智能客服',
      description: '基于RAG技术的智能客服机器人，提供全天候高效服务，解决率达80%',
      image: '/images/solutions/customer-service.png',
      url: 'https://ei3yj6pays9.feishu.cn/wiki/FJC1wT4QUiPc8Tkth5icrNy8nNe',
      tag: "推荐"
    },
    {
      id: 'solution-2', 
      title: 'AI智能营销',
      description: '智能营销解决方案，提供个性化推荐和自动化营销，ROI提升2倍',
      image: '/images/solutions/marketing.png',
      url: 'https://edo504m8t9.feishu.cn/docx/V5LddVDeAojaVUxztyfcqc4inse?from=from_copylink',
      tag: "热门"
    },
    {
      id: 'solution-3',
      title: 'AI标书生成',
      description: '智能文档生成系统，自动化标书制作流程，时间节省50%',
      image: '/images/solutions/document.png',
      url: 'https://l0lupq5bcjq.feishu.cn/wiki/CYkywPwc8i93T7kLdr4cQYihnNe?from=from_copylink',
      tag: "新品"
    }
  ],
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  // Helper function to render menu dropdown
  const renderMenuDropdown = (items: ContentItem[]) => (
    <div className="absolute top-full left-0 w-[480px] bg-white shadow-lg rounded-lg py-4 mt-1 z-50">
      <div className="grid gap-2 p-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`flex-shrink-0 mr-4 ${item.icon ? 'w-8 h-8 flex items-center justify-center' : 'w-24 h-16 relative'}`}>
              <Image
                src={item.icon || item.image || DEFAULT_ICON}
                alt={item.title}
                width={item.icon ? 24 : 96}
                height={item.icon ? 24 : 64}
                className={item.icon ? 'w-6 h-6 object-contain' : 'object-cover rounded w-full h-full'}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
                {item.tag && (
                  <span className="flex-shrink-0 px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              <span className="mt-2 inline-block text-sm text-blue-600 font-medium">
                了解更多 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex space-x-8 items-center">
            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === 'courses' ? null : 'courses')}
                className="text-gray-600 hover:text-gray-900"
              >
                课程
              </button>
              {openMenu === 'courses' && renderMenuDropdown(menuItems.courses)}
            </div>

            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
                className="text-gray-600 hover:text-gray-900"
              >
                产品
              </button>
              {openMenu === 'products' && renderMenuDropdown(menuItems.products)}
            </div>

            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
                className="text-gray-600 hover:text-gray-900"
              >
                解决方案
              </button>
              {openMenu === 'solutions' && renderMenuDropdown(menuItems.solutions)}
            </div>

            <Link href="/about" className="text-gray-900 font-medium">
              关于我们
            </Link>
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}