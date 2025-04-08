
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  highlighted?: boolean;
}

const FreeTier: PricingFeature[] = [
  { name: 'Basic recipe search', included: true },
  { name: 'Save up to 5 recipes', included: true },
  { name: 'Contains advertisements', included: true },
  { name: 'Weekly meal plans', included: false },
  { name: 'Grocery list generator', included: false },
  { name: 'Smart pantry tracker', included: false },
  { name: 'Nutrition info & dietary filters', included: false },
  { name: 'Exclusive recipes', included: false },
  { name: 'AI cooking assistant', included: false },
];

const PremiumTier: PricingFeature[] = [
  { name: 'Advanced recipe search', included: true },
  { name: 'Save unlimited recipes', included: true },
  { name: 'Ad-free experience', included: true },
  { name: 'Weekly meal plans', included: true },
  { name: 'Grocery list generator', included: true },
  { name: 'Smart pantry tracker', included: true },
  { name: 'Nutrition info & dietary filters', included: true },
  { name: 'Exclusive recipes', included: true },
  { name: 'AI cooking assistant', included: true },
];

const PricingTier = ({ name, price, description, features, buttonText, highlighted = false }: PricingTierProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col ${highlighted ? 'border-2 border-recipe-orange relative' : ''}`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-recipe-orange text-white px-4 py-1 rounded-full text-sm font-bold">
          Recommended
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <div className="mb-4">
        <span className={`text-3xl font-bold ${highlighted ? 'text-recipe-orange' : ''}`}>{price}</span>
        {price !== 'Free' && <span className="text-gray-500">/month</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check size={20} className="text-recipe-green flex-shrink-0 mr-2" />
            ) : (
              <X size={20} className="text-gray-400 flex-shrink-0 mr-2" />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full py-6 ${highlighted ? 'btn-primary' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-recipe-beige">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Choose Your <span className="text-recipe-orange">Plan</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Get access to premium features that help you cook smarter, save time, and discover new recipes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingTier 
            name="Free"
            price="Free"
            description="Basic recipe search with limited features"
            features={FreeTier}
            buttonText="Current Plan"
          />
          
          <PricingTier 
            name="Premium"
            price="$4.99"
            description="Unlock all features for the ultimate cooking experience"
            features={PremiumTier}
            buttonText="Upgrade to Premium"
            highlighted
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
