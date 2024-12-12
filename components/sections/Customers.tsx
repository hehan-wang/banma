// import Image from 'next/image'

const customers = [
  {
    name: '客户1',
    logo: '/logos/customer1.svg',
    alt: '客户1 logo'
  },
  {
    name: '客户2',
    logo: '/logos/customer2.svg',
    alt: '客户2 logo'
  },
  // Add more customers as needed
]

export default function Customers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">信任与口碑</h2>
          <p className="mt-4 text-xl text-gray-600">
            被众多行业领军企业选择和信赖
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {customers.map((customer, index) => (
              <div 
                key={index}
                className="flex justify-center items-center col-span-1 p-8"
              >
                <div className="relative h-12 w-full">
                  {/* 
                    Add actual customer logos here
                    <Image
                      src={customer.logo}
                      alt={customer.alt}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  */}
                  <div className="w-full h-full bg-gray-200 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Add testimonials section */}
        <div className="mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">客户评价</h3>
          </div>
          {/* Add testimonials cards here if needed */}
        </div>
      </div>
    </section>
  )
}
