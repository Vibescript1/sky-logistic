import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a1a3a] text-[#e0e0e0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex justify-start gap-2 mb-4 items-center">
              <img src="/sky-logo.png" alt="Sky Logistics" className="w-20 sm:w-24 md:w-32 h-auto filter invert " />
            </div>
            <p className="text-[#7A7F84] text-md mb-4">
              Premium corporate transportation solutions for modern businesses. Reliable, professional, and luxurious.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 rounded-full bg-[#7A7F84]/20 hover:bg-orange-500 hover:scale-110 hover:underline transition-colors"
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-md font-semibold">
              {[
                { name: "Home", to: "/" },
                { name: "Fleet", to: "/fleet" },
                { name: "About Us", to: "/about" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-[#e0e0e0] hover:text-orange-400 hover:font-bold hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-orange-400 mb-4">Services</h3>
            <ul className="space-y-2 text-md font-semibold">
              {[
                { name: "Corporate Booking", to: "/corporate-booking" },
                { name: "Individual Booking", to: "/individual-booking" },
                { name: "Fleet Management", to: "/fleet" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-[#e0e0e0] hover:text-orange-400 hover:font-bold hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-orange-400 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 hover:text-orange-400 cursor-pointer hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>Plot No. 41-48, Flat No.502, Telecom Nagar, Gachibowli, Hyderabad, Telangana – 500032</span>
              </li>
              <li className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Phone className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <a href="tel:+919121261234" className="hover:text-orange-400 hover:underline transition-colors">+91 9121261234</a>
              </li>
              <li className="flex items-center gap-2 hover:scale-105 transition-transform">
                <Mail className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <a href="mailto:booking@skylogisticshub.com" className="hover:text-orange-400 hover:underline transition-colors">booking@skylogisticshub.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="border-t border-[#7A7F84]/30 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm">
            <Link
              to="/privacy-policy"
              className="text-[#e0e0e0] hover:text-orange-400 hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="hidden sm:inline text-[#7A7F84]">|</span>
            <Link
              to="/terms-and-conditions"
              className="text-[#e0e0e0] hover:text-orange-400 hover:underline transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="border-t border-[#7A7F84]/30 mt-8 pt-6 text-center text-sm text-[#e0e0e0]/80">
          <p>&copy; {new Date().getFullYear()} Sky Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
