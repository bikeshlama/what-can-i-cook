
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const addIngredient = () => {
    if (currentInput.trim() && !ingredients.includes(currentInput.trim())) {
      setIngredients([...ingredients, currentInput.trim()]);
      setCurrentInput('');
    }
  };

  const removeIngredient = (index: number) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };

  const findRecipes = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (ingredients.length === 0) {
      toast({
        title: "No ingredients added",
        description: "Please add at least one ingredient to find recipes.",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    
    try {
      // Simulate API call to demonstrate UI
      // In real implementation, this would call Supabase
      setTimeout(() => {
        toast({
          title: "Search complete!",
          description: "Connect this to your Supabase backend to get real results.",
        });
        setIsSearching(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error finding recipes:", error);
      toast({
        title: "Something went wrong",
        description: "Could not find recipes. Please try again later.",
        variant: "destructive"
      });
      setIsSearching(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-recipe-beige overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-recipe-gray-dark mb-6">
            Enter what you have.
            <br />
            <span className="text-recipe-orange">Discover what you can cook.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Find delicious recipes using ingredients you already have in your kitchen
          </p>
          
          <form id="ingredient-form" onSubmit={findRecipes} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-wrap gap-2 mb-4 min-h-12">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index} 
                  className="bg-recipe-orange-light/20 text-recipe-orange px-3 py-1 rounded-full flex items-center"
                >
                  <span>{ingredient}</span>
                  <button 
                    type="button"
                    onClick={() => removeIngredient(index)}
                    className="ml-2 text-recipe-orange hover:text-recipe-orange-light"
                    aria-label={`Remove ${ingredient}`}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Input
                  type="text"
                  id="ingredient-input"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter an ingredient (e.g., eggs, chicken, broccoli)"
                  className="py-6 text-base"
                  aria-label="Ingredient input"
                />
              </div>
              <Button 
                type="button"
                onClick={addIngredient} 
                className="bg-recipe-green hover:bg-recipe-green-light text-white p-2 h-auto"
                aria-label="Add ingredient"
              >
                <Plus size={20} />
              </Button>
            </div>
            
            <Button 
              type="submit"
              className="btn-primary w-full mt-4 text-lg flex items-center justify-center gap-2"
              disabled={ingredients.length === 0 || isSearching}
            >
              {isSearching ? 'Searching...' : (
                <>
                  <Search size={20} />
                  Find Recipes
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 bg-recipe-orange-light rounded-l-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 opacity-10 bg-recipe-green-light rounded-tr-full"></div>
    </section>
  );
};

export default Hero;
