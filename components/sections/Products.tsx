// components/sections/Products.tsx
'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const products = [
  {
    title: '问问AI',
    description: '支持 ChatGPT、Midjourney、Dall-e-3 等主流模型，解决网络问题，直接稳定访问',
    image: '/images/products/ai.png',
  },
  {
    title: '问问Agent',
    description: '基于大模型+RAG+画布编排，快速构建和部署AI应用，可视化配置界面',
    image: '/images/products/agent.png',
  },
  {
    title: '问问API',
    description: '集成主流AI模型接口，支持 ChatGPT、Gemini 等语言模型及 Dall-e、Midjourney 等图像模型',
    image: '/images/products/api.png',
  }
]

export default function Products() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">智能体，智启未来</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <button
                  onClick={() => setSelectedImage(product.image)}
                  className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="放大图片"
                >
                  <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog 
        open={!!selectedImage} 
        onClose={() => setSelectedImage(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-start justify-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <Dialog.Panel className="relative my-8 w-full max-w-3xl bg-white rounded-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-5 right-5 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white hover:text-gray-300 transition-colors"
            >
              关闭
            </button>
            {selectedImage && (
              <div className="w-full">
                <Image
                  src={selectedImage}
                  alt="放大图片"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  )
}