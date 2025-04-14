
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bookmark, Star, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface SavedRecipesSectionProps {
  fullView?: boolean;
}

// Mock data for saved recipes
const mockSavedRecipes = [
  {
    id: 1,
    title: 'Creamy Garlic Parmesan Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Roasted Vegetable Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Simple Avocado Toast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: 4,
    title: 'Lemon Herb Grilled Chicken',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const SavedRecipesSection = ({ fullView = false }: SavedRecipesSectionProps) => {
  const [savedRecipes, setSavedRecipes] = useState(mockSavedRecipes);
  
  const removeFromSaved = (id: number) => {
    setSavedRecipes(savedRecipes.filter(recipe => recipe.id !== id));
  };
  
  // In the compact view, only show first 3 recipes
  const displayedRecipes = fullView ? savedRecipes : savedRecipes.slice(0, 3);
  
  return (
    <section className={`bg-white rounded-xl shadow-sm p-6 ${fullView ? '' : 'mb-8'}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Bookmark className="text-recipe-orange mr-2" />
          <h2 className="text-xl font-bold">Saved Recipes</h2>
        </div>
        {!fullView && savedRecipes.length > 3 && (
          <Button 
            variant="ghost" 
            className="text-recipe-orange hover:text-recipe-orange-dark"
            onClick={() => {}}
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        )}
      </div>
      
      {displayedRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedRecipes.map((recipe) => (
            <Card key={recipe.id} className="overflow-hidden h-full flex flex-col">
              <div className="h-48 relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-100"
                  onClick={() => removeFromSaved(recipe.id)}
                >
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                </Button>
              </div>
              <CardContent className="py-4 flex-grow">
                <h3 className="font-semibold text-lg">{recipe.title}</h3>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">View Recipe</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8">
          <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-500">No saved recipes yet</h3>
          <p className="text-gray-400 mt-1">Your saved recipes will appear here</p>
        </div>
      )}
    </section>
  );
};

export default SavedRecipesSection;
