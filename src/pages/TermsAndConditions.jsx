import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FileText, AlertTriangle, CheckCircle, Clock, CreditCard, MapPin, Users, Shield } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Payment Terms and Conditions",
      icon: CreditCard,
      content: [
        "The customer shall pay the car rental fare as per the applicable rates and payment schedules mentioned on the website of Sky Logistic at the time of booking. The customer shall also pay parking charges, toll-charges, service tax, state tax and any other fee or levy presently payable or imposed hereinafter under applicable law/s for availing the car rental services.",
        "The payment has to be transferred to the Sky Logistic account for the transaction to be completed. The client will have the responsibility to confirm the transaction with Sky Logistic and send all relevant details and proof to confirm the same.",
        "The billing shall be done after the completion of the transaction and the bill shall be sent through email. The client shall pay the amount communicated on email through the payment gateway and shall send us the confirmation of the transaction separately through email to info@skylogistic.com.",
        "In case of a payment made before the commencement of a booking, the amount shall be treated as advance / part payment and the final amount nett of the advance paid shall be cleared by the client as per the amount intimated to the client on email.",
        "The transaction / payment has to be made within the office hours of 0930 to 1900 hrs on a monday to saturday basis excluding public holidays for the vehicle to be dispatched. alternatively, for other hours / days, the client has the option to come to our 24×7 operations office and complete the physical swiping of the credit card and make the payment and confirm the booking."
      ]
    },
    {
      title: "Service Disclaimers and Liability",
      icon: AlertTriangle,
      content: [
        "The Customer agrees and acknowledges that the use of the services offered by Sky Logistic is at the sole risk of the Customer. Sky Logistic disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness of the services offered by Sky Logistic. The liability of Sky Logistic is excluded to the fullest extent permitted by law.",
        "Without prejudice to the above, Sky Logistic makes no representation or warranty that:",
        "• The service shall meet Customer requirements;",
        "• The service shall be uninterrupted, timely, secure, or error-free.",
        "\nSky Logistic shall not be responsible or liable for any loss or damage, howsoever caused or suffered by the Customer arising out of the use of car rental service offered by Sky Logistic or due to the failure of Sky Logistic to provide services to the Customer for any reason whatsoever including but not limited to the Customer's non-compliance with the services' recorded voice instructions, malfunction, partial or total failure of any network terminal, data processing system, computer tele-transmission or telecommunications system or other circumstances whether or not beyond the control of Sky Logistic or any person or any organization involved in the above mentioned systems.",
        "Without prejudice to the above, Sky Logistic shall not be liable for any direct or indirect loss or damage which may be suffered by the Customer as a result of any failure on the part of Sky Logistic to provide a taxi to the Customer within any stipulated time even if Sky Logistic has agreed to provide the taxi, or even if the Customer has apprised Sky Logistic of the possibility of any such loss or damage which would result if the taxi is not provided at all or is not provided within the stipulated time to the Customer.",
        "Upon the demand of Sky Logistic, the Customer shall indemnify Sky Logistic from/ and against/ and in respect of any/ or all liabilities, losses, charges and expenses (including legal fees and costs on a full indemnity basis) claims, demands, actions and proceedings which Sky Logistic may incur or sustain directly or indirectly from/ or by any reason of/ or in relation to the use or purposed use of the Services provided by Sky Logistic."
      ]
    },
    {
      title: "Location Services and Data Usage",
      icon: MapPin,
      content: [
        "Sky Logistic is hereby authorized to use the location-based information provided by any of the telecommunication companies regarding the use of mobile phone by the Customer for making a taxi booking. However, the location-based information will be used only to facilitate and improve the probability of locating a taxi for the Customer.",
        "Sky Logistic shall be entitled to disclose the particulars of the Customer/s in possession of Sky Logistic to all companies controlled by Sky Logistic or any of its authorized chauffeurs or any government body as required by the law/ or by directive/ or request from any government body or to any third party deemed fit and proper by Sky Logistic, in its absolute discretion.",
        "Sky Logistic shall be entitled to terminate any booking at any time without giving any reason or prior notice to the Customer.",
        "Sky Logistic encourages all its customers to take full responsibility of their luggage/belongings. In case of any loss, from the taxi during the journey, Sky Logistic shall endeavour to locate the lost luggage/belongings on a 'best-effort' basis but Sky Logistic shall not be held responsible for such loss or damage.",
        "If the Customer leaves any luggage/belongings/goods in the taxi or has any complaint in respect of the services or the use of the taxi, the Customer shall make a complaint in writing to Sky Logistic within 2 hours from such usage."
      ]
    },
    {
      title: "Dispute Resolution and Arbitration",
      icon: FileText,
      content: [
        "In case of any dispute arising between the Customer and Sky Logistic, the dispute shall be referred to an Arbitrator, appointed by Sky Logistic in its sole discretion. The Arbitrator so appointed by Sky Logistic shall act in conformity with the Arbitration and Conciliation Act, 1996. The award so passed by the Arbitrator shall be binding upon the Customer as well as Sky Logistic. The courts of Hyderabad, India shall have the sole and exclusive jurisdiction in respect of any matters which may be instituted before any court of law, arising from the use of the services offered by Sky Logistic.",
        "Sky Logistic shall be entitled to add, vary or amend any or all of these terms and conditions at any time at its sole discretion and the Customer shall be bound by such addition, variation or amendment incorporated/made in these terms and conditions with effect from the date set forth by Sky Logistic. The terms and conditions shall be available on Sky Logistic website www.skylogistic.com",
        "Sky Logistic shall be entitled to record all the calls made to the call centre/s of Sky Logistic for quality and training purposes.",
        "Vehicles registered with Sky Logistic may be continuously tracked by Sky Logistic using GPS for security reasons or for reasons deemed fit and proper by Sky Logistic."
      ]
    },
    {
      title: "Account Security and Communication",
      icon: CheckCircle,
      content: [
        "By logging on the Account Access service on Sky Logistic websites, the User/customer hereby authorizes Sky Logistic and its agents to access third party sites, including that of Banks and other payment gateways, designated by them or on their behalf for retrieving requested information.",
        "While registering, the User will choose a password and the user is responsible for maintaining the confidentiality of the password and the account. The User is fully responsible for all the activities that may take place whilst using their password or account. It is the duty of the User to notify Sky Logistic immediately in writing of any unauthorized use of their password or account or any other breach of security. Sky Logistic will not be liable for any loss that may be incurred by the User as a result of unauthorized use of customer's password or account, either with or without his/her knowledge. The User shall not use anyone else's password at any time.",
        "Sky Logistic may send booking confirmation, itinerary information, cancellation, payment confirmation, refund status, schedule change or any such other information relevant for the transaction, via SMS or by voice call on the contact number given by the User at the time of booking; Sky Logistic may also contact the User by voice call, SMS or email in case the User couldn't or hasn't concluded the booking, for any reason what so ever or to know the preference of the User for concluding the booking and also to help the User for the booking.",
        "The User hereby unconditionally consents that such communications via SMS and/ or voice call by Sky Logistic is (a) upon the request and authorization of the User, (b) 'transactional' and not an 'unsolicited commercial communication' as per the guidelines of Telecom Regulation Authority of India (TRAI) and (c) in compliance with the relevant guidelines of TRAI or such other authority in India and abroad. The User will indemnify Sky Logistic against all types of losses and damages incurred by Sky Logistic due to any action taken by TRAI, Access Providers (as per TRAI regulations) or any other authority due to any erroneous compliant made by the User against Sky Logistic with respect to the intimations mentioned above or on account of any wrong number or email id provided by the User for any reason whatsoever."
      ]
    },
    {
      title: "User Compliance and Insurance",
      icon: Shield,
      content: [
        "The User warrants that the User shall abide by all such additional procedures and guidelines, as modified from time to time, with respect to the use of Sky Logistic services. The User further warrants that the User shall comply with all the applicable laws and regulations regarding the services provided by Sky Logistic.",
        "Unless explicitly provided by Sky Logistic, any specific service or deliverable, obtaining sufficient insurance coverage shall be the obligation/option of the User and Sky Logistic shall not accept any claim/s arising out of such contingencies.",
        "Insurance cover, if any provided as a part of the service/ product by Sky Logistic shall be based on the terms and conditions of the insuring company. The User shall contact the insurance company directly for any claim/s or dispute/s which may arise out of such insurance cover. Sky Logistic shall not provide any express or implied undertakings for acceptance of the claims by the insurance company."
      ]
    }
  ];

  const keyPoints = [
    "Payment must be completed as per the rates and schedules mentioned on our website",
    "All transactions require confirmation and proper documentation",
    "Bookings are subject to availability and confirmation",
    "Customers must report any issues or complaints within 2 hours of service",
    "Disputes are subject to arbitration in Hyderabad, India",
    "We reserve the right to modify terms and conditions at any time",
    "Account security is the sole responsibility of the user",
    "All communications comply with TRAI regulations"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
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
              <FileText className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Terms & Conditions</span>
            </motion.div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4 leading-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-400">Conditions</span>
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-3xl mx-auto mb-8">
              Please read these terms and conditions carefully before using our transportation services.
              By using Sky Logistic, you agree to be bound by these comprehensive terms.
            </p>
            <div className="text-indigo-100 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12">
              <h2 className="font-bold text-2xl text-amber-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Important Terms Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></div>
                    <p className="text-amber-800 leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Terms</span>
              </h2>
              <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                Detailed terms and conditions governing the use of Sky Logistic transportation services
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
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">{section.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 mt-2"></div>
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
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-bold text-4xl text-white mb-6">
              Need Clarification?
            </h2>
            <p className="text-indigo-100 text-xl mb-8 leading-relaxed">
              If you have any questions about these terms and conditions, our legal team is here to help.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-white mb-2">Legal Inquiries</h3>
                  <p className="text-indigo-100 mb-1">bookings@skylogisticshub.com</p>
                  <p className="text-indigo-100">Phone: +91 9121261234</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">General Support</h3>
                  <p className="text-indigo-100 mb-1">bookings@skylogisticshub.com</p>
                  <p className="text-indigo-100">Phone: +91 9121261234X</p>
                </div>
              </div>
            </div>

            <div className="text-indigo-100 text-sm mt-6">
              For legal matters, our team responds within 3-5 business days. For urgent operational issues, contact our 24/7 support.
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
