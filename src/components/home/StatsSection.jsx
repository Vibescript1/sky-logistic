import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Building2, Users, Car, MapPin, Star, Shield } from "lucide-react";

const StatCard = ({ value, label, suffix = "", icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) => 
    label === "Service Rating" ? latest.toFixed(1) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="text-center group"
    >
      <motion.div 
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </motion.div>
      
      <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-2">
        <motion.span className="inline-block">
          {displayValue}
        </motion.span>
        {suffix}
      </div>
      <div className="text-white/80 text-lg font-medium">{label}</div>
      
      {/* Animated underline on hover */}
      <motion.div 
        className="h-0.5 bg-white/30 mt-3 mx-auto w-0 group-hover:w-12 transition-all duration-300"
        initial={false}
      />
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { 
      label: "Companies Served", 
      value: 500, 
      suffix: "+", 
      icon: Building2 
    },
    { 
      label: "Happy Customers", 
      value: 50000, 
      suffix: "+", 
      icon: Users 
    },
    { 
      label: "Fleet Vehicles", 
      value: 700, 
      suffix: "+", 
      icon: Car 
    },
    { 
      label: "Cities Covered", 
      value: 25, 
      suffix: "+", 
      icon: MapPin 
    },
    { 
      label: "Service Rating", 
      value: 4.9, 
      suffix: "/5", 
      icon: Star 
    },
    { 
      label: "Professional Drivers", 
      value: 1400, 
      suffix: "+", 
      icon: Shield 
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden" style={{ backgroundColor: '#1F9DD8' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6"
          >
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-white/90 text-sm font-medium">Trusted by India's Leading Companies</span>
          </motion.div>
          
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Driving <span className="text-yellow-300">Excellence</span> in Corporate Transportation
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            For over two decade, we've been the preferred choice for businesses seeking reliable, 
            premium transportation solutions across India
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-white/70 text-lg mb-4">
            Join thousands of satisfied corporate clients
          </p>
          <motion.div
            className="inline-flex gap-2 text-white/90 text-sm font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Shield className="w-4 h-4" />
            <span>POSH Certified • 24/7 Customer Support</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;