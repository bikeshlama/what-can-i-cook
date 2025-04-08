
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface RecipeProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookTime: number;
}

const RecipeCard = ({ id, name, description, imageUrl, cookTime }: RecipeProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <Clock size={16} className="text-recipe-orange mr-1" />
          <span className="text-sm text-gray-500">{cookTime} min</span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Button className="w-full btn-secondary">View Recipe</Button>
      </div>
    </div>
  );
};

export default RecipeCard;
