'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

type Customer = {
  name: string
  logo: string
  alt: string
}

interface CustomersProps {
  customers: Customer[]
}

export default function Customers({ customers }: CustomersProps) {
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
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {customers?.map((customer, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center p-4">
                  <div className="relative h-10 w-full">
                    <Image
                      src={customer.logo}
                      alt={customer.alt}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}