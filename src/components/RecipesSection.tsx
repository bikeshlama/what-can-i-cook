
import RecipeCard, { RecipeProps } from './RecipeCard';

// Example recipe data
const recipeData: RecipeProps[] = [
  {
    id: '1',
    name: 'Creamy Garlic Pasta',
    description: 'A quick and delicious pasta dish with a creamy garlic sauce that comes together in just 20 minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    cookTime: 20,
  },
  {
    id: '2',
    name: 'Mediterranean Salad',
    description: 'Fresh vegetables, feta cheese, and olives tossed in a zesty lemon dressing. Perfect for a light lunch.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80',
    cookTime: 15,
  },
  {
    id: '3',
    name: 'Baked Lemon Chicken',
    description: 'Tender chicken breasts baked with lemon, herbs and garlic. A healthy dinner option that\'s full of flavor.',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=713&q=80',
    cookTime: 35,
  },
  {
    id: '4',
    name: 'Vegetable Stir Fry',
    description: 'Colorful vegetables stir-fried in a savory sauce. Add your choice of protein for a complete meal.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    cookTime: 25,
  },
  {
    id: '5',
    name: 'Spinach and Feta Omelet',
    description: 'Fluffy eggs with spinach and tangy feta cheese. A protein-packed breakfast ready in minutes.',
    imageUrl: 'https://images.unsplash.com/photo-1590639696460-2dfd21113f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
    cookTime: 10,
  },
  {
    id: '6',
    name: 'Roasted Vegetable Soup',
    description: 'Hearty soup made with roasted vegetables and herbs. Comforting and nutritious for any season.',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    cookTime: 45,
  },
];

const RecipesSection = () => {
  return (
    <section className="py-16 bg-recipe-gray-light">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Recipes You Can Make <span className="text-recipe-orange">Right Now</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeData.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
