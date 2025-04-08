
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import { useToast } from '@/components/ui/use-toast';

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookTime: number;
  source?: string;
}

interface RecipeResultsProps {
  recipes: Recipe[] | null;
  isLoading: boolean;
}

const RecipeResults = ({ recipes, isLoading }: RecipeResultsProps) => {
  const { toast } = useToast();
  
  if (isLoading) {
    return (
      <section className="py-16 bg-recipe-gray-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Finding Recipes <span className="text-recipe-orange">For You</span>
          </h2>
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-300 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!recipes || recipes.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-recipe-gray-light">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Recipes You Can Make <span className="text-recipe-orange">Right Now</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeResults;
