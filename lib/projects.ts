export type Project = {
  id: string;
  title: string;
  category: "Infrastructure" | "Interiors" | "Fabrication" | "Residential";
  location?: string;
  summary: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "check-dam",
    title: "Check Dam",
    category: "Infrastructure",
    summary: "Civil and water-infrastructure works documented across excavation, reinforcement, concrete execution, channel formation, and site development stages.",
    images: [
      "/images/check-dam/IMG-20260919-WA0023.jpg",
      "/images/check-dam/IMG-20260112-WA0048.jpg",
      "/images/check-dam/IMG-20260918-WA0032.jpg",
      "/images/check-dam/IMG-20260918-WA0035.jpg",
      "/images/check-dam/IMG-20260918-WA0039.jpg",
      "/images/check-dam/IMG-20260918-WA0042.jpg",
    ],
  },
  {
    id: "jubilee-hills-kings-office",
    title: "Jubilee Hills — King’s Office",
    category: "Interiors",
    location: "Jubilee Hills, Hyderabad",
    summary: "A refined executive office environment with custom furniture, glazed partitions, integrated lighting, and carefully coordinated interior finishes.",
    images: [
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0154.jpg",
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0136.jpg",
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0138.jpg",
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0140.jpg",
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0148.jpg",
      "/images/jubliee-hills-kings-office/IMG-20260919-WA0156.jpg",
    ],
  },
  {
    id: "krimatix-office",
    title: "Krimatix Office",
    category: "Interiors",
    location: "Hyderabad",
    summary: "Office fit-out and interior execution shown from active finishing stages through workstation installation and final detailing.",
    images: [
      "/images/krimatix-office/IMG-20260919-WA0083.jpg",
      "/images/krimatix-office/IMG-20260919-WA0073.jpg",
      "/images/krimatix-office/IMG-20260919-WA0074.jpg",
      "/images/krimatix-office/IMG-20260919-WA0077.jpg",
      "/images/krimatix-office/IMG-20260919-WA0082.jpg",
      "/images/krimatix-office/IMG-20260919-WA0089.jpg",
    ],
  },
  {
    id: "niloufer-cafe-parking",
    title: "Niloufer Café Parking",
    category: "Fabrication",
    location: "Hyderabad",
    summary: "Systematic structural-steel fabrication and laying for an expansive parking facility, documented through installation and finishing stages.",
    images: [
      "/images/niloufer-cafe-parking/IMG-20260919-WA0053.jpg",
      "/images/niloufer-cafe-parking/IMG-20260112-WA0011.jpg",
      "/images/niloufer-cafe-parking/IMG-20260919-WA0063.jpg",
      "/images/niloufer-cafe-parking/IMG-20260919-WA0066.jpg",
      "/images/niloufer-cafe-parking/IMG-20260919-WA0101.jpg",
      "/images/niloufer-cafe-parking/IMG-20260919-WA0115.jpg",
    ],
  },
  {
    id: "falaknuma-site",
    title: "Falaknuma Site",
    category: "Residential",
    location: "Falaknuma, Hyderabad",
    summary: "Multi-storey structural construction documented through formwork, slab casting, reinforcement, and vertical development.",
    images: [
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0058.jpg",
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0049.jpg",
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0050.jpg",
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0060.jpg",
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0068.jpg",
      "/images/villas-and-buildings/falaknuma-site/IMG-20260919-WA0069.jpg",
    ],
  },
  {
    id: "mehdipatnam-site",
    title: "Mehdipatnam Residential Building",
    category: "Residential",
    location: "Mehdipatnam, Hyderabad",
    summary: "A residential apartment building featuring coordinated exterior finishes, façade detailing, balconies, and service elements.",
    images: [
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg",
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0000.jpg",
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0001.jpg",
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0007.jpg",
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0013.jpg",
      "/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0017.jpg",
    ],
  },
  {
    id: "tandur-site",
    title: "Tandur Villa",
    category: "Residential",
    location: "Tandur, Telangana",
    summary: "A large villa captured from façade and scaffolding works through its finished classical exterior and architectural lighting.",
    images: [
      "/images/villas-and-buildings/tandur-site/IMG-20260919-WA0044.jpg",
      "/images/villas-and-buildings/tandur-site/IMG-20260112-WA0035.jpg",
      "/images/villas-and-buildings/tandur-site/IMG-20260919-WA0028.jpg",
      "/images/villas-and-buildings/tandur-site/IMG-20260919-WA0170.jpg",
      "/images/villas-and-buildings/tandur-site/IMG-20260112-WA0065.jpg",
      "/images/villas-and-buildings/tandur-site/IMG-20260919-WA0046.jpg",
    ],
  },
];

export const projectCategories = ["All", "Infrastructure", "Interiors", "Fabrication", "Residential"] as const;
