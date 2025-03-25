"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { name: '模型', href: 'https://cloud.wenwen-ai.com/model' },
  { name: '定价', href: 'https://cloud.wenwen-ai.com/pricing' },
  { name: '关于我们', href: 'https://www.baidu.com' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://cloud.wenwen-ai.com" className="flex items-center">
            <div className="relative h-8 w-12">
              <Image
                src="/images/logo1.png"
                alt="MCloud Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </div>
            <span className="ml-1 text-xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              斑码云
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 hover:text-primary-600 transition-all duration-300 hover:scale-105 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={isScrolled ? 'secondary' : 'outline'}
              href="https://cloud.wenwen-ai.com/login"
              size="sm"
            >
              登录
            </Button>
            <Button
              variant="primary"
              href="https://cloud.wenwen-ai.com/register"
              size="sm"
            >
              免费注册
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-gray-700' : 'text-white'
              )}
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-300 tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="secondary" href="/login" className="w-full">
                  登录
                </Button>
                <Button variant="primary" href="/register" className="w-full">
                  免费注册
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}