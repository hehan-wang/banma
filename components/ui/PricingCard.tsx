import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type PricingCardProps = {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  className?: string;
};

export const PricingCard = ({
  title,
  price,
  unit,
  description,
  features,
  cta,
  ctaLink,
  popular = false,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl border p-6 h-full flex flex-col bg-white transition-all duration-300",
        popular
          ? "shadow-lg border-blue-200 scale-[1.02] z-10"
          : "shadow-sm border-gray-200 hover:shadow",
        className
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-full">
          推荐
        </span>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-2">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="ml-1 text-gray-600">{unit}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg 
              className="h-5 w-5 text-green-500 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <Button
        variant={popular ? "primary" : "secondary"}
        href={ctaLink}
        className="w-full"
      >
        {cta}
      </Button>
    </div>
  );
}; 