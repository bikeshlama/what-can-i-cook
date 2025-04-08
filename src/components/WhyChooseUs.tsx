
import { Search, Smartphone, Shield, Zap } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="w-14 h-14 rounded-full bg-recipe-orange/10 flex items-center justify-center mb-4 text-recipe-orange">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-recipe-gray-light">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Why Choose <span className="text-recipe-orange">Us</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Our recipe finder stands out with these key features
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <Feature 
            icon={<Zap size={24} />}
            title="Simple & Fast UI"
            description="Get recipe recommendations in seconds with our intuitive, streamlined interface."
          />
          <Feature 
            icon={<Search size={24} />}
            title="Real Recipe Matches"
            description="We show you actual recipes you can make, not random lists of dishes."
          />
          <Feature 
            icon={<Smartphone size={24} />}
            title="Works on Mobile"
            description="Find recipes on the go with our fully responsive mobile design."
          />
          <Feature 
            icon={<Shield size={24} />}
            title="Privacy-First"
            description="No account required to try. We respect your privacy and data."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
