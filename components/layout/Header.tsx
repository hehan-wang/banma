// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {['课程','产品', '解决方案', '客户案例', '关于我们'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              联系我们
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">打开菜单</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-2 space-y-1">
            {['产品', '解决方案', '客户案例', '关于我们'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}