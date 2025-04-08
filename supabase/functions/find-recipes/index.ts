
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { ingredients } = await req.json();
    
    console.log("Received ingredients:", ingredients);
    
    // This is a placeholder. In the future, this will call the Spoonacular API
    // For now, return mock data
    const mockRecipes = [
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
    ];
    
    return new Response(JSON.stringify(mockRecipes), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
