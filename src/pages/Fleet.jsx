import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FleetCard from "@/components/fleet/FleetCard";
import { fleetData } from "@/utils/mockData";
import { PageLoader } from "@/components/ui/page-loader";
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "sedan", name: "Sedans" },
    { id: "suv", name: "SUVs" },
    { id: "luxury", name: "Luxury" },
    { id: "van", name: "Vans" },
  ];

  const filteredFleet =
    selectedCategory === "all"
      ? fleetData
      : fleetData.filter((vehicle) => vehicle.category === selectedCategory);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate 1.5s loading time

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white/90 text-sm font-medium">Premium Fleet Collection</span>
            </motion.div>

            <h1 className="font-bold text-6xl md:text-7xl text-white mb-6 leading-tight">
              Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Fleet</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Choose from our exclusive collection of luxury vehicles designed for corporate excellence and executive transportation needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Filter by Category</h3>
            <p className="text-gray-600 text-sm">
              Choose the perfect vehicle type for your needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 relative">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300
                  ${selectedCategory === category.id
                    ? "text-[#3396D8]"
                    : "text-gray-600 hover:text-[#3396D8]"}`}
              >
                {category.name}

                {/* Active Underline with gradient */}
                {selectedCategory === category.id && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-200"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {selectedCategory === "all" ? "Complete Fleet Collection" : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <span className="block w-20 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"></span>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {selectedCategory === "all"
                ? "Discover our full range of premium vehicles designed for corporate transportation excellence"
                : `Explore our ${categories.find(c => c.id === selectedCategory)?.name.toLowerCase()} collection`
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading state - show skeleton cards with staggered animation
              Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                  key={`skeleton-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <FleetCard isLoading={true} index={index} />
                </motion.div>
              ))
            ) : (
              // Loaded state - show actual cards with enhanced staggered animations
              filteredFleet.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <FleetCard vehicle={vehicle} index={index} />
                </motion.div>
              ))
            )}
          </div>

          {filteredFleet.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">No vehicles found</p>
              <p className="text-gray-500 text-sm mt-1">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Fleet;
