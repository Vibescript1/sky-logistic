import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Eye, Lock, FileText, Users, Database, Mail, Phone } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      icon: Shield,
      content: [
        "Sky Logistic is committed to protecting the privacy and security of your personal information. This privacy statement describes how we collect and use your personal information and data, in accordance with the EU General Data Protection Regulation (GDPR). It applies to all guests and visitors, known through this document as 'data subjects'.",
        "Sky Logistic is a 'data controller'. This means that we are responsible for deciding how we hold and use personal information about you. We are required under data protection legislation to notify you of the information contained in this privacy statement.",
        "This statement applies to data subjects. This statement does not form part of any contract to provide services. We may update this statement at any time. It is important that you read this statement, together with any other privacy statement we may provide on specific occasions when we are collecting or processing personal information about you, so that you are aware of how and why we are using such information."
      ]
    },
    {
      title: "Data Protection Principles",
      icon: Lock,
      content: [
        "We will comply with data protection law. This says that the personal information we hold about you must be:",
        "• Used lawfully, fairly and in a transparent way.",
        "• Collected only for valid purposes that we have clearly explained to you and not used in any way that is incompatible with those purposes.",
        "• Relevant to the purposes we have told you about and limited only to those purposes.",
        "• Accurate and kept up to date.",
        "• Kept only as long as necessary for the purposes we have told you about. Kept securely.",
        "This is the only principle that deals explicitly with security. The GDPR states that personal data must be 'processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organizational measures'."
      ]
    },
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data). There are 'special categories' of more sensitive personal data which require a higher level of protection.",
        "We may collect, store, and use the following categories of personal information about you:",
        "• Personal contact details such as name, title, addresses, telephone numbers, and personal email addresses.",
        "• Date of birth; Gender; Marital status; Next of kin and emergency contact information.",
        "• National Insurance or TAX ID number/PAN card; Bank account details and tax status information.",
        "• Driving license; Grievance information; CCTV footage and other information obtained through electronic means such as door access records.",
        "• Information about your use of our information and communications systems; Photographs;"
      ]
    },
    {
      title: "Special Categories of Information",
      icon: Eye,
      content: [
        "We may also collect, store and use the following 'special categories' of more sensitive personal information:",
        "• Information about your race or ethnicity, religious beliefs, sexual orientation.",
        "This information requires higher levels of protection and will only be processed with your explicit written consent or when required by law. We process this type of information in the following circumstances:",
        "• In limited circumstances, with your explicit written consent.",
        "• Where we need to carry out our legal obligations.",
        "• Where it is needed in the public interest, such as for requests by CBI, police or governmental authorities.",
        "• Where it is needed in relation to legal claims or where it is needed to protect your interests (or someone else's interests) and you are not capable of giving your consent, or where you have already made the information public."
      ]
    },
    {
      title: "How We Collect Your Information",
      icon: Users,
      content: [
        "We collect personal information about data subjects through various methods; check-ins, bookings, and reservations. Either directly from data subjects or sometimes from a third party acting on our behalf (for example through a booking agency, travel agent or corporate account)."
      ]
    },
    {
      title: "How We Use Your Information",
      icon: FileText,
      content: [
        "We will only use your personal information when the law allows us to. Most commonly, we will use your personal information in the following circumstances:",
        "• Where we need to perform the contract we have entered into with you.",
        "• Where we need to comply with a legal obligation.",
        "• Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.",
        "• Where you have given us explicit consent to do so.",
        "\nWe may also use your personal information in the following situations, which are likely to be rare:",
        "• Where we need to protect your interests (or someone else's interests).",
        "• Where it is needed in the public interest or for official purposes or requested for by the CBI, police or governmental authorities.",
        "\nSituations in which we will use your personal information:",
        "We need all the categories of information in the list above primarily to allow us to perform our contract with you and to enable us to comply with legal obligations. In some cases, we may use your personal information to pursue legitimate interests of our own or those of third parties."
      ]
    },
    {
      title: "Data Sharing and Third Parties",
      icon: Users,
      content: [
        "We may have to share your data with third parties, including third-party service providers and other entities in Sky Logistic. We require appointed third parties to respect the security of your data and to treat it in accordance with the law.",
        "We will share your personal information with third parties where required by law, or where we have another legitimate interest in doing so, or when we have your explicit consent.",
        "\nWhich third-party service providers process my personal information?",
        "'Third parties' includes third-party service providers (including contractors and designated agents) and other entities within our group.",
        "\nHow secure is my information with third-party service providers and other entities in our group?",
        "All our third-party service providers and other entities in the group are required to take appropriate security measures to protect your personal information in line with our policies. We do not allow our third-party service providers to use your personal data for their own purposes. We only permit them to process your personal data for specified purposes and in accordance with our instructions.",
        "\nWhen might you share my personal information with other entities in the group?",
        "We may share your personal information with other entities in Sky Logistic as part of our regular reporting activities on company performance, in the context of system maintenance, support and hosting of data.",
        "\nWhat about other third parties?",
        "We may share your personal information with other third parties, for example in the context of the possible sale or restructuring of the business. We may also need to share your personal information with a regulator or to otherwise comply with the law."
      ]
    },
    {
      title: "International Data Transfers",
      icon: FileText,
      content: [
        "Section 75 of the IT Act speaks about the extra-territorial applicability of the Act. It provides that IT Act shall apply to any offence committed by any person irrespective of his nationality, provided such act or conduct constituting the offence involves a computer, computer system or computer network located in India.",
        "Therefore, when the personal sensitive data is taken outside the territories of India, sections (43A and 72A) of the IT Act may be applicable."
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "We have put in place measures to protect the security of your information. Third parties will only process your personal information on our instructions and where they have agreed to treat the information confidentially, legally and securely.",
        "We have put in place appropriate security measures to prevent your personal information from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal information to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal information on our instructions and they are subject to a duty of confidentiality.",
        "We have put in place procedures to deal with any suspected data security breach and will notify you and any applicable regulator of a suspected breach where we are legally required to do so.",
        "\nThe GDPR states that personal data must be 'processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organizational measures'.",
        "The GDPR is deliberately vague about what measures organizations should take, because technological and organizational best practices are constantly changing. Currently, organizations should encrypt and/or pseudonymize personal data wherever possible, but they should also consider whatever other options are suitable."
      ]
    },
    {
      title: "Data Retention",
      icon: Database,
      content: [
        "How long will you use my information for?",
        "We will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal requirements.",
        "In some circumstances we may anonymize your personal information so that it can no longer be associated with you, in which case we may use such information without further statement to you."
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Eye,
      content: [
        "Your duty to inform us of changes - It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes during your relationship with us.",
        "\nUnder certain circumstances, by law you have the right to:",
        "• Request access to your personal information (commonly known as a 'data subject access request'). This enables you to receive a copy of the personal information we hold about you and to check that we are lawfully processing it.",
        "• Request correction of the personal information that we hold about you. This enables you to have any incomplete or inaccurate information we hold about you corrected.",
        "• Request erasure of your personal information. This enables you to ask us to delete or remove personal information where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal information where you have exercised your right to object to processing.",
        "• Object to processing of your personal information where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground. You also have the right to object where we are processing your personal information for direct marketing purposes.",
        "• Request the restriction of processing of your personal information. This enables you to ask us to suspend the processing of personal information about you, for example if you want us to establish its accuracy or the reason for processing it.",
        "\nNo fee is usually required",
        "You will not have to pay a fee to access your personal information (or to exercise any of the other rights). However, we may charge a reasonable fee if your request for access is clearly unfounded or excessive. Alternatively, we may refuse to comply with the request in such circumstances.",
        "\nWhat we may need from you",
        "We may need to request specific information from you to help us confirm your identity and ensure your right to access the information (or to exercise any of your other rights). This is another appropriate security measure to ensure that personal information is not disclosed to any person who has no right to receive it.",
        "\nRight to withdraw consent",
        "In the limited circumstances where you may have provided your consent to the collection, processing and transfer of your personal information for a specific purpose, you have the right to withdraw your consent for that specific processing at any time. Once we have received notification that you have withdrawn your consent, we will no longer process your information for the purpose or purposes you originally agreed to, unless we have another legitimate basis for doing so in law.",
        "You have the right to make a complaint at concerned authority."
      ]
    },
    {
      title: "Changes to This Policy",
      icon: FileText,
      content: [
        "We reserve the right to update this privacy statement at any time, and we will provide you with a new privacy statement when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal information.",
        "It is important that the personal information we hold about you is accurate and current. Please keep us informed if your personal information changes during your relationship with us."
      ]
    },
    {
      title: "Contact Us",
      icon: Users,
      content: [
        "In case of any questions or suggestions regarding the Policy, please contact Sky Logistic at:",
        "Email: info@skylogistic.com"
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@skylogistic.com",
      href: "mailto:info@skylogistic.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210"
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
              Sky Logistic is committed to protecting your privacy and ensuring the security of your personal information in accordance with GDPR and applicable data protection laws. This policy explains how we collect, use, and protect your personal data.
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
