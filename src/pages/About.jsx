import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Award, Users, Clock, MapPin, Star, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const navigate = useNavigate();
 const values = [
  {
    Icon: Shield,
    title: "Compliance & Integrity",
    description: "Transparent, ethical operations with full regulatory compliance.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    Icon: Shield,
    title: "Safety & Reliability",
    description: "Safe, dependable travel with on-time service for all.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    Icon: Users,
    title: "Customer First",
    description: "Exceptional service focused on comfort  for every client.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50"
  },
  {
    Icon: Award,
    title: "Team Excellence",
    description: "POSH-certified professionals delivering top-tier service.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50"
  },
  {
    Icon: TrendingUp,
    title: "Innovation & Efficiency",
    description: "Advanced tech solutions for seamless operations.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50"
  }
];

  const stats = [
    { number: "500+", label: "Companies Served", icon: Users },
    { number: "200+", label: "Fleet Vehicles", icon: Award },
    { number: "25+", label: "Cities Covered", icon: MapPin },
    { number: "50K+", label: "Happy Customers", icon: Heart },
  ];

  const team = [
    {
      name: "Aarav Sharma",
      role: "Founder & CEO",
      image: "/team/ceo.jpg",
      description: "Former transportation executive with 15+ years experience"
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      image: "/team/operations.jpg",
      description: "Operations specialist focused on service excellence"
    },
    {
      name: "Rohan Mehta",
      role: "CTO",
      image: "/team/cto.jpg",
      description: "Technology innovator driving our digital transformation"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Hero Section with Background Image */}
      <section className="pt-20 pb-14 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
            alt="Executive fleet vehicles"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-0">
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-white/20"
            >
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">India's Fastest Growing Corporate Cab Service</span>
            </motion.div>
            
            <h1 className="font-bold text-6xl md:text-7xl text-white mb-4 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Sky Logistic</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Revolutionizing corporate transportation with premium fleet solutions, 
              cutting-edge technology, and unwavering commitment to excellence since 2018.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-3xl text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block mb-4">
                <span className="text-blue-600 font-semibold text-lg">Our Journey</span>
              </div>
              <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight">
                Driving Excellence in Corporate Transportation
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded in 2018 with a vision to transform corporate transportation, 
                  <span className="font-semibold text-gray-900"> Sky Logistic</span> has grown to become 
                  India's leading provider of premium cab solutions for businesses of all sizes.
                </p>
                <p>
                  What started as a small fleet of luxury sedans has evolved into a comprehensive 
                  transportation ecosystem serving Fortune 500 companies, startups, and everything in between.
                </p>
                <p>
                  Our commitment to innovation, safety, and exceptional service has earned us the 
                  trust of 500+ corporate clients and 50,000+ satisfied professionals across 25+ cities.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.9/5 Rating</span>
                </div>
                <div className="w-1 h-6 bg-gray-300"></div>
                <div className="text-gray-600 font-medium">99.2% On-time Rate</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Sky Logistic?</h3>
                  <div className="space-y-4">
                    {[
                      "POSH Certified",
                      "GPS-Monitored Fleet",
                      "Dedicated Account Managers",
                      "Professional Chauffeurs",
                      "Luxury & Comfort",
                      "Reliability"
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-blue-50">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-lg">Our Principles</span>
            </div>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Values</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              The fundamental beliefs that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${value.bgColor} rounded-2xl p-6 text-center group cursor-pointer transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-white/50 h-full flex flex-col`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <value.Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors mt-auto">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold text-lg">Meet Our Team</span>
            </div>
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Team</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              The visionary minds driving innovation in corporate transportation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="font-bold text-4xl md:text-5xl mb-6">
              Ready to Elevate Your Corporate Travel?
            </h2>
            <p className="text-blue-100 text-xl mb-8 leading-relaxed">
              Join 500+ companies that trust Sky Logistic for their transportation needs. 
              Experience the difference premium service makes.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => navigate('/corporate-booking')}
              >
                Get Started Today
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;