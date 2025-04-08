
import { Calendar, Share2 } from 'lucide-react';

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

const blogPosts: BlogPostProps[] = [
  {
    id: '1',
    title: 'Quick Meals from Random Ingredients',
    excerpt: 'Learn how to throw together delicious meals using whatever you have in your pantry. These creative recipes will save you from last-minute grocery runs.',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80',
    date: 'March 15, 2023',
  },
  {
    id: '2',
    title: 'What To Cook Before Groceries Run Out',
    excerpt: 'Don\'t panic when your refrigerator is nearly empty. These strategic recipes will help you create satisfying meals with minimal ingredients.',
    imageUrl: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
    date: 'April 22, 2023',
  },
  {
    id: '3',
    title: '5-Minute Breakfasts Using 3 Ingredients',
    excerpt: 'Start your day right even when you\'re short on time and ingredients. These simple breakfasts are nutritious, delicious, and incredibly easy to make.',
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'May 8, 2023',
  }
];

const BlogPostCard = ({ title, excerpt, imageUrl, date }: BlogPostProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <Calendar size={16} className="mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-recipe-orange hover:text-recipe-orange-light font-medium">
            Read More
          </a>
          <button className="text-gray-500 hover:text-recipe-orange transition-colors">
            <Share2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          From Our <span className="text-recipe-orange">Blog</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Discover tips, tricks, and inspiration to make the most of your ingredients and elevate your cooking skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-recipe-orange hover:text-recipe-orange-light font-medium">
            View All Blog Posts
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
