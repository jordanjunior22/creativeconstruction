import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";
import NewsletterSignup from "@/components/NewsLetterSignUp";
import FAQs from "@/components/FAQS";
import Blog from "@/components/Blog";


export default function Home() {
  return (
   <div className="">
  
      <Hero/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <CallToAction/>
      <FAQs/>
      <Blog/>
      <NewsletterSignup/>

   </div>
  );
}
