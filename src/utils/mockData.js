// Mock data for SKY LOGISTICS corporate cab booking website

export const fleetData = [
  {
    id: 1,
    name: "Executive Sedan",
    category: "sedan",
    type: "Business",
    seating: 4,
    price: 2500,
    pricePerKm: 15,
    features: [
      "Premium Comfort",
      "Professional Driver",
      "Wi-Fi",
      "Bottled Water",
      "AC",
      "GPS Tracking",
    ],
    image:
      "https://media.istockphoto.com/id/170107445/photo/white-smart-car.jpg?s=612x612&w=0&k=20&c=PRHWIYHunkjEy0K8CusBaNc-KHgF_s0sXxNHMmCuRwA=" /* /pexels-alexgtacar-745150-1592384.jpg */,
    available: true,
    baggage: 2,
  },
  {
    id: 2,
    name: "Luxury SUV",
    category: "suv",
    type: "Business",
    seating: 6,
    price: 3500,
    pricePerKm: 22,
    features: [
      "Spacious Interior",
      "Extra Luggage",
      "Premium Sound",
      "Climate Control",
      "Wi-Fi",
      "Sunroof",
    ],
    image:
      "https://t4.ftcdn.net/jpg/07/42/50/05/360_F_742500551_Ae2dvu7igt9oyf09DxFEfBrXYhuLrq4w.jpg" /* /pexels-mikebirdy-810357.jpg */,
    available: true,
    baggage: 4,
  },
  {
    id: 3,
    name: "BMW 7 Series",
    category: "luxury",
    type: "Executive",
    seating: 4,
    price: 4500,
    pricePerKm: 35,
    features: [
      "Ultimate Luxury",
      "VIP Service",
      "Champagne",
      "Massage Seats",
      "Privacy Glass",
      "Entertainment",
    ],
    image:
      "https://www.carbike360.ae/_next/image?url=https%3A%2F%2Fcarbike360-ae.s3.me-central-1.amazonaws.com%2Fmedium_BMW_7_Series_35446b286f.jpg&w=3840&q=75" /* /pexels-pixabay-164634.jpg */,
    available: true,
    baggage: 3,
  },
  {
    id: 4,
    name: "Mercedes V-Class",
    category: "van",
    type: "Group",
    seating: 7,
    price: 5000,
    pricePerKm: 28,
    features: [
      "Premium Group Travel",
      "Executive Seating",
      "AC",
      "Entertainment System",
      "Refreshments",
    ],
    image:
      "https://www.mercedes-benz.co.id/media/ul0bhsuu/v-class_available-models_554-x-369.png" /* /pexels-trace-707046.jpg */,
    available: true,
    baggage: 6,
  },
  {
    id: 5,
    name: "Tempo Traveller",
    category: "van",
    type: "Corporate",
    seating: 12,
    price: 6000,
    pricePerKm: 25,
    features: [
      "Large Group Travel",
      "Comfortable Seating",
      "AC",
      "Luggage Space",
      "Experienced Driver",
    ],
    image:
      "https://i.pinimg.com/736x/ee/f3/97/eef39787e6c30a821dc81cafe21bc3d6.jpg" /* /pexels-alexgtacar-745150-1592384.jpg */,
    available: true,
    baggage: 8,
  },
  {
    id: 6,
    name: "Audi A6",
    category: "luxury",
    type: "VIP",
    seating: 4,
    price: 5200,
    pricePerKm: 40,
    features: [
      "Luxury Experience",
      "Premium Sound",
      "Leather Seats",
      "Climate Control",
      "Professional Chauffeur",
    ],
    image:
      "https://i.pinimg.com/736x/c5/e2/4e/c5e24eab84569e0f0baf5eeedad31306.jpg" /* /pexels-mikebirdy-810357.jpg */,
    available: false,
    baggage: 2,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Tech Solutions Inc.",
    role: "HR Manager",
    content:
      "Exceptional service! Their corporate booking system has streamlined our employee transportation. Highly professional drivers and premium fleet.",
    rating: 5,
    avatar: "/avatars/rajesh.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Global Enterprises",
    role: "Operations Head",
    content:
      "Reliable and efficient. We've been using their services for over a year now. The booking process is seamless and the support team is outstanding.",
    rating: 5,
    avatar: "/avatars/priya.jpg",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Innovation Labs",
    role: "CEO",
    content:
      "Premium quality service at competitive rates. Perfect for our executive team. The fleet is well-maintained and drivers are courteous.",
    rating: 5,
    avatar: "/avatars/amit.jpg",
  },
  {
    id: 4,
    name: "Sanjay Mehta",
    company: "Financial Partners Ltd.",
    role: "Director",
    content:
      "Outstanding corporate service. The dedicated account manager makes everything so smooth. Highly recommended for business travel.",
    rating: 5,
    avatar: "/avatars/sanjay.jpg",
  },
  {
    id: 5,
    name: "Anita Desai",
    company: "Creative Studios",
    role: "Marketing Director",
    content:
      "Impressive attention to detail and punctuality. Our creative team relies on their service for client meetings and photoshoots. Always professional and accommodating.",
    rating: 5,
    avatar: "/avatars/anita.jpg",
  },
  {
    id: 6,
    name: "Vikram Singh",
    company: "Manufacturing Corp",
    role: "Supply Chain Manager",
    content:
      "Excellent logistics support for our factory visits and supplier meetings. The drivers are knowledgeable about industrial areas and always arrive prepared.",
    rating: 5,
    avatar: "/avatars/vikram.jpg",
  },
];

export const stats = [
  { label: "Companies Served", value: 500, suffix: "+" },
  { label: "Happy Customers", value: 50000, suffix: "+" },
  { label: "Fleet Vehicles", value: 200, suffix: "+" },
  { label: "Cities Covered", value: 25, suffix: "+" },
  { label: "Professional Drivers", value: 350, suffix: "+" },
  { label: "Service Rating", value: 4.9, suffix: "/5" },
];

export const services = [
  {
    icon: "Building2",
    title: "Corporate Solutions",
    description:
      "Tailored transportation solutions for businesses of all sizes with dedicated account management and billing.",
    features: [
      "Dedicated Account Manager",
      "Monthly Billing",
      "Customized Reporting",
    ],
  },
  {
    icon: "Users",
    title: "Employee Commute",
    description:
      "Safe and reliable daily commute services for your workforce with flexible scheduling and route optimization.",
    features: [
      "Route Optimization",
      "Flexible Scheduling",
      "Real-time Tracking",
    ],
  },
  {
    icon: "Calendar",
    title: "Event Transportation",
    description:
      "Comprehensive logistics for corporate events, conferences, business meetings and client hospitality.",
    features: ["Event Planning", "Multiple Vehicles", "Coordination Support"],
  },
  {
    icon: "Shield",
    title: "Safety First",
    description:
      "Verified drivers, real-time tracking, 24/7 support and comprehensive insurance for complete peace of mind.",
    features: ["Verified Drivers", "24/7 Support", "GPS Tracking"],
  },
  {
    icon: "Globe",
    title: "Airport Transfers",
    description:
      "Punctual airport pickups and drops with flight tracking and professional meet & greet services.",
    features: ["Flight Tracking", "Meet & Greet", "Wait Time Included"],
  },
  {
    icon: "Briefcase",
    title: "Executive Travel",
    description:
      "Premium services for C-level executives and important business guests with highest privacy standards.",
    features: ["Executive Vehicles", "Privacy Focus", "Premium Amenities"],
  },
];

export const clientLogos = [
  { name: "Tech Corp", logo: "/logos/tech-corp.png" },
  { name: "Global Solutions", logo: "/logos/global-solutions.png" },
  { name: "Innovation Labs", logo: "/logos/innovation-labs.png" },
  { name: "Enterprise Systems", logo: "/logos/enterprise-systems.png" },
  { name: "Digital Ventures", logo: "/logos/digital-ventures.png" },
  { name: "Future Tech", logo: "/logos/future-tech.png" },
];

export const bookingSteps = [
  {
    step: 1,
    title: "Select Vehicle",
    description: "Choose from our premium fleet based on your requirements",
    icon: "Car",
  },
  {
    step: 2,
    title: "Enter Details",
    description: "Provide pickup, drop locations and travel timing",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Confirm Booking",
    description: "Review details and confirm your reservation",
    icon: "CheckCircle",
  },
  {
    step: 4,
    title: "Enjoy Ride",
    description: "Sit back and experience premium transportation",
    icon: "Star",
  },
];

export const faqData = [
  {
    category: "Booking",
    questions: [
      {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 2-3 hours in advance for best availability. For corporate accounts, we can accommodate last-minute requests based on fleet availability.",
      },
      {
        question: "Can I modify my booking after confirmation?",
        answer:
          "Yes, you can modify pickup time, location, or vehicle type up to 1 hour before scheduled pickup through our app or by calling customer support.",
      },
    ],
  },
  {
    category: "Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, UPI, net banking, and corporate billing for registered business accounts.",
      },
      {
        question: "Do you offer corporate billing?",
        answer:
          "Yes, we provide monthly consolidated billing for corporate clients with detailed trip reports and expense categorization.",
      },
    ],
  },
  {
    category: "Services",
    questions: [
      {
        question: "Do you provide outstation services?",
        answer:
          "Yes, we offer outstation services with experienced drivers. Additional charges apply for tolls, driver accommodation, and return trip.",
      },
      {
        question: "Is Wi-Fi available in all vehicles?",
        answer:
          "Wi-Fi is available in our Business and Executive category vehicles. Please specify this requirement while booking.",
      },
    ],
  },
];
