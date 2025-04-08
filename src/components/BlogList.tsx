
import { Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Cook with Whatever You Have in Your Pantry',
    excerpt: 'Learn the art of improvisation in the kitchen. Discover how to create delicious meals with just a few basic ingredients you already have.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'April 12, 2023',
    category: 'Cooking Tips',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: '10 Essential Ingredients Every Home Cook Should Have',
    excerpt: 'Stock your kitchen with these versatile ingredients and you'll always be prepared to whip up a quick and tasty meal, even when you haven't gone grocery shopping.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'March 28, 2023',
    category: 'Pantry Basics',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'Budget-Friendly Meals That Don't Sacrifice Flavor',
    excerpt: 'Eating well doesn't have to break the bank. These affordable recipes prove that delicious, nutritious meals can be made on any budget.',
    imageUrl: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    date: 'February 15, 2023',
    category: 'Budget Cooking',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'The Ultimate Guide to Meal Prepping',
    excerpt: 'Save time and reduce stress with these effective meal prepping strategies. Learn how to plan, prepare, and store your meals for the week ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'January 30, 2023',
    category: 'Meal Planning',
    readTime: '10 min read'
  },
  {
    id: '5',
    title: 'How to Reduce Food Waste in Your Kitchen',
    excerpt: 'Simple, practical tips to help you make the most of every ingredient, save money, and minimize your environmental impact through mindful cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    date: 'January 12, 2023',
    category: 'Sustainable Cooking',
    readTime: '7 min read'
  },
  {
    id: '6',
    title: 'Cooking for Beginners: Simple Techniques to Master',
    excerpt: 'New to cooking? Start with these fundamental techniques that will build your confidence in the kitchen and set you up for culinary success.',
    imageUrl: 'https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    date: 'December 5, 2022',
    category: 'Beginner Cooking',
    readTime: '9 min read'
  }
];

const BlogList = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <Tag size={14} className="mr-1" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-recipe-orange transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button variant="ghost" className="text-recipe-orange hover:text-recipe-orange-light font-medium">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button className="btn-primary">Load More Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
