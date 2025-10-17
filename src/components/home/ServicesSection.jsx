import { motion } from "framer-motion";
import { Building2, Users, Calendar, Shield } from "lucide-react";

const services = [
  {
    Icon: Building2,
    title: "Corporate Solutions",
    description: "Tailored transportation solutions for businesses of all sizes with dedicated account management.",
  },
  {
    Icon: Users,
    title: "Employee Commute",
    description: "Safe and reliable daily commute services for your workforce with flexible scheduling.",
  },
  {
    Icon: Calendar,
    title: "Event Transportation",
    description: "Comprehensive logistics for corporate events, conferences, and business meetings.",
  },
  {
    Icon: Shield,
    title: "Safety First",
    description: "Verified drivers, real-time tracking, and 24/7 support for complete peace of mind.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Why Choose <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional transportation services designed for corporate excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-light rounded-xl p-6 smooth-transition hover:glow-effect cursor-pointer"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
