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
    id: "WOM",
    title: "Word Of Mouth",
    services: ["IOS/Android App", "Custom App", "Social Media App"],
    image: "/mockups/wom.webp",
    alt: "Word Of Mouth project mockup",
  },
  {
    id: "Kopit",
    title: "Kopit Dashboard",
    services: ["Software Development", "Custom CRM"],
    image: "/mockups/kopit.png",
    alt: "Kopit project mockup",
  },
  {
    id: "Minimap",
    title: "Minimap",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/ferrati.png",
    alt: "Minimap",
  },
  {
    id: "peak-creations",
    title: "Peak Creations",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/kinimatic.webp",
    alt: "Peak Creations project mockup",
  },
  {
    id: "vita-lenta-2",
    title: "Vita Lenta",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/peak.webp",
    alt: "Vita Lenta project mockup",
  },
  {
    id: "vita-lenta-3",
    title: "Vita Lenta",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/vitalenta.webp",
    alt: "Vita Lenta project mockup",
  },
  {
    id: "rev-productions",
    title: "Rev Productions",
    services: ["Web Design & Development", "Branding"],
    image: "/mockups/rev.webp",
    alt: "Rev Productions project mockup",
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
