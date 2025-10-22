import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import sedanImage from "@/assets/sedan.jpg";
import suvImage from "@/assets/suv.jpg";
import luxuryImage from "@/assets/luxury.jpg";
import tempoImage from "@/assets/tempo.jpg";
import { Building2, Users, CheckCircle, Shield, Clock, MapPin } from "lucide-react";

const leftFeatures = [
  {
    Icon: Shield,
    title: "POSH Certified",
    description: "POSH-trained staff and a zero-tolerance policy — safety and dignity are our priority"
  },
  {
    Icon: MapPin,
    title: "GPS-Monitored Fleet",
    description: "Real-time visibility for safety, route-optimization and peace of mind"
  },
  {
    Icon: Users,
    title: "Dedicated Account Managers",
    description: "One point of contact, personalized reporting and 24x7 support"
  }
];

const rightFeatures = [
  {
    Icon: Users,
    title: "Professional Chauffeurs",
    description: "Experienced, well-trained drivers for a seamless journey"
  },
  {
    Icon: Building2,
    title: "Luxury & Comfort",
    description: "Premium vehicles outfitted for style, space and first-class experience"
  },
  {
    Icon: Clock,
    title: "Reliability",
    description: "Decades of trusted service"
  }
];

const ServicesSection = () => {
  const fleetImages = [sedanImage, suvImage, luxuryImage, tempoImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  const captions = [
    "Comfortable Sedans for Business Trips",
    "Spacious SUVs for Group Travel",
    "Luxury Vehicles for Executive Travel",
    "Reliable Tempo Vans for Large Teams",
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % fleetImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="pt-12 pb-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-6xl text-slate-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Services</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Premium transportation solutions designed for your business needs
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Left Side Features */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: 10, 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Rotating Car */}
          <div className="w-3/5 max-w-lg h-72 mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
              {fleetImages.map((src, idx) => (
                <motion.img
                  key={src}
                  src={src}
                  alt={`Fleet vehicle ${idx + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
            </div>

            <div className="text-center mt-4 h-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm text-slate-500"
                >
                  {captions[currentIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Features */}
          <div className="lg:w-5/12 flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  x: -10, 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer min-h-[160px] flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;