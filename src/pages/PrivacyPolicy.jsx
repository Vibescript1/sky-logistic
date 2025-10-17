import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, FileText, Users, Database, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Protection Principles",
      icon: Shield,
      content: [
        "Sky Logistic is committed to protecting the privacy and security of your personal information in accordance with the EU General Data Protection Regulation (GDPR) and applicable Indian data protection laws",
        "We will use your personal data only in-line with principles of lawfulness, fairness and transparency, purpose limitation, data minimization, accuracy, storage limitation, and integrity and confidentiality",
        "This Privacy Policy applies to all customers, clients, and visitors using our transportation services. We are the 'data controller' responsible for deciding how we hold and use your personal information"
      ]
    },
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal contact details including name, title, addresses, telephone numbers, and email addresses",
        "Date of birth, gender, marital status, and emergency contact information",
        "Government identification numbers (PAN card, Aadhaar), bank account details, and tax status information",
        "Driving license and vehicle registration information for our drivers and fleet management",
        "Booking history, travel preferences, and service usage data",
        "Device information including IP address, browser type, and operating system",
        "Location data through GPS-enabled services and mobile applications",
        "CCTV footage, door access records, and other electronic security information",
        "Communication records including customer support interactions",
        "Information about your use of our information and communication systems",
        "Photographs for identification and security purposes"
      ]
    },
    {
      title: "Special Categories of Sensitive Information",
      icon: Eye,
      content: [
        "We may collect sensitive personal information including race or ethnicity, religious beliefs, and sexual orientation only when necessary and with explicit consent",
        "This information requires higher levels of protection and will only be processed with your explicit written consent or when required by law",
        "We process this type of information only in limited circumstances as outlined in this policy"
      ]
    },
    {
      title: "How We Collect Your Information",
      icon: Users,
      content: [
        "Directly from you through bookings, reservations, check-ins, and service registration",
        "From third parties such as booking agencies, corporate accounts, or travel management companies",
        "Through our mobile applications and GPS tracking systems",
        "From security systems including CCTV and access control systems",
        "Through customer support interactions and feedback systems"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "To perform contracts and provide transportation services including booking management and route optimization",
        "To comply with legal obligations including regulatory requirements and safety standards",
        "For legitimate business interests such as service improvement, fraud prevention, and network security",
        "To protect your interests and ensure passenger and driver safety",
        "For public interest purposes or when requested by law enforcement authorities",
        "To conduct data analytics for service improvement and customer satisfaction",
        "To monitor use of our systems for compliance and security purposes"
      ]
    },
    {
      title: "Legal Basis for Processing",
      icon: Lock,
      content: [
        "Contract performance - to provide and manage transportation services",
        "Legal compliance - to meet regulatory and statutory requirements",
        "Legitimate interests - for business operations, security, and service improvement",
        "Consent - when you explicitly agree to specific processing activities",
        "Vital interests - to protect health and safety of passengers and drivers",
        "Public interest - when required by government authorities or law enforcement"
      ]
    },
    {
      title: "Data Sharing and Third Parties",
      icon: Users,
      content: [
        "We share information with verified drivers and fleet operators to facilitate service delivery",
        "Third-party service providers for payment processing, data analysis, and customer support",
        "Insurance companies for claims processing and risk management",
        "Regulatory authorities when required by law or for safety investigations",
        "Other entities within Sky Logistic group for operational efficiency",
        "Law enforcement agencies when legally required or for public safety"
      ]
    },
    {
      title: "International Data Transfers",
      icon: FileText,
      content: [
        "In accordance with Section 75 of the IT Act, our policy applies to any data processing involving computer systems located in India",
        "When data is transferred outside India, sections 43A and 72A of the IT Act may be applicable",
        "We ensure appropriate safeguards are in place for international transfers",
        "Data transfers are conducted only when necessary and with proper security measures"
      ]
    },
    {
      title: "Data Security Measures",
      icon: Lock,
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Secure data centers with restricted physical and digital access",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication requirements for all systems",
        "Employee training on data protection and privacy practices",
        "Incident response procedures for suspected data breaches",
        "Third-party processor agreements with confidentiality requirements"
      ]
    },
    {
      title: "Data Retention",
      icon: Database,
      content: [
        "Personal information is retained only as long as necessary for service provision and legal compliance",
        "Retention periods are determined by business needs, legal requirements, and statutory obligations",
        "Data may be anonymized for analytical purposes when no longer needed for operational use",
        "Specific retention schedules are maintained for different categories of information"
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        "Access your personal information and receive copies of data we hold",
        "Correct inaccurate or incomplete personal information",
        "Request erasure of personal information when no longer necessary",
        "Object to processing based on legitimate interests or direct marketing",
        "Request restriction of processing during investigations or disputes",
        "Data portability to transfer information to another service provider",
        "Withdraw consent for specific processing activities"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "privacy@skylogistic.com",
      href: "mailto:privacy@skylogistic.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-1800-XXX-XXXX",
      href: "tel:+911800XXXXXXX"
    }
  ];

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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-white/20"
            >
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">GDPR Compliant Privacy Policy</span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4 leading-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Policy</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Sky Logistic is committed to protecting your privacy and ensuring the security of your personal information in accordance with GDPR and applicable data protection laws.
            </p>
            <div className="text-blue-100 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
              <h2 className="font-bold text-2xl text-gray-900 mb-4">Our Commitment to Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Sky Logistic, we understand that your privacy is paramount. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our transportation services. We are committed to
                protecting your personal information and being transparent about our data practices in compliance with GDPR principles.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                This policy applies to all data subjects including customers, corporate clients, drivers, and visitors to our platforms.
                We may update this policy at any time, and it is important that you read this statement together with any other
                privacy notices we may provide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the
                collection and use of information in accordance with these terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                Comprehensive Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Protection</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Detailed information about our GDPR-compliant data collection, usage, and protection practices
              </p>
            </motion.div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">{section.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-2"></div>
                        <p className="text-gray-600 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-bold text-4xl text-white mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-blue-100 text-xl mb-8 leading-relaxed">
              Our privacy team is here to help. Contact us with any questions about this policy or your data rights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <contact.icon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{contact.label}</span>
                  </div>
                  <div className="text-blue-100">{contact.value}</div>
                </motion.a>
              ))}
            </div>

            <div className="text-blue-100 text-sm">
              We typically respond to privacy inquiries within 2-3 business days.
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
