
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipeResults from "@/components/RecipeResults";
import PremiumSection from "@/components/PremiumSection";
import FAQSection from "@/components/FAQSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { Recipe } from "@/components/RecipeResults";

const Index = () => {
  const [searchResults, setSearchResults] = useState<Recipe[] | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecipeResults recipes={searchResults} isLoading={isSearching} />
        <WhyChooseUs />
        <PremiumSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
