import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Star, Shield, Wifi } from "lucide-react";

const FleetShowcase = () => {
  const showcaseFleet = [
    {
      id: 1,
      name: "Executive Sedan",
      category: "Business",
      seating: 4,
      rating: 4.9,
      price: 2500,
      description: "Perfect for corporate meetings and business travel",
      features: ["Professional Driver", "Wi-Fi", "AC", "GPS Tracking"],
      image:
        "https://media.istockphoto.com/id/170107445/photo/white-smart-car.jpg?s=612x612&w=0&k=20&c=PRHWIYHunkjEy0K8CusBaNc-KHgF_s0sXxNHMmCuRwA=" /* /pexels-alexgtacar-745150-1592384.jpg */,
      available: true,
    },
    {
      id: 2,
      name: "Luxury SUV",
      category: "Business",
      seating: 6,
      rating: 4.8,
      price: 3500,
      description: "Spacious comfort for executive groups and clients",
      features: ["Extra Luggage Space", "Premium Sound", "Climate Control"],
      image:
        "https://t4.ftcdn.net/jpg/07/42/50/05/360_F_742500551_Ae2dvu7igt9oyf09DxFEfBrXYhuLrq4w.jpg" /* /pexels-mikebirdy-810357.jpg */,
      available: true,
    },
    {
      id: 3,
      name: "BMW 7 Series",
      category: "Executive",
      seating: 4,
      rating: 5.0,
      price: 4500,
      description: "Ultimate luxury experience for VIP executives",
      features: ["Champagne Service", "Massage Seats", "Privacy Glass"],
      image:
        "https://www.carbike360.ae/_next/image?url=https%3A%2F%2Fcarbike360-ae.s3.me-central-1.amazonaws.com%2Fmedium_BMW_7_Series_35446b286f.jpg&w=3840&q=75" /* /pexels-pixabay-164634.jpg */,
      available: true,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4">
            Our Premium <span className="text-blue-600">Fleet</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience corporate travel redefined with our meticulously
            maintained luxury vehicles and professional chauffeurs
          </p>
        </motion.div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {showcaseFleet.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Availability Badge */}
                <div
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${
                    vehicle.available
                      ? "bg-emerald-500 text-white"
                      : "bg-rose-500 text-white"
                  }`}
                >
                  {vehicle.available ? "Available" : "Booked"}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-slate-700">
                    {vehicle.rating}
                  </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
                  <span className="text-lg font-bold text-slate-900">
                    ₹{vehicle.price}
                  </span>
                  <span className="text-slate-500 text-sm ml-1">/day</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                    {vehicle.name}
                  </h3>
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                    {vehicle.category}
                  </span>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.seating} seats</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="w-4 h-4" />
                    <span>Wi-Fi</span>
                  </div>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {vehicle.features.length > 2 && (
                    <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-full">
                      +{vehicle.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full text-white font-semibold py-2.5 rounded-lg transition-all duration-200 group/btn"
                  style={{ backgroundColor: "#71AF4C" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#5d8f3f")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#71AF4C")
                  }
                  asChild
                >
                  {/* <Link to={`/fleet/${vehicle.id}`}>
                    <span>Book Now</span>
                  </Link> */}
                </Button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="font-bold text-2xl md:text-3xl mb-4">
              Ready to Experience Premium Travel?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our complete fleet of luxury vehicles and find the perfect
              ride for your corporate needs.
            </p>
            <Link to="/fleet">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-700 hover:bg-slate-100 font-semibold px-8 py-3 rounded-lg transition-all duration-200 group"
              >
                View Full Fleet
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetShowcase;
