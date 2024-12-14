import fs from 'fs'
import path from 'path'
import Image from 'next/image'

// Move this inside the component
function getCustomerImages() {
  try {
    const directory = path.join(process.cwd(), 'public/images/customers')
    const filenames = fs.readdirSync(directory)
    
    return filenames.map(filename => {
      const name = filename.replace(/\.[^/.]+$/, '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      return {
        name,
        logo: `/images/customers/${filename}`,
        alt: `${name} logo`
      }
    })
  } catch (error) {
    console.warn('Error reading customer images:', error)
    return []
  }
}

export default function Customers() {
  // Get customers directly in component
  const customers = getCustomerImages()

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">服务客户</h2>
          <p className="mt-4 text-xl text-gray-600">
            被众多行业领军企业选择和信赖
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {customers?.map((customer, index) => (
              <div 
                key={index}
                className="flex justify-center items-center col-span-1 p-8"
              >
                <div className="relative h-12 w-full">
                  <Image
                    src={customer.logo}
                    alt={customer.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
