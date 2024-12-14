'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    title: 'AI智能客服',
    description: '基于RAG技术的智能客服机器人，提供全天候高效服务，显著提升客户满意度',
    image: '/images/solutions/customer-service.png',
    metrics: '解决率达80%'
  },
  {
    title: 'AI智能营销',
    description: '智能营销解决方案，提供个性化推荐和自动化营销，有效提升ROI',
    image: '/images/solutions/marketing.png',
    metrics: 'ROI提升2倍'
  },
  {
    title: 'AI标书生成',
    description: '智能文档生成系统，自动化标书制作流程，大幅提升效率',
    image: '/images/solutions/document.png',
    metrics: '时间节省50%'
  }
]

export default function Solutions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">解决方案</h2>
          <p className="mt-4 text-xl text-gray-600">
            为企业提供全方位的AI智能化解决方案
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 w-full group">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <button
                  onClick={() => setSelectedImage(solution.image)}
                  className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="放大图片"
                >
                  <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="text-blue-600 font-semibold">{solution.metrics}</div>
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
