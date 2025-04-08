
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const BlogHeader = () => {
  return (
    <section className="pt-12 pb-8 bg-recipe-beige">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-recipe-orange">Blog</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Cooking tips, tricks, and inspiration to elevate your culinary skills
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <Input 
              type="text" 
              placeholder="Search articles..."
              className="pl-10 py-6"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
