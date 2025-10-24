import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, User, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Fleet", path: "/fleet" },
    { name: "Contact Us", path: "/contact" },
    { name: "Legal & Compliance", path: "/legal-compliance" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-2xl shadow-black/5 border-b border-gray-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top Bar */}

      {/* Main Header */}
      <div className="container mx-auto px-2 sm:px-3 md:px-3">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <img
                src="/sky-logo.png" 
                alt="Sky Logistic Logo"
                className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-6">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <div
                  className={`px-5 py-3 rounded-lg transition-all duration-300 font-medium ${
                    location.pathname === link.path
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-100 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mr-1">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/sky-logistics-hub" },
                { icon: Instagram, href: "https://www.instagram.com/sky_logisticshub/" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 rounded-xl bg-white shadow-sm hover:shadow-md border border-gray-200 hover:border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-600 hover:text-blue-600" />
                </a>
              ))}
            </div>
            <a href="tel:+919121261234">
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="relative overflow-hidden group border-2 border-blue-200 hover:border-blue-400 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] font-semibold px-2 py-2 rounded-xl shadow-md hover:shadow-lg h-10 flex items-center">
                  <Phone className="w-4 h-4 mr-1.5 text-blue-600 group-hover:text-white transition-all duration-500 ease-in-out z-10" />
                  <span className="relative z-10 text-sm text-gray-700 group-hover:text-white transition-all duration-500 ease-in-out font-medium">
                    +91 91212 61234
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-left" />
                  <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-700 ease-in-out" />
                </div>
              </motion.div>
            </a>
            {/* <Link to="/dashboard">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="sm"
                  className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-500 font-semibold px-6 py-2.5 rounded-xl"
                >
                  <User className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 font-medium">Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </Button>
              </motion.div>
            </Link> */}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2.5 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 ease-out"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {/* <div className="flex flex-col gap-4 pt-6 mt-6 border-t border-gray-200">
                <Link
                  to="/corporate-booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-center py-4 font-semibold border-2 border-blue-200 hover:border-blue-600 bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300 rounded-xl"
                    >
                      <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                        Book Now
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </div> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
