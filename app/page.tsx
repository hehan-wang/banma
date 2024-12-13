import Hero from '@/components/sections/Hero'
import Products from '@/components/sections/Products'
import Solutions from '@/components/sections/Solutions'
import Customers from '@/components/sections/Customers'
import Courses from '@/components/sections/Courses'


export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Products />
      <Solutions />
      <Customers />
    </main>
  )
}
