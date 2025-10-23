import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImageSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const images = [
    "/images/Amnet digital.jpeg",
    "/images/Axelon-Logo.svg",
    "/images/Blaze.jpeg",
    "/images/FT.jpeg",
    "/images/GUS education.jpeg",
    "/images/Grid Dynami.png",
    "/images/Micron.png",
    "/images/Persistent.png",
    "/images/Qualitest.jpeg",
    "/images/Synechron.png",
    "/images/WNS.jpeg"
  ];

  // Create 3 sets for a more seamless loop
  const displayImages = [...images, ...images, ...images];

  const itemWidth = 224; // w-48 (192px) + space-x-8 (32px)
  const singleSetWidth = images.length * itemWidth;
  const totalWidth = displayImages.length * itemWidth;

  return (
    <section ref={ref} className="mt-5 pb-0 md:pt-2 md:pb-2 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/10 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Valued Clients</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Proudly serving industry leaders with reliable and professional transportation solutions
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 py-2"
            animate={{
              x: isInView ? [-singleSetWidth, -singleSetWidth * 2] : [],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: `${totalWidth}px`,
            }}
          >
            {displayImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 p-3 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * (index % images.length), duration: 0.5 }}
              >
                <img
                  src={image}
                  alt={`Partner ${(index % images.length) + 1}`}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;