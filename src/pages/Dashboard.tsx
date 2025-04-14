
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import DashboardSidebar from '@/components/DashboardSidebar';
import { toast } from 'sonner';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import SavedRecipesSection from '@/components/dashboard/SavedRecipesSection';
import MealPlanSection from '@/components/dashboard/MealPlanSection';
import GroceryListSection from '@/components/dashboard/GroceryListSection';
import SubscriptionSection from '@/components/dashboard/SubscriptionSection';
import SettingsSection from '@/components/dashboard/SettingsSection';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      
      if (error || !data?.user) {
        navigate('/auth/login');
        return;
      }
      
      setUser(data.user);
      
      // Mock premium status for demo purposes
      // In a real app, this would come from your subscription system
      setIsPremium(false);
      setLoading(false);
    };
    
    getUser();
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <WelcomeSection user={user} isPremium={isPremium} />
            <SavedRecipesSection />
            <MealPlanSection isPremium={isPremium} />
            <GroceryListSection isPremium={isPremium} />
            <SubscriptionSection isPremium={isPremium} />
          </>
        );
      case 'savedRecipes':
        return <SavedRecipesSection fullView={true} />;
      case 'mealPlan':
        return <MealPlanSection isPremium={isPremium} fullView={true} />;
      case 'groceryList':
        return <GroceryListSection isPremium={isPremium} fullView={true} />;
      case 'settings':
        return <SettingsSection user={user} />;
      case 'subscription':
        return <SubscriptionSection isPremium={isPremium} fullView={true} />;
      default:
        return <WelcomeSection user={user} isPremium={isPremium} />;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-bold text-recipe-orange">What Can I Cook?</h1>
        <Button variant="ghost" onClick={toggleSidebar} className="p-2">
          <Menu size={24} />
        </Button>
      </div>
      
      {/* Sidebar */}
      <DashboardSidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isPremium={isPremium}
      />
      
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
