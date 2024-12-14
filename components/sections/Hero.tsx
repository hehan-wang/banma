// components/sections/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCallback } from 'react'
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import type { Container, Engine } from "tsparticles-engine"
import Link from 'next/link'

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* 深色叠加层 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70 mix-blend-multiply" />
      </div>

      {/* Particles effect */}
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            opacity: {
              value: 0.3,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              }
            }
          },
          background: {
            opacity: 0
          }
        }}
      />

      {/* 装饰元素 - 渐变光晕 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            用
            <span className="bg-gradient-to-r from-indigo-500/40 to-blue-500/40 px-1 rounded">
              AI智能体
            </span>
            赋能合作伙伴
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            致力于通过人工智能技术，为企业/个人，打造智能、高效的AI智能体解决方案
          </p>
          <motion.div 
            className="mt-8 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              联系我们
            </Link>
            <a 
              href="https://app.wenwen-ai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-blue-600 rounded-lg font-medium border border-blue-100 hover:shadow-lg transition-shadow"
            >
              了解更多
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}