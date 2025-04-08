
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecipesSection from "@/components/RecipesSection";
import BlogSection from "@/components/BlogSection";
import PricingSection from "@/components/PricingSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecipesSection />
        <BlogSection />
        <PricingSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
