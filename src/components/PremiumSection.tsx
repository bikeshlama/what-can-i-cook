
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface PricingFeature {
  name: string;
  free: boolean;
  premium: boolean;
}

const features: PricingFeature[] = [
  { name: 'Basic recipe search', free: true, premium: true },
  { name: 'Save recipes', free: true, premium: true },
  { name: 'Number of saved recipes', free: false, premium: true },
  { name: 'Personalized meal plans', free: false, premium: true },
  { name: 'Smart grocery list', free: false, premium: true },
  { name: 'Ad-free experience', free: false, premium: true },
  { name: 'AI cooking assistant', free: false, premium: true },
  { name: 'Recipe modification tools', free: false, premium: true },
  { name: 'Nutritional information', free: false, premium: true },
];

const PremiumSection = () => {
  return (
    <section id="premium" className="py-16 bg-recipe-beige">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Choose Your <span className="text-recipe-orange">Plan</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Unlock premium features to enhance your cooking experience
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            <thead>
              <tr>
                <th className="py-6 px-4 text-left text-gray-500 font-normal border-b"></th>
                <th className="py-6 px-4 text-center border-b">
                  <div className="font-bold text-xl">Free</div>
                  <div className="text-gray-500">$0/month</div>
                </th>
                <th className="py-6 px-4 text-center border-b bg-recipe-orange/5">
                  <div className="font-bold text-xl text-recipe-orange">Premium</div>
                  <div className="text-gray-500">$4.99/month</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="py-4 px-4 border-b">{feature.name}</td>
                  <td className="py-4 px-4 text-center border-b">
                    {feature.name === 'Number of saved recipes' ? 
                      <span className="text-sm text-gray-500">Up to 5</span> : 
                      feature.free ? 
                        <Check className="inline text-recipe-green" size={20} /> : 
                        <X className="inline text-gray-400" size={20} />
                    }
                  </td>
                  <td className="py-4 px-4 text-center border-b bg-recipe-orange/5">
                    {feature.name === 'Number of saved recipes' ? 
                      <span className="text-sm text-gray-700">Unlimited</span> : 
                      feature.premium ? 
                        <Check className="inline text-recipe-green" size={20} /> : 
                        <X className="inline text-gray-400" size={20} />
                    }
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-4 px-4"></td>
                <td className="py-6 px-4 text-center">
                  <Button variant="outline" className="w-full">Current Plan</Button>
                </td>
                <td className="py-6 px-4 text-center bg-recipe-orange/5">
                  <Button className="btn-primary w-full">Upgrade to Premium</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PremiumSection;
