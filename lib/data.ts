import type { SceneId } from "./media";

/* ============ NAV ============ */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

/* ============ CLIENTS ============ */

export const clients = [
  "NORDMARK",
  "Atelier Une",
  "HALVORSEN",
  "Kessler & Co",
  "MERIDIAN",
  "Volt Athletics",
  "CASA LUMEN",
  "Øst Hotel",
  "PRISMWEAR",
  "Ferro Coffee",
  "LINDQVIST",
  "Aria Estates",
] as const;

/* ============ STATS ============ */

export const stats = [
  { value: 140, suffix: "+", label: "Brands transformed" },
  { value: 12, suffix: "", label: "International awards" },
  { value: 320, suffix: "M", label: "Campaign impressions" },
  { value: 9, suffix: " yrs", label: "Crafting stories" },
] as const;

/* ============ SERVICES ============ */

export interface Service {
  index: string;
  slug: string;
  title: string;
  scene: SceneId;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    index: "01",
    slug: "brand-identity",
    title: "Brand Identity",
    scene: "brand-identity",
    tagline: "Identities that outlive trends.",
    description:
      "We excavate what makes a business singular and forge it into a visual system — naming, logotype, typography, color, voice — engineered to be recognized in half a second and remembered for a decade.",
    deliverables: [
      "Brand strategy & positioning",
      "Naming & verbal identity",
      "Logo & visual systems",
      "Brand guidelines",
      "Packaging & print",
    ],
  },
  {
    index: "02",
    slug: "content-creation",
    title: "Content Creation",
    scene: "content-creation",
    tagline: "Stories built frame by frame.",
    description:
      "A full in-house production unit — directors, writers, cinematographers — producing campaign films, commercials and branded content that people actually choose to watch.",
    deliverables: [
      "Campaign concepts",
      "Commercial production",
      "Art direction",
      "Copywriting & scripts",
      "Post-production & grading",
    ],
  },
  {
    index: "03",
    slug: "reels-video",
    title: "Reels & Video",
    scene: "reels-video",
    tagline: "Scroll-stopping, every time.",
    description:
      "Short-form engineered for the feed. We design vertical narratives with editorial precision — hooks, pacing, sound design — turning attention into audiences and audiences into revenue.",
    deliverables: [
      "Social-first video strategy",
      "Reels & short-form production",
      "Motion graphics",
      "Sound design",
      "Platform optimization",
    ],
  },
  {
    index: "04",
    slug: "photography",
    title: "Photography",
    scene: "photography",
    tagline: "Light, obsessively controlled.",
    description:
      "Product, campaign and editorial photography with a cinematographer's eye. Every frame is art-directed, lit and graded to carry the brand — nothing is left to chance.",
    deliverables: [
      "Product photography",
      "Campaign & editorial shoots",
      "Set design & styling",
      "Retouching & grading",
      "Image libraries",
    ],
  },
  {
    index: "05",
    slug: "performance-marketing",
    title: "Performance Marketing",
    scene: "reels-video",
    tagline: "Beauty that converts.",
    description:
      "Craft means nothing if nobody sees it. We run full-funnel paid and organic programs where creative and data share one desk — measured, iterated, and scaled without diluting the brand.",
    deliverables: [
      "Paid social & search",
      "Funnel strategy",
      "Creative testing systems",
      "Analytics & attribution",
      "Growth reporting",
    ],
  },
];

/* ============ PROJECTS ============ */

export type ProjectCategory = "Visual Identity" | "Reels & Video" | "Photography";

export const projectCategories: ProjectCategory[] = [
  "Visual Identity",
  "Reels & Video",
  "Photography",
];

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  scene: SceneId;
  accent: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  results: { value: string; label: string }[];
  services: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "nordmark-rebrand",
    title: "A Century of Steel, Reforged",
    client: "NORDMARK",
    category: "Visual Identity",
    year: "2025",
    scene: "brand-identity",
    accent: "#f79e83",
    summary:
      "A complete rebrand of a 104-year-old Scandinavian steel manufacturer — from industrial relic to design-world reference.",
    challenge:
      "Nordmark's equity lived in the factories, not the brand. Four generations of engineering excellence were hidden behind a mark that hadn't been touched since 1987, and a new generation of architects simply didn't consider them.",
    approach:
      "We spent three weeks inside their mills before touching a sketchbook. The identity we built is drawn from the geometry of rolled steel — a monolithic wordmark, a typographic system with the precision of a technical drawing, and a photographic language shot entirely on the factory floor.",
    outcome:
      "The rebrand relaunched at Milan Design Week and became the most-covered B2B identity of the year in Scandinavian design press.",
    results: [
      { value: "3.4×", label: "Inbound architect enquiries" },
      { value: "68%", label: "Brand recall uplift" },
      { value: "2", label: "International design awards" },
    ],
    services: ["Brand strategy", "Visual identity", "Guidelines", "Launch campaign"],
    featured: true,
  },
  {
    slug: "volt-athletics-reels",
    title: "Thirty Seconds of Adrenaline",
    client: "Volt Athletics",
    category: "Reels & Video",
    year: "2025",
    scene: "reels-video",
    accent: "#815da7",
    summary:
      "A 48-episode vertical film series that took a challenger sportswear label from 40K to 1.2M followers in nine months.",
    challenge:
      "Volt had product and athletes but no voice in the feed. Their content looked like everyone else's — and in short-form, looking like everyone else means not existing.",
    approach:
      "We treated every reel as a 30-second sports film: anamorphic lenses, real athletes at real 5 a.m. sessions, sound design built from breath and impact. One visual grammar, forty-eight stories, zero stock energy.",
    outcome:
      "The series became Volt's primary acquisition channel, outperforming paid media on cost-per-follower by a factor of eleven.",
    results: [
      { value: "1.2M", label: "Followers in 9 months" },
      { value: "94M", label: "Organic views" },
      { value: "11×", label: "Cheaper than paid acquisition" },
    ],
    services: ["Content strategy", "Reels production", "Sound design", "Distribution"],
    featured: true,
  },
  {
    slug: "casa-lumen-photography",
    title: "Objects in Their Own Light",
    client: "CASA LUMEN",
    category: "Photography",
    year: "2024",
    scene: "photography",
    accent: "#e663a5",
    summary:
      "A 200-image photographic library for a sculptural lighting house — shot like still-life cinema, graded like a film.",
    challenge:
      "Casa Lumen's fixtures are hand-blown sculptures, but their imagery flattened them into catalogue products. E-commerce conversion was strong; desire was not.",
    approach:
      "We built sets like film scenes — travertine, raw plaster, dawn-graded light — and photographed every fixture as the protagonist of a quiet story. Macro passes captured the glass; wide compositions gave each piece architecture to live in.",
    outcome:
      "The library now powers everything from the flagship site to Salone del Mobile campaigns, and doubled average session time on product pages.",
    results: [
      { value: "+212%", label: "Product page dwell time" },
      { value: "+41%", label: "Average order value" },
      { value: "200", label: "Images delivered" },
    ],
    services: ["Art direction", "Set design", "Product photography", "Retouch & grade"],
    featured: true,
  },
  {
    slug: "ost-hotel-identity",
    title: "A Hotel That Whispers",
    client: "Øst Hotel",
    category: "Visual Identity",
    year: "2024",
    scene: "brand-identity",
    accent: "#c9a0e0",
    summary:
      "Naming, identity and print system for a 31-room hotel carved into a former grain silo on the Oslo fjord.",
    challenge:
      "The building was extraordinary; the brand didn't exist. The owners needed an identity strong enough to justify rates 40% above the market before a single guest had stayed.",
    approach:
      "The name Øst — east, toward the sunrise over the fjord — set the tone. We designed a typographic identity that behaves like the building: massive, quiet, warm at the edges. Every printed piece, from key cards to menus, is letterpressed on stone paper.",
    outcome:
      "Øst opened at 92% occupancy with international press coverage in Monocle, Wallpaper* and Kinfolk.",
    results: [
      { value: "92%", label: "Opening occupancy" },
      { value: "+40%", label: "Rate premium vs. market" },
      { value: "14", label: "Press features at launch" },
    ],
    services: ["Naming", "Visual identity", "Print system", "Signage"],
    featured: false,
  },
  {
    slug: "ferro-coffee-films",
    title: "Ritual, at 120 Frames",
    client: "Ferro Coffee",
    category: "Reels & Video",
    year: "2024",
    scene: "content-creation",
    accent: "#f38d90",
    summary:
      "A cinematic launch film and 12-part reel series for a specialty roaster entering three new markets at once.",
    challenge:
      "Ferro was opening in Berlin, Copenhagen and Amsterdam within one quarter — three launches, one story, no local awareness anywhere.",
    approach:
      "One hero film, shot in the roastery over two nights: steam, flame, and hands, at 120fps. We then cut twelve vertical chapters from the same footage, each engineered as a self-contained hook for the feed.",
    outcome:
      "The campaign carried all three openings; the Berlin launch queue wrapped around the block before the doors opened.",
    results: [
      { value: "3", label: "Markets launched at once" },
      { value: "18M", label: "Campaign views" },
      { value: "-63%", label: "Cost per store visit" },
    ],
    services: ["Campaign film", "Reels series", "Media planning"],
    featured: false,
  },
  {
    slug: "prismwear-campaign",
    title: "Color Against Concrete",
    client: "PRISMWEAR",
    category: "Photography",
    year: "2023",
    scene: "photography",
    accent: "#9770c9",
    summary:
      "A brutalist-set campaign shoot that repositioned a streetwear label as a design object worth collecting.",
    challenge:
      "Prismwear's drops sold out but resold cheap — the brand had hype without weight. They wanted imagery that would make the product feel inevitable in a gallery, not just a feed.",
    approach:
      "We shot the collection against raw concrete megastructures at dawn, treating each garment like sculpture: one color, one form, one shadow. No models' faces, no logos in frame — just fabric and architecture negotiating light.",
    outcome:
      "Resale values rose within one season and the campaign was picked up as a case study by two photography annuals.",
    results: [
      { value: "+87%", label: "Average resale value" },
      { value: "2", label: "Photography annual features" },
      { value: "40", label: "Campaign images" },
    ],
    services: ["Campaign concept", "Location scouting", "Photography", "Grading"],
    featured: false,
  },
];

/* ============ REVIEWS ============ */

export interface Review {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  rating: number;
}

export const reviews: Review[] = [
  {
    quote:
      "They didn't redesign our brand. They found the one we'd been hiding for a hundred years and had the nerve to show it to us.",
    name: "Ingrid Halvorsen",
    role: "CEO",
    company: "NORDMARK",
    project: "nordmark-rebrand",
    rating: 5,
  },
  {
    quote:
      "Every agency promised us virality. CORECAST promised us a point of view — and that's what actually went viral.",
    name: "Marcus Oyelaran",
    role: "Founder",
    company: "Volt Athletics",
    project: "volt-athletics-reels",
    rating: 5,
  },
  {
    quote:
      "The photography changed how we price. When your product looks like cinema, nobody asks for a discount.",
    name: "Alessandra Ferri",
    role: "Creative Director",
    company: "CASA LUMEN",
    project: "casa-lumen-photography",
    rating: 5,
  },
  {
    quote:
      "We opened a hotel nobody had heard of at rates nobody believed — full. The identity did years of marketing before we spent a single krone on ads.",
    name: "Jonas Øst-Berg",
    role: "Owner",
    company: "Øst Hotel",
    project: "ost-hotel-identity",
    rating: 5,
  },
  {
    quote:
      "Three cities, one quarter, one team. They ran it like a film production, not a marketing calendar — and it showed everywhere.",
    name: "Elena Rduch",
    role: "CMO",
    company: "Ferro Coffee",
    project: "ferro-coffee-films",
    rating: 5,
  },
  {
    quote:
      "Working with them feels like being directed. You arrive with a product and leave with a story you didn't know you had.",
    name: "Dev Anand-Kruger",
    role: "Brand Lead",
    company: "PRISMWEAR",
    project: "prismwear-campaign",
    rating: 5,
  },
];

/* ============ TEAM ============ */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: "Mara Castellane",
    role: "Founder / Creative Director",
    bio: "Ex-film director. Believes every brand is a character study waiting to be cast.",
  },
  {
    name: "Theo Lindqvist",
    role: "Head of Strategy",
    bio: "Turns balance sheets into narratives. The one asking 'why' until it hurts.",
  },
  {
    name: "Ada Okonkwo",
    role: "Design Director",
    bio: "Typography obsessive. Can spot a fake grid from across the room.",
  },
  {
    name: "Rafael Duarte",
    role: "Director of Photography",
    bio: "Paints with practicals. Refuses to light anything the easy way.",
  },
  {
    name: "Yuki Sørensen",
    role: "Head of Motion",
    bio: "Cut her first reel at fourteen. Thinks in 24 frames per second.",
  },
  {
    name: "Leon Abramov",
    role: "Performance Lead",
    bio: "The data romantic. Proves beautiful work converts better — weekly.",
  },
];

/* ============ VALUES / MANIFESTO ============ */

export const values = [
  {
    title: "Story before spectacle",
    body: "Motion, film and craft are instruments. The story is the score. We never ship decoration without a narrative reason to exist.",
  },
  {
    title: "Taste is a discipline",
    body: "Premium isn't a mood board — it's a thousand small refusals. We edit relentlessly, and we say no more often than yes.",
  },
  {
    title: "Beauty must perform",
    body: "We measure everything we make. Craft that doesn't move the business is a hobby, and we don't bill for hobbies.",
  },
  {
    title: "Direction over decoration",
    body: "Anyone can make things pretty. We make decisions — sharp, opinionated, defensible — and the work inherits that spine.",
  },
] as const;

/* ============ CAREERS ============ */

export interface Opening {
  title: string;
  team: string;
  type: string;
  location: string;
  blurb: string;
}

export const openings: Opening[] = [
  {
    title: "Senior Brand Designer",
    team: "Design",
    type: "Full-time",
    location: "Hybrid — Oslo / Remote EU",
    blurb:
      "You think in systems, sketch in type, and have shipped at least two identities you're still proud of.",
  },
  {
    title: "Motion Designer",
    team: "Motion",
    type: "Full-time",
    location: "On-site — Oslo",
    blurb:
      "Cinema 4D or Blender, After Effects fluency, and an allergy to default easing curves.",
  },
  {
    title: "Content Producer",
    team: "Production",
    type: "Full-time",
    location: "Hybrid — Oslo",
    blurb:
      "You run shoots like clockwork and keep directors, clients and weather on the same call sheet.",
  },
  {
    title: "Performance Marketing Manager",
    team: "Growth",
    type: "Full-time",
    location: "Remote EU",
    blurb:
      "Paid social native who reads creative as fluently as dashboards.",
  },
];

/* ============ BOOKING ============ */

export const bookingServices = [
  "Brand Identity",
  "Content Creation",
  "Reels & Video",
  "Photography",
  "Performance Marketing",
  "Full Brand Transformation",
] as const;

export const bookingBudgets = [
  "€10k – €25k",
  "€25k – €50k",
  "€50k – €100k",
  "€100k+",
] as const;

export const timeSlots = [
  "09:00",
  "10:30",
  "12:00",
  "14:00",
  "15:30",
  "17:00",
] as const;

/* ============ SITE META ============ */

export const siteConfig = {
  name: "CORECAST",
  title: "CORECAST — We Build Brands That People Remember",
  description:
    "CORECAST is a cinematic marketing agency transforming ambitious businesses into unforgettable brands through branding, content creation, photography, reels production and performance marketing.",
  url: "https://corecast.agency",
  email: "hello@corecast.agency",
  phone: "+47 22 00 14 40",
  address: "Skur 39, Vippetangen, 0150 Oslo, Norway",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Vimeo", href: "https://vimeo.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;
