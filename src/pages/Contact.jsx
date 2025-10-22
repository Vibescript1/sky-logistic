import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  const { toast } = useToast();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize map
    if (mapRef.current && !mapInstanceRef.current) {
      // Hyderabad coordinates
      const hyderabadCoords = [17.4488, 78.3906];
      
      mapInstanceRef.current = L.map(mapRef.current).setView(hyderabadCoords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstanceRef.current);

      // Add marker for business location
      L.marker(hyderabadCoords)
        .addTo(mapInstanceRef.current)
        .bindPopup(`
          <div class="text-center p-2">
            <strong className="text-blue-600">Sky Logistic HQ</strong><br/>
            <span class="text-sm text-gray-600">Gachibowli, Hyderabad, India</span>
          </div>
        `);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formDataToSend = {
    access_key: "9d3e664b-fa9e-45f1-9d58-8067293b844f", 
    from_name: formData.name,
    email: formData.email,
    replyto: formData.email,
    message: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || "Not provided"}
      Message: ${formData.message}
    `,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formDataToSend),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        duration: 4000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again.",
        duration: 4000,
      });
      console.error("Failed to send:", result);
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "There was a problem submitting the form.",
      duration: 4000,
    });
    console.error("Error submitting form:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      Icon: MapPin,
      title: "Visit Our Office",
      content: "Plot No. 41-48, Flat No.502, Telecom Nagar, Gachibowli, Hyderabad, Telangana – 500032",
      description: "Headquarters - Schedule a meeting",
      color: "blue",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      iconBg: "from-blue-500 to-cyan-500",
      link: "https://www.google.com/maps/search/?api=1&query=Plot+No.+41-48,+Flat+No.502,+Telecom+Nagar,+Gachibowli,+Hyderabad,+Telangana+500032"
    },
    {
      Icon: Phone,
      title: "Call Us Directly",
      content: "+91 9121261234",
      description: "24/7 Customer Support Line",
      color: "green",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      iconBg: "from-green-500 to-emerald-500",
      link: "tel:+919121261234"
    },
    {
      Icon: Mail,
      title: "Email Us",
      content: "bookings@skylogisticshub.com",
      description: "Quick response guaranteed",
      color: "purple",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      iconBg: "from-purple-500 to-indigo-500",
      link: "mailto:bookings@skylogisticshub.com"
    },
    {
      Icon: Clock,
      title: "Business Hours",
      content: "Mon - Sun: 24/7",
      description: "Always available for you",
      color: "amber",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      iconBg: "from-amber-500 to-orange-500"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
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
              <MessageCircle className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">Get In Touch</span>
            </motion.div>

            <h1 className="font-bold text-6xl md:text-7xl text-white mb-4 leading-tight">
              Contact <span className="text-amber-300">Sky Logistic</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Get in touch with our team for premium corporate transportation solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information - Full Width */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Get in <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to us for any inquiries or to book our premium transportation services
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              info.link ? (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center mb-4 mx-auto`}>
                    <info.Icon className={`w-6 h-6 ${info.textColor}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-center">
                    {info.content}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 text-center">
                    {info.description}
                  </p>
                </motion.a>
              ) : (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-lg ${info.bgColor} flex items-center justify-center mb-4 mx-auto`}>
                    <info.Icon className={`w-6 h-6 ${info.textColor}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-center">
                    {info.content}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 text-center">
                    {info.description}
                  </p>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Our Location
                </h3>
                <div 
                  ref={mapRef} 
                  className="w-full h-[600px] -mt-4 -mb-4 rounded-xl overflow-hidden border border-gray-200 z-0"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="text-center mb-8">
                  <h2 className="font-bold text-3xl text-gray-900 mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="h-12"
                      />
                    </div>

<div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide detailed information about your inquiry..."
                        className="min-h-[140px] resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;