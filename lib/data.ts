import {
  Building2,
  DraftingCompass,
  House,
  Layers3,
  MapPinned,
  ShieldCheck,
  UsersRound,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Residential Development",
    shortTitle: "Residential Development",
    description: "Premium villas, apartments, and gated communities planned for modern living and lasting value.",
    icon: House,
    image: "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg",
  },
  {
    number: "02",
    title: "Land Development",
    shortTitle: "Land Development",
    description: "Layout planning, plotting, and site optimization that make thoughtful use of land potential.",
    icon: MapPinned,
    image: "/images/development-sites.png",
  },
  {
    number: "03",
    title: "Infrastructure Development",
    shortTitle: "Infrastructure Development",
    description: "Roads, drainage, and integrated utilities designed as the foundation for connected developments.",
    icon: Building2,
    image: "/images/check-dam/IMG-20260919-WA0023.jpg",
  },
  {
    number: "04",
    title: "Premium Interior Development",
    shortTitle: "Premium Interiors",
    description: "Refined interior spaces aligned with modern lifestyle expectations and everyday usability.",
    icon: Layers3,
    image: "/images/jubliee-hills-kings-office/IMG-20260919-WA0154.jpg",
  },
];

export const capabilities = [
  { title: "Strategic locations", text: "Development driven by strategic location selection.", icon: MapPinned },
  { title: "Efficient design", text: "Efficient design aligned with modern residential demand.", icon: DraftingCompass },
  { title: "Controlled execution", text: "Structured execution with strict quality control.", icon: ShieldCheck },
  { title: "Premium delivery", text: "Focus on premium residential and interior delivery.", icon: House },
  { title: "Project governance", text: "Strong project governance and coordination.", icon: Workflow },
  { title: "Long-term value", text: "Long-term asset value and usability focus.", icon: UsersRound },
];

export const contact = {
  address: "2nd Floor, Capitol Towers, Plot no 1, beside N Convention Road, Surya Enclave, Madhapur, Hyderabad, Telangana 500081",
  phones: ["+91 91004 00200", "+91 99199 01999"],
  email: "info@krestoninfra.com",
  alternateEmail: "smimran12345@gmail.com",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Develop", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Kreston", href: "/capabilities" },
  { label: "Contact", href: "/contact" },
];
