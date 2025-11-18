import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageLoader } from "@/components/ui/page-loader";
import { Skeleton } from "@/components/ui/skeleton";
const heroVideo =
  "https://www.pexels.com/video/from-above-footage-of-vehicular-traffic-on-a-busy-street-intersection-in-the-city-at-night-3063475/";
// import carDriving from "../../assets/car_driving_video.mp4";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(() => {
    const firstLoad = sessionStorage.getItem("hasLoaded");
    return !firstLoad;
  });

  // Message rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((current) => (current + 1) % 3);
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate initial loading and content loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setContentLoaded(true);
    }, 800);

    const completeTimer = setTimeout(() => {
      if (videoLoaded) {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true"); // ✅ prevent future loads
      }
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(completeTimer);
    };
  }, [videoLoaded]);

  // Handle video loading
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (contentLoaded) {
      setTimeout(() => setIsLoading(false), 400);
      sessionStorage.setItem("hasLoaded", "true");
    }
  };
  console.log("HeroSection render: isLoading =", isLoading);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Video with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(1.1) translateZ(0)`,
        }}
      >
        <video
          ref={(el) => {
            if (el) {
              el.addEventListener("loadeddata", () => {
                // Ensure smooth playback from start
                el.playbackRate = 1;
                handleVideoLoad();
              });

              el.addEventListener("timeupdate", () => {
                // Keep video playing smoothly
                if (el.currentTime > 0 && el.currentTime < 0.1) {
                  el.style.opacity = "1";
                }
              });
            }
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            objectFit: "cover",
            objectPosition: "center",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </motion.div>

      {/* Animated Glow Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-96 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"
        />
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-0 w-96 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"
        />
      </div>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * 0.2}px) translateZ(0)`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(240, 145, 54, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        {/* 🔹 Overlay (optional, for better text contrast) */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {!contentLoaded ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <Skeleton className="h-16 w-full max-w-2xl bg-white/20" />
                <Skeleton className="h-8 w-3/4 bg-white/20" />
                <div className="flex gap-4">
                  <Skeleton className="h-12 w-40 bg-white/20" />
                  <Skeleton className="h-12 w-40 bg-white/20" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <motion.h1
                  className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Corporate Cab Solutions for{" "}
                  <span className="text-[#F09136]">Your Businesses</span>{" "}
                  {/* text-accent, bg-gradient-to-r from-[#F09136] to-[#FAD889] inline-block text-transparent bg-clip-text */}
                </motion.h1>

                {/* Sliding Messages */}
                <motion.div
                  className="relative h-24 sm:h-20 overflow-hidden max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <AnimatePresence mode="wait">
                    {(() => {
                      const messages = [
                        `Your One-Stop Corporate Cab Partner,Premium Car Rentals, Airport Transfers, or Event Mobility - You call it, We do it.`,
                        "Backed by 20 years of proven experience in corporate transportation solutions.",
                        "A compliance-focused, POSH-trained team ensuring safety, respect, and reliability in every ride."
                      ];
                      return (
                        <motion.div
                          key={currentMessageIndex}
                          className="text-lg sm:text-xl md:text-2xl text-white/90 absolute inset-x-0"
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -50 }}
                          transition={{ duration: 0.5 }}
                          dangerouslySetInnerHTML={{
                            __html: messages[currentMessageIndex].replace(/\n/g, '<br />')
                          }}
                        />
                      );
                    })()}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <a href="tel:+919121261234">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 p-6 glow-effect group"
                    >
                      Call Now
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/20 text-white border-white/30 hover:bg-white/10 backdrop-blur-md mb-4 sm:mb-0"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>

      {/* Page Loader */}
      <PageLoader
        isLoading={isLoading}
        variant="car"
        message="Preparing your journey..."
      />
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <img
            src="https://icons8.com/preloaders/preloaders/487/Speedometer-128.gif"
            alt="Loading..."
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
      )} */}
    </section>
  );
};

export default HeroSection;
