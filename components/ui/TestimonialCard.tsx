import Image from 'next/image';
import { cn } from '@/lib/utils';

type TestimonialCardProps = {
  quote: string;
  author: string;
  title: string;
  avatar: string;
  className?: string;
};

export const TestimonialCard = ({
  quote,
  author,
  title,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div className="mb-4">
        <svg 
          className="h-8 w-8 text-blue-400 opacity-30 absolute top-4 right-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-700 leading-relaxed">{quote}</p>
      </div>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-3">
          <Image
            className="h-10 w-10 rounded-full object-cover"
            src={avatar}
            alt={author}
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}; 