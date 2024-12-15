"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'

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

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.nav-menu') && !target.closest('.menu-button')) {
        setOpenMenu(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Handle escape key to close menus
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [])

  // Handle resize to reset mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderMenuDropdown = useCallback((items: ContentItem[]) => (
    <div className="absolute top-full left-0 w-full md:w-[480px] bg-white shadow-lg rounded-lg py-4 mt-1 z-50 nav-menu">
      <div className="grid gap-2 p-3">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="flex flex-col md:flex-row items-start p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className={`flex-shrink-0 mb-2 md:mb-0 md:mr-4 ${
              item.icon ? 'w-8 h-8 flex items-center justify-center' : 'w-full md:w-24 h-16 relative'
            }`}>
              <Image
                src={item.icon || item.image || DEFAULT_ICON}
                alt={item.title}
                width={item.icon ? 24 : 96}
                height={item.icon ? 24 : 64}
                className={item.icon ? 'w-6 h-6 object-contain' : 'object-cover rounded w-full h-full'}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
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
  ), [])

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
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="主菜单"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <div
            className={`
              absolute top-16 left-0 right-0 bg-white md:relative md:top-0
              md:flex md:space-x-8 md:items-center
              transition-all duration-200 ease-in-out
              ${isMobileMenuOpen ? 'block' : 'hidden'} md:block
              border-t md:border-t-0
            `}
          >
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 p-4 md:p-0">
              {/* Courses Menu */}
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === 'courses' ? null : 'courses')}
                  className="w-full md:w-auto text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors duration-200 menu-button"
                  aria-expanded={openMenu === 'courses'}
                >
                  课程
                </button>
                {openMenu === 'courses' && renderMenuDropdown(menuItems.courses)}
              </div>

              {/* Products Menu */}
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
                  className="w-full md:w-auto text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors duration-200 menu-button"
                  aria-expanded={openMenu === 'products'}
                >
                  产品
                </button>
                {openMenu === 'products' && renderMenuDropdown(menuItems.products)}
              </div>

              {/* Solutions Menu */}
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === 'solutions' ? null : 'solutions')}
                  className="w-full md:w-auto text-left px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors duration-200 menu-button"
                  aria-expanded={openMenu === 'solutions'}
                >
                  解决方案
                </button>
                {openMenu === 'solutions' && renderMenuDropdown(menuItems.solutions)}
              </div>

              {/* About Link */}
              <Link
                href="/about"
                className="px-4 py-2 text-gray-900 font-medium hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                关于我们
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-center"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}