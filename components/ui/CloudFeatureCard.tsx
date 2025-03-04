import Image from 'next/image';
import { cn } from '@/lib/utils';

type CloudFeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  className?: string;
};

export const CloudFeatureCard = ({
  title,
  description,
  icon,
  className,
}: CloudFeatureCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300",
      className
    )}>
      <div className="flex flex-col items-start">
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className="text-blue-600"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}; 