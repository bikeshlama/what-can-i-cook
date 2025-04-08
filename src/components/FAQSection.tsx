
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to sign up?",
      answer: "No, you can use the basic features without signing up. However, creating an account allows you to save your favorite recipes and access more personalized features."
    },
    {
      question: "Is this really free?",
      answer: "Yes, the basic version is completely free to use. We offer a premium subscription with additional features for those who want more functionality."
    },
    {
      question: "Can I use this on my phone?",
      answer: "Absolutely! Our app is fully responsive and works great on mobile phones, tablets, and desktop computers."
    },
    {
      question: "How accurate are the recipe results?",
      answer: "Our recipe matching algorithm provides highly relevant results based on the ingredients you have. We focus on quality over quantity to ensure you get practical recipe suggestions."
    },
    {
      question: "How do I save recipes for later?",
      answer: "Free users can bookmark up to 5 recipes. Premium users get unlimited recipe saves, organized collections, and the ability to create custom meal plans."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Frequently Asked <span className="text-recipe-orange">Questions</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
          Get answers to common questions about using our recipe finder
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
