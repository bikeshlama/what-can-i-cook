
import { Button } from '@/components/ui/button';
import { CreditCard, CheckCircle2, Crown } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface SubscriptionSectionProps {
  isPremium: boolean;
  fullView?: boolean;
}

const SubscriptionSection = ({ isPremium, fullView = false }: SubscriptionSectionProps) => {
  return (
    <section className={`bg-white rounded-xl shadow-sm p-6 ${fullView ? '' : 'mb-8'}`}>
      <div className="flex items-center mb-4">
        <CreditCard className="text-recipe-orange mr-2" />
        <h2 className="text-xl font-bold">Subscription</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className={`border-2 ${!isPremium ? 'border-recipe-orange' : 'border-gray-200'}`}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span>Free Plan</span>
              {!isPremium && (
                <span className="ml-2 text-xs bg-recipe-orange text-white px-2 py-1 rounded-full">
                  Current Plan
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Search recipes by ingredients</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Limited recipe saves (up to 10)</span>
              </li>
              <li className="flex items-start opacity-50">
                <CheckCircle2 className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span>Weekly meal planning</span>
              </li>
              <li className="flex items-start opacity-50">
                <CheckCircle2 className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span>Grocery list generation</span>
              </li>
              <li className="flex items-start opacity-50">
                <CheckCircle2 className="h-5 w-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                <span>Ad-free experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            {isPremium && (
              <Button variant="outline" className="w-full">Downgrade</Button>
            )}
          </CardFooter>
        </Card>
        
        <Card className={`border-2 ${isPremium ? 'border-recipe-orange' : 'border-gray-200'}`}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="flex items-center">
                Premium Plan <Crown className="h-4 w-4 text-amber-500 ml-1" />
              </span>
              {isPremium && (
                <span className="ml-2 text-xs bg-recipe-orange text-white px-2 py-1 rounded-full">
                  Current Plan
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <span className="text-3xl font-bold">$5.99</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>All free features</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Unlimited recipe saves</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Weekly meal planning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Grocery list generation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Ad-free experience</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            {!isPremium && (
              <Button className="w-full bg-recipe-orange hover:bg-recipe-orange-dark">
                Upgrade to Premium
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default SubscriptionSection;
