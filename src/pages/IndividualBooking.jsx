import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, User, Mail, Phone, MapPin, Calendar, Clock, Car, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fleetData } from "@/utils/mockData";

const IndividualBooking = () => {
  const [searchParams] = useSearchParams();
  const vehicleId = searchParams.get("vehicle");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    vehicleType: "",
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  useEffect(() => {
    if (vehicleId) {
      const vehicle = fleetData.find((v) => v.id === Number(vehicleId));
      if (vehicle) {
        setFormData((prev) => ({ ...prev, vehicleType: vehicle.name }));
      }
    }
  }, [vehicleId]);

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Full name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!/^[+]?[0-9\s-()]{6,}$/.test(value.replace(/\s/g, ''))) {
          newErrors.phone = 'Please enter a valid phone number (minimum 6 digits)';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'pickupLocation':
        if (!value.trim()) {
          newErrors.pickupLocation = 'Pickup location is required';
        } else {
          delete newErrors.pickupLocation;
        }
        break;
      case 'dropLocation':
        if (!value.trim()) {
          newErrors.dropLocation = 'Drop location is required';
        } else {
          delete newErrors.dropLocation;
        }
        break;
      case 'date':
        if (!value) {
          newErrors.date = 'Date is required';
        } else if (new Date(value) < new Date().setHours(0, 0, 0, 0)) {
          newErrors.date = 'Date cannot be in the past';
        } else {
          delete newErrors.date;
        }
        break;
      case 'time':
        if (!value) {
          newErrors.time = 'Time is required';
        } else {
          delete newErrors.time;
        }
        break;
      case 'vehicleType':
        if (!value) {
          newErrors.vehicleType = 'Vehicle type is required';
        } else {
          delete newErrors.vehicleType;
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Format phone number
    if (name === 'phone') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(\d{5})(\d{5})/, '+91 $1$2 $3');
      setFormData({ ...formData, [name]: formatted });
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      validateField(name, value);
    }
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) {
        isValid = false;
      }
    });
    return isValid;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      dropLocation: "",
      date: "",
      time: "",
      vehicleType: "",
    });
    setErrors({});
  };

  const [processingToast, setProcessingToast] = useState(null);

   const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted!", formData); // Debug log

    if (!validateForm()) {
      console.log("Validation failed"); // Debug log
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form before submitting.",
        variant: "destructive",
      });
      return;
    }

    console.log("Validation passed, starting submission"); // Debug log
    setIsLoading(true);

    // Show processing toast and store reference
    const processing = toast({
      title: "Processing...",
      description: "Your booking is being processed.",
    });
    console.log("Processing toast created:", processing);
    setProcessingToast(processing);

    const formDataToSend = {
      access_key: "9d3e664b-fa9e-45f1-9d58-8067293b844f",
      subject: "New Individual Booking Request",
      from_name: formData.name,
      email: formData.email,
      replyto: formData.email,
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Pickup Location: ${formData.pickupLocation}
        Drop Location: ${formData.dropLocation}
        Date: ${formData.date}
        Time: ${formData.time}
        Vehicle Type: ${formData.vehicleType}
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

        console.log("API call successful"); // Debug log

        // Dismiss processing toast before showing success
        if (processing) {
          processing.dismiss();
        }
        toast({
          title: "Booking Confirmed!",
          description: "Your booking has been submitted successfully.",
          duration: 5000,
          variant: "default",
        });
        setIsSubmitted(true);

        // Also show a simple success toast as backup
        setTimeout(() => {
          const backupToast = toast({
            title: "Success!",
            description: "Booking completed successfully!",
            duration: 3000,
          });
          console.log("Backup toast created:", backupToast);
        }, 500);


        // Optional fallback alert
        setTimeout(() => {
          alert("🎉 Booking Confirmed! Your ride has been booked successfully.");
        }, 1000);

        // Scroll smoothly to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

        // Reset form
        setTimeout(() => {
          console.log("Resetting form");
          resetForm();
        }, 1000);
      } else {
        if (processing) processing.dismiss();
        toast({
          title: "Submission Failed",
          description: "Please try again later.",
          variant: "destructive",
        });
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (processing) processing.dismiss();
      toast({
        title: "Booking Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center glass-card-light rounded-2xl p-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle className="w-12 h-12 text-primary" />
              </motion.div>
              <h2 className="font-display font-bold text-3xl text-foreground mb-4">
                Booking Successful!
              </h2>
              <p className="text-muted-foreground mb-8 ">
                Your ride has been confirmed. Check your email for booking details.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>Book Another Ride</Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-500/20 rounded-full blur-3xl transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <Header />
      
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground mb-4">
              Book Your <span className="text-gradient">Ride</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick and easy booking for individual travelers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 relative"
          >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl pointer-events-none"></div>
            <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={`transition-all duration-200 ${errors.name ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                  required
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`transition-all duration-200 ${errors.email ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className={`transition-all duration-200 ${errors.phone ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="pickupLocation" className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600" />
                    Pickup Location *
                  </Label>
                  <Input
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="Enter pickup address"
                    className={`transition-all duration-200 ${errors.pickupLocation ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.pickupLocation && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.pickupLocation}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="dropLocation" className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    Drop Location *
                  </Label>
                  <Input
                    id="dropLocation"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleInputChange}
                    placeholder="Enter drop address"
                    className={`transition-all duration-200 ${errors.dropLocation ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.dropLocation && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.dropLocation}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="date" className="text-sm font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Travel Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`transition-all duration-200 ${errors.date ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.date && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.date}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="time" className="text-sm font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Pickup Time *
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className={`transition-all duration-200 ${errors.time ? 'border-red-500 focus:border-red-500' : 'focus:border-primary'} h-12`}
                    required
                  />
                  {errors.time && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm flex items-center gap-1"
                    >
                      {errors.time}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="vehicleType" className="text-sm font-semibold flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Select Vehicle *
                </Label>
                <Select value={formData.vehicleType} onValueChange={(value) => handleSelectChange('vehicleType', value)}>
                  <SelectTrigger className={`h-12 ${errors.vehicleType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Choose your preferred vehicle" />
                  </SelectTrigger>
                  <SelectContent 
                    side="top" 
                    className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl z-50 max-h-60 overflow-y-auto"
                  >
                    {fleetData.map((vehicle) => (
                      <SelectItem key={vehicle.id} value={vehicle.name} className="hover:bg-primary/10 focus:bg-primary/10 cursor-pointer">
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="font-medium">{vehicle.name}</span>
                          <span className="text-xs text-muted-foreground ml-auto">₹{vehicle.pricePerKm}/km</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.vehicleType && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    {errors.vehicleType}
                  </motion.p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing Booking...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </motion.div>
              
              {/* Terms & Conditions Checkbox */}
              <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="acceptTerms"
                    checked={acceptTerms}
                    onCheckedChange={setAcceptTerms}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="acceptTerms" className="text-sm font-semibold text-blue-900 cursor-pointer">
                      I accept the{" "}
                      <a
                        href="/terms-and-conditions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline font-medium"
                      >
                        Privacy Policy
                      </a>
                    </Label>
                    <p className="text-xs text-blue-700 mt-1">
                      By checking this box, you agree to our terms of service and data processing policies.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>By booking, you agree to our terms and conditions</p>
              </div>
            </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndividualBooking;
