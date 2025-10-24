import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, Shield, CheckCircle, MessageCircle } from "lucide-react";

const LegalCompliance = () => {
  const sections = [
    {
      title: "Company Overview",
      icon: FileText,
      content: [
        "Sky Logistics Hub Private Limited is a compliant corporate transportation service provider based in India.",
        "While our management team brings over two decades of rich experience in the mobility and logistics industry, this company was operational from 2018.",
        "Company Name: Sky Logistics Hub Private Limited",
        "CIN: U63031TG2019PTC131839",
        "GSTIN: 36ABBCS8643L1ZU"
      ]
    },
    {
      title: "Service Information",
      icon: Shield,
      content: [
        "All bookings and service engagements are handled directly through official communication channels - not through online transactions or automated systems.",
        "We are committed to maintaining the highest standards of compliance, POSH awareness certification, and safety protocols.",
        "Ensuring a secure and respectful travel environment for every client."
      ]
    },
    {
      title: "Privacy & Content Notice",
      icon: CheckCircle,
      content: [
        "All content on this website is for general informational purposes only.",
        "Vehicle images and visuals displayed are for illustration and representational purposes and may not always depict the exact models or configurations used in service.",
        "Sky Logistics respects your privacy. Any information voluntarily shared with us through calls, emails, or contact forms is used solely for communication and service-related purposes.",
        "We do not sell, trade, or disclose personal information to any unauthorized third parties."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/pexels-fauxels-3183153.jpg"
            alt="Corporate team meeting"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-24 left-12 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-white/20"
            >
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Compliance Support</span>
            </motion.div>

            <h1 className="font-bold text-6xl md:text-7xl text-white mb-4 leading-tight">
              Legal <span className="text-amber-300">Compliance</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              For official correspondence or concerns, please contact us through the details provided on our Contact Us page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div 
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="font-bold text-2xl text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCompliance;
