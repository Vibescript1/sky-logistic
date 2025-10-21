import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp } from "lucide-react";
import { testimonials } from "@/utils/mockData";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Show 3 testimonials at a time
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerPage;
    return testimonials.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonials();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full px-6 py-3 text-sm font-semibold mb-8 shadow-lg"
          >
            <Award className="w-5 h-5" />
            <span>Rated 4.9/5 by Corporate Clients</span>
            <TrendingUp className="w-5 h-5" />
          </motion.div>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Leading Businesses</span>
          </h2>
          <p className="text-slate-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover why Fortune 500 companies and growing startups choose our premium corporate transportation solutions
          </p>
        </motion.div>

        {/* 3-Testimonial Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Testimonials Display - Shows 3 at a time */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${testimonial.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 lg:p-8 relative border border-slate-200/50 group"
                  >
                    {/* Quote Icon Background */}
                    <div className="absolute top-4 right-4 opacity-[0.03]">
                      <Quote className="w-16 h-16 text-blue-600" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4 lg:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 lg:w-5 lg:h-5 ${
                            i < testimonial.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-slate-200 text-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-slate-700 mb-6 leading-relaxed text-base lg:text-lg font-medium">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center text-white font-bold text-lg lg:text-xl flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-slate-900 text-base lg:text-lg truncate">{testimonial.name}</div>
                        <div className="text-slate-600 text-sm truncate">{testimonial.role}</div>
                        <div className="text-blue-600 text-sm font-semibold truncate">{testimonial.company}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8 lg:mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonials}
              className="p-3 lg:p-4 rounded-full bg-white shadow-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700 group-hover:text-blue-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2 lg:gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-6 lg:w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonials}
              className="p-3 lg:p-4 rounded-full bg-white shadow-lg border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-slate-700 group-hover:text-blue-600" />
            </motion.button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="text-sm text-slate-500">
              {currentIndex + 1} of {totalPages}
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 lg:mt-12 pt-8 lg:pt-10 border-t border-slate-200"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-6 h-6 text-blue-600" />
            <p className="text-slate-700 text-lg lg:text-xl font-semibold">
              Join industry leaders who trust our premium transportation solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            {[
              "Tech Corp", "Global Solutions", "Innovation Labs",
              "Enterprise Systems", "Digital Ventures", "Future Tech"
            ].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-slate-600 font-bold text-base lg:text-lg px-3 lg:px-4 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;