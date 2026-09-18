import {
  Building2,
  DraftingCompass,
  Factory,
  House,
  Layers3,
  Pipette,
  ScanSearch,
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
  image?: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Civil Construction Works",
    shortTitle: "Civil Construction",
    description: "Execution of structural and civil works with strict quality control and engineering precision.",
    icon: Building2,
    image: "/images/civil-structure.png",
  },
  {
    number: "02",
    title: "Infrastructure Development Projects",
    shortTitle: "Infrastructure Development",
    description: "Development of essential infrastructure with a focus on durability, safety, and long-term performance.",
    icon: Factory,
    image: "/images/infrastructure.png",
  },
  {
    number: "03",
    title: "Independent Residential Apartments & Duplex Villas",
    shortTitle: "Residential & Villas",
    description: "Construction of residential apartments and duplex villas with quality finishes and efficient design.",
    icon: House,
    image: "/images/residential-villa.png",
  },
  {
    number: "04",
    title: "Fabrication & Laying Services",
    shortTitle: "Fabrication & Laying",
    description: "Accurate fabrication and systematic laying works executed as per approved specifications.",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Interior & Exterior Construction Works",
    shortTitle: "Interior & Exterior Works",
    description: "Completion of interior and exterior elements aligned with architectural and design intent.",
    icon: DraftingCompass,
  },
  {
    number: "06",
    title: "Plumbing Contracting Services",
    shortTitle: "Plumbing Contracting",
    description: "Installation and execution of reliable plumbing systems ensuring functionality and compliance.",
    icon: Pipette,
  },
];

export const capabilities = [
  { title: "Plan & inspect", text: "Comprehensive planning, design, and inspection of civil and infrastructure projects.", icon: ScanSearch },
  { title: "Oversee execution", text: "Complete oversight of design and construction activities.", icon: ShieldCheck },
  { title: "Monitor the site", text: "Regular and periodic site visits to monitor quality, safety, and progress.", icon: Building2 },
  { title: "Guide clients", text: "Professional consultation and continuous guidance to clients and owners.", icon: UsersRound },
  { title: "Verify details", text: "Accurate interpretation and verification of drawings and technical specifications.", icon: DraftingCompass },
  { title: "Coordinate teams", text: "Strong coordination between engineers, site teams, and stakeholders.", icon: Workflow },
  { title: "Supervise quality", text: "Quality-centric execution through multi-level supervision.", icon: ShieldCheck },
];

export const contact = {
  address: "2nd Floor, Capitol Towers, Plot no 1, beside N Convention Road, Surya Enclave, Madhapur, Hyderabad, Telangana 500081",
  phones: ["+91 91004 00200", "+91 99199 01999"],
  email: "Smimran12345@gmail.com",
  website: "new.krestoninfra.com",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Kreston", href: "/capabilities" },
  { label: "Contact", href: "/contact" },
];
