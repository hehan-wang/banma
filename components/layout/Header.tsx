"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Default icon for menu items
const DEFAULT_ICON = "/icons/default.svg"

// Define menu items
const menuItems = {
  courses: [
    {
      icon: "/icons/course1.svg",
      name: '课程 1',
      href: '/courses/1',
      description: "课程 1 的详细描述",
      tag: "热门"
    },
    {
      icon: DEFAULT_ICON,
      name: '课程 2',
      href: '/courses/2',
      description: "课程 2 的详细描述"
    },
    // Add more courses as needed
  ],
  products: [
    {
      icon: "/icons/product1.svg",
      name: "庖丁解文",
      description: "专业知识 AI 问答助手",
      href: "/products/1",
      tag: "扫描即用"
    },
    {
      icon: "/icons/product2.svg",
      name: "PDFlux",
      description: "PDF 数据提取神器",
      href: "/products/2",
      tag: "扫描即用"
    },
    // Add more products as needed
  ],
  solutions: [
    {
      icon: "/icons/solution1.svg",
      name: '解决方案 1',
      href: '/solutions/1',
      description: "解决方案 1 的详细描述",
      tag: "推荐"
    },
    {
      icon: DEFAULT_ICON,
      name: '解决方案 2',
      href: '/solutions/2', 
      description: "解决方案 2 的详细描述",
      tag: "推荐"
    },
    // Add more solutions as needed
  ],
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  // Helper function to render menu dropdown
  const renderMenuDropdown = (items: Array<{
    icon: string
    name: string
    href: string
    description: string
    tag?: string
  }>) => (
    <div className="absolute top-full left-0 w-[480px] bg-white shadow-lg rounded-lg py-4 mt-1 z-50">
      <div className="grid grid-cols-2 gap-2 p-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 mr-4">
              <Image
                src={item.icon || DEFAULT_ICON}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                {item.tag && (
                  <span className="ml-2 px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">
                    {item.tag}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
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

            <div className="relative group">
              <button
                onClick={() => setOpenMenu(openMenu === 'products' ? null : 'products')}
                className="text-gray-600 hover:text-gray-900 py-2"
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