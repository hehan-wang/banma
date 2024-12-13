import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              课程
            </Link>
            <Link href="/#products" className="text-gray-600 hover:text-gray-900">
              产品
            </Link>
            <Link href="/#solutions" className="text-gray-600 hover:text-gray-900">
              解决方案
            </Link>
            <Link href="/about" className="text-gray-900 font-medium">
              关于我们
            </Link> {/* This link now correctly points to the About page */}
            <Link
              href="/contact"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}