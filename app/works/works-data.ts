export interface WorkItem {
  id: string;
  title: string;
  services: string[];
  image: string;
  alt: string;
}

export interface Industry {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    id: "word-of-mouth",
    title: "Word Of Mouth",
    services: [
      "iOS/Android App",
      "Social Media Platform",
      "Mobile Development",
    ],
    image: "/mockups/wom.webp",
    alt: "Word Of Mouth social media app mockup showcasing mobile interface",
  },
  {
    id: "kopit-dashboard",
    title: "Kopit Dashboard",
    services: ["Custom CRM", "Software Development", "Dashboard Design"],
    image: "/mockups/kopit.png",
    alt: "Kopit CRM dashboard interface with analytics and management tools",
  },
  {
    id: "minimap",
    title: "Minimap",
    services: ["Web Design & Development", "Branding", "Luxury UI/UX"],
    image: "/mockups/ferrati.png",
    alt: "Minimap luxury website design with premium branding",
  },

  {
    id: "elite-property",
    title: "Elite Property",
    services: ["Real Estate ", "Property Management ", "Web Development"],
    image: "/mockups/elite-property.png",
    alt: "Elite Property real estate management platform interface",
  },
  {
    id: "ai-lead-generation",
    title: "AI Lead Generation & Outreach",
    services: ["AI Automation", "Lead Generation", "Marketing Technology"],
    image: "/mockups/ai-lead-generati.jpg",
    alt: "AI-powered lead generation and cold outreach automation platform",
  },

  {
    id: "ai-voice-platform",
    title: "AI Call Agent",
    services: ["AI Integration", "Voice Technology", "Web Application"],
    image: "/mockups/ai-voice-platform.png",
    alt: "AI Voice assistant platform with voice recognition interface",
  },
  {
    id: "dts-driver-dashboard",
    title: "DTS Website",
    services: [
      "Logistics Software",
      "Client Management",
      "Dashboard Development",
    ],
    image: "/mockups/dts-dashboard.webp",
    alt: "Direct Transport Solutions driver dashboard with real-time tracking",
  },
  {
    id: "dts-driver-dashboard",
    title: "Driver Dashboard",
    services: [
      "Logistics Software",
      "Driver Management",
      "Dashboard Development",
    ],
    image: "/mockups/DTS Driver.png",
    alt: "Direct Transport Solutions driver dashboard with real-time tracking",
  },
  {
    id: "ferrati",
    title: "Ferrati",
    services: ["Web Design & Development", "Branding", "Luxury UI/UX"],
    image: "/mockups/feratti.png",
    alt: "Ferrati luxury website design with premium branding",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "sportswear",
    title: "Sportswear & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1528",
    alt: "Sportswear & Manufacturing industry",
  },
  {
    id: "foodtech",
    title: "FoodTech & Social Platforms",
    image:
      "https://images.unsplash.com/photo-1685810332449-22666f83adf2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
    alt: "FoodTech & Social Platforms industry",
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Management",
    image:
      "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1428",
    alt: "Real Estate & Property Management industry",
  },
  {
    id: "logistics",
    title: "Transport & Logistics Solutions",
    image:
      "https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
    alt: "Transport & Logistics Solutions industry",
  },
  {
    id: "education",
    title: "Education & Learning Systems",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473",
    alt: "Education & Learning Systems industry",
  },
  {
    id: "technology",
    title: "Technology & Software Development",
    image:
      "https://plus.unsplash.com/premium_photo-1669686968068-ef4133a3e782?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025",
    alt: "Technology & Software Development industry",
  },
  {
    id: "nonprofit",
    title: "Nonprofit & Social Impact",
    image:
      "https://images.unsplash.com/photo-1643321611132-15f7b8a63347?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    alt: "Nonprofit & Social Impact industry",
  },
];

export const WORKS_CONTENT = {
  hero: {
    title: "Collection of Our Works",
    description:
      "Case studies offer a unique opportunity to explore real-world examples of challenges, solutions, and results.",
  },
  industries: {
    badge: "Industries we serve",
    title: "We have extensive experience across multiple industries",
    description:
      "Our product designers have completed projects in different niches. They know how to add business value and provide.",
  },
  caseStudies: {
    badge: "Case Studies",
    title: "We have a diverse portfolio of successful case studies",
    description:
      "Case studies offer a unique opportunity to explore real-world examples of challenges, solutions, and results.",
  },
  cta: {
    description: "Be our next client in this section!",
    title: "Let us get you a coffee.",
    buttonText: "Book a call",
  },
};
