
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@supabase/supabase-js';
import { Crown } from 'lucide-react';

interface WelcomeSectionProps {
  user: User | null;
  isPremium: boolean;
}

const WelcomeSection = ({ user, isPremium }: WelcomeSectionProps) => {
  // Get user's initials for the avatar fallback
  const getInitials = () => {
    if (!user || !user.user_metadata?.full_name) return 'U';
    const nameParts = user.user_metadata.full_name.split(' ');
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    }
    return nameParts[0][0] || 'U';
  };

  // Get displayed name (username or email)
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';

  const currentTime = new Date().getHours();
  let greeting = 'Good day';
  
  if (currentTime < 12) {
    greeting = 'Good morning';
  } else if (currentTime < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Avatar className="h-16 w-16 border-2 border-recipe-orange">
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="bg-recipe-orange text-white text-xl">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4">
            <p className="text-gray-600">{greeting},</p>
            <h1 className="text-2xl font-bold">{displayName}</h1>
            {isPremium && (
              <div className="flex items-center mt-1 text-amber-600">
                <Crown size={16} className="mr-1" />
                <span className="text-sm font-semibold">Premium Member</span>
              </div>
            )}
          </div>
        </div>
        
        {!isPremium && (
          <Button className="bg-recipe-orange hover:bg-recipe-orange-dark text-white">
            <Crown size={16} className="mr-2" />
            Upgrade to Premium
          </Button>
        )}
      </div>
    </section>
  );
};

export default WelcomeSection;
