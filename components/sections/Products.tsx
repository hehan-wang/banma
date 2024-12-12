// components/sections/Products.tsx
import Image from 'next/image'

const products = [
  {
    title: '庖丁解文',
    description: '专业知识 AI 问答助手',
    image: '/product1.png',
  },
  // Add more products...
]

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">海量信息，精确抽取</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
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