import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, itemIndex) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const faqData = [
    {
      category: "Booking & Reservations",
      icon: "📅",
      questions: [
        {
          question: "How far in advance should I book my corporate cab?",
          answer: "We recommend booking at least 2-3 hours in advance for the best availability. For corporate accounts with regular requirements, we can accommodate last-minute requests based on fleet availability and your priority status."
        },
        {
          question: "Can I modify or cancel my booking after confirmation?",
          answer: "Yes, you can modify pickup time, location, or vehicle type up to 1 hour before the scheduled pickup through our app, website, or by calling our 24/7 customer support. Cancellations are free up to 30 minutes before pickup time."
        },
        {
          question: "What happens if my flight is delayed?",
          answer: "Our system automatically tracks flight information for airport transfers. If your flight is delayed, we'll adjust the pickup time accordingly at no extra charge. For significant delays, our team will coordinate with you directly."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: "💰",
      questions: [
        {
          question: "How are your prices calculated?",
          answer: "Our pricing is based on distance, vehicle type, time of day, and service requirements. Corporate clients benefit from volume discounts, priority booking, and consolidated monthly billing with detailed expense reports."
        },
        {
          question: "Do you offer corporate billing and invoicing?",
          answer: "Yes! Corporate clients receive monthly consolidated invoices with detailed trip breakdowns, categorized expenses, and GST-compliant documentation. We also provide customized reporting for your accounting needs."
        },
        {
          question: "Are there any hidden charges or surcharges?",
          answer: "No hidden charges. All pricing is transparent and includes tolls, parking, and driver allowances. Airport transfers include flight delay coverage, and we clearly communicate any additional charges for outstation travel."
        }
      ]
    },
    {
      category: "Vehicles & Services",
      icon: "🚗",
      questions: [
        {
          question: "What types of vehicles do you offer?",
          answer: "We offer a complete range of premium vehicles including executive sedans (BMW, Audi, Mercedes), luxury SUVs, premium vans for groups, and Tempo Travellers for larger corporate events. All vehicles are less than 3 years old and regularly maintained."
        },
        {
          question: "Do all vehicles have Wi-Fi and entertainment systems?",
          answer: "Wi-Fi is available in all our Business and Executive category vehicles. Premium sound systems, climate control, and bottled water are standard across our fleet. Executive vehicles include additional amenities like charging ports and reading lights."
        },
        {
          question: "Are your drivers verified and experienced?",
          answer: "All drivers undergo comprehensive background checks, have minimum 5 years of experience, and are certified in defensive driving and customer service. They receive ongoing training in corporate etiquette and route optimization."
        }
      ]
    },
    {
      category: "Safety & Support",
      icon: "🛡️",
      questions: [
        {
          question: "What safety measures do you implement?",
          answer: "All vehicles are equipped with GPS tracking, dash cameras, and emergency response systems. Drivers are trained in emergency protocols, and we maintain 24/7 monitoring with real-time support. All vehicles are comprehensively insured."
        },
        {
          question: "How do you ensure punctuality?",
          answer: "Our advanced booking system optimizes routes in real-time, and drivers receive live traffic updates. We maintain a 99.2% on-time performance rate with proactive communication for any delays or changes to your schedule."
        },
        {
          question: "What if I need assistance during my trip?",
          answer: "Our 24/7 customer support team is available via phone, WhatsApp, and in-app chat. Drivers are equipped with communication devices, and we provide immediate assistance for any concerns or emergencies."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-white/20"
            >
              <HelpCircle className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Frequently Asked Questions</span>
            </motion.div>

            <h1 className="font-bold text-6xl md:text-7xl text-white mb-4 leading-tight">
              FAQ
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about our corporate transportation services, booking process, and policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="font-bold text-2xl text-gray-900">{category.category}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const key = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openItems[key];

                    return (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(categoryIndex, itemIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          </motion.div>
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6">
              Still have questions?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Our customer support team is available 24/7 to help you with any questions or special requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block">
                <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Support
                </button>
              </a>
              <a href="/corporate-booking" className="inline-block">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300">
                  Book Now
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
