
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check current auth state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };
  
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50 transition-all duration-300">
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
        
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">{user.email}</span>
              <Button onClick={handleLogout} variant="outline">Logout</Button>
            </>
          ) : (
            <>
              <Link to="/auth/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/auth/signup">
                <Button className="btn-primary">Sign Up</Button>
              </Link>
            </>
          )}
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
      <div 
        className={`md:hidden bg-white p-4 absolute z-50 w-full shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link to="/" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Home</Link>
          <Link to="/blog" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Blog</Link>
          <a href="#premium" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-recipe-orange font-medium py-2">Contact</a>
          
          {user ? (
            <>
              <div className="pt-2 border-t border-gray-200">
                <span className="text-sm text-gray-600">{user.email}</span>
                <Button onClick={handleLogout} variant="outline" className="w-full mt-2">Logout</Button>
              </div>
            </>
          ) : (
            <>
              <div className="pt-2 border-t border-gray-200">
                <Link to="/auth/login" className="block w-full">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/auth/signup" className="block w-full mt-2">
                  <Button className="btn-primary w-full">Sign Up</Button>
                </Link>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
