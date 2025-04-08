
import Header from "@/components/Header";
import BlogHeader from "@/components/BlogHeader";
import BlogList from "@/components/BlogList";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogHeader />
        <BlogList />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
