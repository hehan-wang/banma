import Image from 'next/image'

const solutions = [
  {
    title: '金融行业',
    description: '为金融机构提供智能文档处理解决方案，提升业务效率',
    icon: '/icons/finance.svg'
  },
  {
    title: '政务服务',
    description: '助力政务服务智能化升级，优化市民办事体验',
    icon: '/icons/government.svg'
  },
  {
    title: '医疗健康',
    description: '智能处理医疗文档，提升诊疗效率',
    icon: '/icons/healthcare.svg'
  }
  // Add more solutions as needed
]

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">行业解决方案</h2>
          <p className="mt-4 text-xl text-gray-600">
            为不同行业提供定制化的智能文档解决方案
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="relative p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 mb-4">
                {/* Add proper icon/image here */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
