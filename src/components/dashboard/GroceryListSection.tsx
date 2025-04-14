
import { Button } from '@/components/ui/button';
import { List, ChevronRight, Lock, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface GroceryListSectionProps {
  isPremium: boolean;
  fullView?: boolean;
}

// Mock data for grocery list
const mockGroceryItems = [
  { id: 1, name: 'Chicken breast', category: 'Meat & Seafood', checked: false },
  { id: 2, name: 'Spinach', category: 'Produce', checked: true },
  { id: 3, name: 'Bell peppers', category: 'Produce', checked: false },
  { id: 4, name: 'Quinoa', category: 'Grains', checked: false },
  { id: 5, name: 'Olive oil', category: 'Oils & Vinegars', checked: true },
  { id: 6, name: 'Greek yogurt', category: 'Dairy', checked: false },
  { id: 7, name: 'Lemons', category: 'Produce', checked: false },
  { id: 8, name: 'Garlic', category: 'Produce', checked: true },
];

const GroceryListSection = ({ isPremium, fullView = false }: GroceryListSectionProps) => {
  // Group items by category
  const itemsByCategory = mockGroceryItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
  
  // For compact view, limit to 2 categories
  const categories = Object.keys(itemsByCategory);
  const displayedCategories = fullView ? categories : categories.slice(0, 2);
  
  if (!isPremium) {
    return (
      <section className={`bg-white rounded-xl shadow-sm p-6 ${fullView ? '' : 'mb-8'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <List className="text-recipe-orange mr-2" />
            <h2 className="text-xl font-bold">Grocery List</h2>
            <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Premium</span>
          </div>
        </div>
        
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Lock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-600">Premium Feature</h3>
          <p className="text-gray-500 mt-1 max-w-md mx-auto">
            Upgrade to premium to generate grocery lists based on your meal plans and saved recipes.
          </p>
          <Button className="mt-4 bg-recipe-orange hover:bg-recipe-orange-dark text-white">
            Upgrade to Premium
          </Button>
        </div>
      </section>
    );
  }
  
  return (
    <section className={`bg-white rounded-xl shadow-sm p-6 ${fullView ? '' : 'mb-8'}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <List className="text-recipe-orange mr-2" />
          <h2 className="text-xl font-bold">Grocery List</h2>
        </div>
        {!fullView && categories.length > 2 && (
          <Button 
            variant="ghost" 
            className="text-recipe-orange hover:text-recipe-orange-dark"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        {displayedCategories.map((category) => (
          <div key={category}>
            <h3 className="font-semibold text-md mb-2 text-gray-700">{category}</h3>
            <ul className="space-y-2">
              {itemsByCategory[category].map((item) => (
                <li key={item.id} className="flex items-center">
                  <Checkbox id={`item-${item.id}`} checked={item.checked} />
                  <label 
                    htmlFor={`item-${item.id}`} 
                    className={`ml-2 ${item.checked ? 'line-through text-gray-400' : ''}`}
                  >
                    {item.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button>
          <List className="mr-2 h-4 w-4" />
          Generate New Grocery List
        </Button>
      </div>
    </section>
  );
};

export default GroceryListSection;
