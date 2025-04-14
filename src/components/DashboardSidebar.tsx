
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { 
  Home, 
  BookmarkCheck, 
  Calendar, 
  List, 
  Settings, 
  LogOut, 
  CreditCard,
  X
} from 'lucide-react';

interface DashboardSidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isPremium: boolean;
}

const DashboardSidebar = ({ 
  isOpen, 
  setIsOpen, 
  activeSection, 
  setActiveSection,
  isPremium
}: DashboardSidebarProps) => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast.error('Error signing out');
      return;
    }
    
    toast.success('Successfully logged out');
    navigate('/');
  };
  
  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, onClick: () => setActiveSection('home') },
    { id: 'savedRecipes', label: 'Saved Recipes', icon: BookmarkCheck, onClick: () => setActiveSection('savedRecipes') },
    { id: 'mealPlan', label: 'Meal Plan', icon: Calendar, premium: true, onClick: () => setActiveSection('mealPlan') },
    { id: 'groceryList', label: 'Grocery List', icon: List, premium: true, onClick: () => setActiveSection('groceryList') },
    { id: 'settings', label: 'Settings', icon: Settings, onClick: () => setActiveSection('settings') },
    { id: 'subscription', label: 'Subscription', icon: CreditCard, onClick: () => setActiveSection('subscription') },
  ];
  
  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 md:w-72 bg-white shadow-lg z-50 transition-transform duration-300 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:relative md:translate-x-0 md:z-0`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold text-recipe-orange">What Can I Cook?</h2>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden" 
              onClick={closeSidebar}
            >
              <X size={20} />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.id}>
                <Button
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start mb-1 ${
                    activeSection === item.id ? "bg-recipe-orange hover:bg-recipe-orange-dark" : ""
                  }`}
                  onClick={() => {
                    item.onClick();
                    closeSidebar();
                  }}
                  disabled={item.premium && !isPremium}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                  {item.premium && !isPremium && (
                    <span className="ml-auto text-xs bg-gray-200 px-2 py-1 rounded-full">
                      Premium
                    </span>
                  )}
                </Button>
              </div>
            ))}
          </nav>
          
          {/* Logout Button */}
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
