
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-recipe-orange">
            What Can I Cook?
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-recipe-orange font-medium">Home</Link>
          <Link to="/blog" className="text-gray-700 hover:text-recipe-orange font-medium">Blog</Link>
          <a href="#premium" className="text-gray-700 hover:text-recipe-orange font-medium">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-recipe-orange font-medium">Contact</a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="btn-primary">Sign Up</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 absolute z-50 w-full shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Home</Link>
            <Link to="/blog" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Blog</Link>
            <a href="#premium" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Contact</a>
            <Button className="btn-primary w-full">Sign Up</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
