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

export interface Client {
  name: string;
  description: string;
  Logo: string;
  contactInfo: string[];
}

export const clients: Client[] = [
  {
    name: "NORDMARK",
    description:
      "A Scandinavian architecture studio specializing in sustainable residential and commercial spaces.",
    Logo: "/Images/TrustedBy/Alfoad.png",
    contactInfo: ["info@nordmark.com", "+46 123 456 789", "Stockholm, Sweden"],
  },
  {
    name: "Atelier Une",
    description:
      "Creative design agency delivering premium branding and digital experiences for luxury brands.",
    Logo: "/Images/TrustedBy/Alnouzha.png",
    contactInfo: ["hello@atelierune.fr", "+33 1 42 55 81 24", "Paris, France"],
  },
  {
    name: "HALVORSEN",
    description:
      "Industrial engineering company focused on precision manufacturing and automation.",
    Logo: "/Images/TrustedBy/Alomran.png",
    contactInfo: ["contact@halvorsen.no", "+47 22 45 98 11", "Oslo, Norway"],
  },
  {
    name: "Kessler & Co",
    description:
      "Business consulting firm helping enterprises optimize strategy and digital transformation.",
    Logo: "/Images/TrustedBy/Alsaheal.png",
    contactInfo: ["office@kesslerco.com", "+49 30 555 1234", "Berlin, Germany"],
  },
  {
    name: "MERIDIAN",
    description:
      "International logistics company providing smart freight and supply chain solutions.",
    Logo: "/Images/TrustedBy/AlteabSmart.png",
    contactInfo: [
      "support@meridianlogistics.com",
      "+44 20 7123 4567",
      "London, UK",
    ],
  },
  {
    name: "Volt Athletics",
    description:
      "Sports performance company building personalized training experiences for athletes.",
    Logo: "/Images/TrustedBy/Arabica.png",
    contactInfo: ["hello@voltathletics.com", "+1 206 555 0123", "Seattle, USA"],
  },
  {
    name: "CASA LUMEN",
    description:
      "Interior design studio creating elegant living spaces with timeless aesthetics.",
    Logo: "/Images/TrustedBy/Ashtar.png",
    contactInfo: ["info@casalumen.it", "+39 06 555 8899", "Rome, Italy"],
  },
  {
    name: "Øst Hotel",
    description:
      "Boutique hospitality brand delivering premium guest experiences across Northern Europe.",
    Logo: "/Images/TrustedBy/Asset8logoideas.png",
    contactInfo: [
      "stay@osthotel.com",
      "+45 33 88 45 11",
      "Copenhagen, Denmark",
    ],
  },
  {
    name: "PRISMWEAR",
    description:
      "Modern fashion label blending sustainability with contemporary streetwear.",
    Logo: "/Images/TrustedBy/Brilant.png",
    contactInfo: [
      "support@prismwear.com",
      "+1 415 555 8877",
      "San Francisco, USA",
    ],
  },
  {
    name: "Ferro Coffee",
    description:
      "Specialty coffee roaster sourcing premium beans from farms around the world.",
    Logo: "/Images/TrustedBy/embs.png",
    contactInfo: ["coffee@ferro.com", "+61 2 8123 5566", "Sydney, Australia"],
  },
  {
    name: "LINDQVIST",
    description:
      "Furniture manufacturer known for handcrafted Scandinavian designs.",
    Logo: "/Images/TrustedBy/FataerG.png",
    contactInfo: ["sales@lindqvist.se", "+46 31 445 778", "Gothenburg, Sweden"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/Hamwi.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/HomePlast.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/Moler.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/Omaya.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/SmartCustomer.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
  {
    name: "Aria Estates",
    description:
      "Luxury real estate company offering premium residential and commercial properties.",
    Logo: "/Images/TrustedBy/StandUpAcadey.png",
    contactInfo: ["contact@ariaestates.com", "+971 4 555 6677", "Dubai, UAE"],
  },
];

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
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    scene: "influencer-marketing",
    tagline: "Connecting brands with trusted voices.",
    description:
      "We build strategic influencer partnerships that help brands reach the right audience through authentic collaborations, creative storytelling, and measurable campaigns.",
    deliverables: [
      "Influencer selection",
      "Collaboration management",
      "Script writing",
      "Performance tracking",
      "Results measurement",
    ],
  },
  {
    index: "02",
    slug: "campaign-management",
    title: "Campaign Management",
    scene: "campaign-management",
    tagline: "Creative campaigns designed to create impact.",
    description:
      "We develop and manage marketing campaigns that transform ideas into powerful experiences and help brands achieve their business objectives.",
    deliverables: [
      "Opening campaigns",
      "Seasonal campaigns",
      "Product launches",
      "Promotional campaigns",
      "Creative campaign concepts",
    ],
  },
  {
    index: "03",
    slug: "ecommerce-marketing",
    title: "E-commerce Marketing",
    scene: "ecommerce-marketing",
    tagline: "Growing online businesses through smart strategies.",
    description:
      "We optimize digital stores with data-driven marketing solutions that improve customer experience, increase conversions, and maximize revenue.",
    deliverables: [
      "E-commerce store management",
      "Product page optimization",
      "Upselling & cross-selling strategies",
      "Advertising campaigns",
      "Customer behavior analysis",
    ],
  },
  {
    index: "04",
    slug: "content-writing",
    title: "Copywriting & Content Writing",
    scene: "content-writing",
    tagline: "Words that tell your brand story.",
    description:
      "We create engaging content that communicates your message, strengthens your brand voice, and turns ideas into meaningful connections.",
    deliverables: [
      "Advertising copy",
      "Social media posts",
      "Website content",
      "Video scripts",
      "Brand storytelling",
    ],
  },
  {
    index: "05",
    slug: "seo",
    title: "Search Engine Optimization",
    scene: "seo",
    tagline: "Improving visibility in the digital world.",
    description:
      "We enhance your online presence through effective SEO strategies that improve rankings, attract relevant visitors, and support long-term growth.",
    deliverables: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Off-page SEO",
      "SEO content creation",
      "Ranking reports",
    ],
  },
  {
    index: "06",
    slug: "web-design-development",
    title: "Web Design & Development",
    scene: "web-design-development",
    tagline: "Digital experiences built for modern businesses.",
    description:
      "We design and develop responsive websites that combine attractive visuals, smooth user experiences, and reliable functionality.",
    deliverables: [
      "UX/UI design",
      "Corporate websites",
      "E-commerce websites",
      "Landing pages",
      "Website optimization",
      "Payment integration",
      "Website maintenance",
    ],
  },
  {
    index: "07",
    slug: "graphic-design",
    title: "Graphic Design",
    scene: "graphic-design",
    tagline: "Creative visuals that strengthen your brand.",
    description:
      "We create professional designs that communicate your identity and deliver a consistent visual experience across all platforms.",
    deliverables: [
      "Social media designs",
      "Advertising banners",
      "Brochures",
      "Catalogs",
      "Flyers",
      "Billboards",
      "Packaging design",
      "Print materials",
    ],
  },
  {
    index: "08",
    slug: "paid-advertising",
    title: "Paid Advertising",
    scene: "paid-advertising",
    tagline: "Turning advertising budgets into measurable results.",
    description:
      "We create targeted advertising campaigns using data analysis and optimization techniques to maximize reach, engagement, and conversions.",
    deliverables: [
      "Facebook & Instagram Ads",
      "Campaign setup",
      "Audience analysis",
      "A/B testing",
      "Performance optimization",
      "Retargeting",
      "Budget management",
      "Detailed reports",
    ],
  },
  {
    index: "09",
    slug: "content-production",
    title: "Content Production",
    scene: "content-creation",
    tagline: "Transforming ideas into powerful visual content.",
    description:
      "We produce professional visual content that captures attention, tells stories, and helps brands connect with their audiences.",
    deliverables: [
      "Professional photography",
      "Advertising videos",
      "Product photography",
      "Reels & shorts",
      "Video editing",
      "Motion graphics",
      "Script writing",
      "Production management",
    ],
  },
  {
    index: "10",
    slug: "social-media-management",
    title: "Social Media Management",
    scene: "social-media-management",
    tagline: "Building strong digital communities.",
    description:
      "We manage your social media presence with strategic content, creative designs, and continuous engagement to grow your audience.",
    deliverables: [
      "Content strategy",
      "Monthly content calendar",
      "Copywriting",
      "Post design",
      "Content scheduling",
      "Community management",
      "Reputation management",
      "Performance analysis",
    ],
  },
  {
    index: "11",
    slug: "brand-identity",
    title: "Brand Identity",
    scene: "brand-identity",
    tagline: "Identities that outlive trends.",
    description:
      "We transform your vision into a complete visual identity system that creates recognition, consistency, and a memorable brand presence.",
    deliverables: [
      "Brand strategy",
      "Logo design",
      "Color palette",
      "Typography system",
      "Brand guidelines",
      "Full branding system",
      "Rebranding",
    ],
  },
  {
    index: "12",
    slug: "marketing-strategy",
    title: "Marketing Consulting & Strategy",
    scene: "marketing-strategy",
    tagline: "Clear strategies for sustainable growth.",
    description:
      "We provide strategic marketing guidance based on market insights, customer behavior, and business goals to create effective growth plans.",
    deliverables: [
      "Market analysis",
      "Competitor research",
      "Audience analysis",
      "Buyer persona creation",
      "Marketing plans",
      "KPI definition",
      "Customer funnel strategy",
    ],
  },
];

/* ============ PROJECTS ============ */

export type ProjectCategory =
  | "Visual Identity"
  | "Reels & Video"
  | "Photography";

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
    accent: "#815da7",
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
    services: [
      "Brand strategy",
      "Visual identity",
      "Guidelines",
      "Launch campaign",
    ],
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
    services: [
      "Content strategy",
      "Reels production",
      "Sound design",
      "Distribution",
    ],
    featured: true,
  },
  {
    slug: "casa-lumen-photography",
    title: "Objects in Their Own Light",
    client: "CASA LUMEN",
    category: "Photography",
    year: "2024",
    scene: "photography",
    accent: "#815da7",
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
    services: [
      "Art direction",
      "Set design",
      "Product photography",
      "Retouch & grade",
    ],
    featured: true,
  },
  {
    slug: "ost-hotel-identity",
    title: "A Hotel That Whispers",
    client: "Øst Hotel",
    category: "Visual Identity",
    year: "2024",
    scene: "brand-identity",
    accent: "#815da7",
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
    accent: "#815da7",
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
    accent: "#815da7",
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
    services: [
      "Campaign concept",
      "Location scouting",
      "Photography",
      "Grading",
    ],
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
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Mara Castellane",
    role: "Founder / Creative Director",
    bio: "Ex-film director. Believes every brand is a character study waiting to be cast.",
    image: "/images/team/mara-castellane.jpg",
  },
  {
    name: "Theo Lindqvist",
    role: "Head of Strategy",
    bio: "Turns balance sheets into narratives. The one asking 'why' until it hurts.",
    image: "/images/team/mara-castellane.jpg",
  },
  {
    name: "Ada Okonkwo",
    role: "Design Director",
    bio: "Typography obsessive. Can spot a fake grid from across the room.",
    image: "/images/team/mara-castellane.jpg",
  },
  {
    name: "Rafael Duarte",
    role: "Director of Photography",
    bio: "Paints with practicals. Refuses to light anything the easy way.",
    image: "/images/team/mara-castellane.jpg",
  },
  {
    name: "Yuki Sørensen",
    role: "Head of Motion",
    bio: "Cut her first reel at fourteen. Thinks in 24 frames per second.",
    image: "/images/team/mara-castellane.jpg",
  },
  {
    name: "Leon Abramov",
    role: "Performance Lead",
    bio: "The data romantic. Proves beautiful work converts better — weekly.",
    image: "/images/team/mara-castellane.jpg",
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
    blurb: "Paid social native who reads creative as fluently as dashboards.",
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
  title:
    "CORECAST — From the core of every story, we shape identity, define vision, and create lasting impact.",
  description:
    "CORECAST is a cinematic marketing agency transforming ambitious businesses into unforgettable brands through branding, content creation, photography, reels production and performance marketing.",
  url: "https://corecast.agency",
  email: "castcore51@gmail.com",
  phone1: "+963 987 760 200",
  phone2: "+963 987 760 201",
  address: "Khalid Ibn Al-Walid Street, Damascus, Syria",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/c0recast" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61587098307701",
    },
    { label: "Vimeo", href: "https://vimeo.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;
