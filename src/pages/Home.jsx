import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ImageSlider from "@/components/home/ImageSlider";
import ServicesSection from "@/components/home/ServicesSection";
import BookingFlowSection from "@/components/home/BookingFlowSection";
import FleetShowcase from "@/components/home/FleetShowcase";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ImageSlider />
        <ServicesSection />
        <BookingFlowSection />
        <FleetShowcase />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
