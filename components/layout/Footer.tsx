export default function Footer() {
  return (
    <footer className="py-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-600">
          <p>
            Copyright © 2022-2024{' '}
            <a 
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              京ICP备2023011593号-1
            </a>
            {' '}All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
