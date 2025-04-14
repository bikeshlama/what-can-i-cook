
import { Button } from '@/components/ui/button';
import { Calendar, ChevronRight, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface MealPlanSectionProps {
  isPremium: boolean;
  fullView?: boolean;
}

// Mock data for meal plan
const mockMealPlan = [
  { id: 1, day: 'Monday', meal: 'Spinach and Feta Stuffed Chicken Breast' },
  { id: 2, day: 'Tuesday', meal: 'Vegetable Stir Fry with Tofu' },
  { id: 3, day: 'Wednesday', meal: 'Salmon with Asparagus and Quinoa' },
  { id: 4, day: 'Thursday', meal: 'Turkey Chili with Sweet Potatoes' },
  { id: 5, day: 'Friday', meal: 'Zucchini Noodles with Pesto and Cherry Tomatoes' },
  { id: 6, day: 'Saturday', meal: 'Grilled Steak with Roasted Vegetables' },
  { id: 7, day: 'Sunday', meal: 'Baked Cod with Mediterranean Vegetables' },
];

const MealPlanSection = ({ isPremium, fullView = false }: MealPlanSectionProps) => {
  // In the compact view, only show first 3 days
  const displayedMeals = fullView ? mockMealPlan : mockMealPlan.slice(0, 3);
  
  if (!isPremium) {
    return (
      <section className={`bg-white rounded-xl shadow-sm p-6 ${fullView ? '' : 'mb-8'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Calendar className="text-recipe-orange mr-2" />
            <h2 className="text-xl font-bold">Meal Plan</h2>
            <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Premium</span>
          </div>
        </div>
        
        <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Lock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-600">Premium Feature</h3>
          <p className="text-gray-500 mt-1 max-w-md mx-auto">
            Upgrade to premium to access personalized meal plans based on your preferences and saved recipes.
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
          <Calendar className="text-recipe-orange mr-2" />
          <h2 className="text-xl font-bold">Meal Plan</h2>
        </div>
        {!fullView && (
          <Button 
            variant="ghost" 
            className="text-recipe-orange hover:text-recipe-orange-dark"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedMeals.map((meal) => (
          <Card key={meal.id} className="border border-gray-200">
            <CardContent className="p-4">
              <div className="font-semibold text-gray-500 mb-1">{meal.day}</div>
              <div className="font-medium">{meal.meal}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Generate New Meal Plan
        </Button>
      </div>
    </section>
  );
};

export default MealPlanSection;
