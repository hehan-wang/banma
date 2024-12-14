// components/sections/Products.tsx
import Image from 'next/image'

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
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}