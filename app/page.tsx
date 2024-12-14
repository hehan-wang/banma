import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Solutions from '@/components/sections/Solutions'
import Customers from '@/components/sections/Customers'
import Courses from '@/components/sections/Courses'
import { getCustomerImages } from '@/components/sections/CustomersData'

export default async function Home() {
  const customers = await getCustomerImages()
  
  return (
    <main>
      <Hero />
      <Courses />
      <Products />
      <Solutions />
      <Customers customers={customers} />
    </main>
  )
}
