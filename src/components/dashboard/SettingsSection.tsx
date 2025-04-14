
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings, User, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface SettingsSectionProps {
  user: any;
}

const SettingsSection = ({ user }: SettingsSectionProps) => {
  const [profileForm, setProfileForm] = useState({
    fullName: user?.user_metadata?.full_name || '',
    username: user?.user_metadata?.username || '',
    email: user?.email || '',
  });
  
  const [dietaryPreferences, setDietaryPreferences] = useState({
    vegetarian: false,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
    lowCarb: false,
  });
  
  const [cuisinePreferences, setCuisinePreferences] = useState({
    italian: false,
    mexican: false,
    asian: false,
    mediterranean: false,
    american: false,
    indian: false,
  });
  
  const [notifications, setNotifications] = useState({
    newRecipes: true,
    mealPlanUpdates: true,
    promotions: false,
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm({ ...profileForm, [name]: value });
  };
  
  const handleDietaryChange = (preference) => {
    setDietaryPreferences({
      ...dietaryPreferences,
      [preference]: !dietaryPreferences[preference],
    });
  };
  
  const handleCuisineChange = (cuisine) => {
    setCuisinePreferences({
      ...cuisinePreferences,
      [cuisine]: !cuisinePreferences[cuisine],
    });
  };
  
  const handleNotificationChange = (notification) => {
    setNotifications({
      ...notifications,
      [notification]: !notifications[notification],
    });
  };
  
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
  };
  
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <Settings className="text-recipe-orange mr-2" />
        <h2 className="text-xl font-bold">Settings</h2>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={profileForm.fullName}
                      onChange={handleProfileChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      name="username"
                      value={profileForm.username}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileForm.email}
                    onChange={handleProfileChange}
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Dietary Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(dietaryPreferences).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`dietary-${key}`} 
                        checked={value}
                        onCheckedChange={() => handleDietaryChange(key)}
                      />
                      <Label htmlFor={`dietary-${key}`} className="capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cuisine Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(cuisinePreferences).map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`cuisine-${key}`} 
                        checked={value}
                        onCheckedChange={() => handleCuisineChange(key)}
                      />
                      <Label htmlFor={`cuisine-${key}`} className="capitalize">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Recipes</h4>
                    <p className="text-sm text-gray-500">
                      Receive notifications when new recipes matching your preferences are added
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.newRecipes}
                    onCheckedChange={() => handleNotificationChange('newRecipes')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Meal Plan Updates</h4>
                    <p className="text-sm text-gray-500">
                      Get updates when your meal plan is ready or needs attention
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.mealPlanUpdates}
                    onCheckedChange={() => handleNotificationChange('mealPlanUpdates')}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Promotions and Offers</h4>
                    <p className="text-sm text-gray-500">
                      Receive information about special offers, discounts, and news
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.promotions}
                    onCheckedChange={() => handleNotificationChange('promotions')}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default SettingsSection;
