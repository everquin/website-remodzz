export interface PortfolioProject {
  slug: string;
  title: string;
  location: string;
  category: string;
  categoryLabel: string;
  description: string;
  cover?: string;
  images: { src: string; label: string }[];
}

export const projects: PortfolioProject[] = [
  // ===== KITCHENS =====
  {
    slug: 'kitchen-libertyville-redesign',
    title: 'Kitchen Redesign & Remodel',
    location: 'Libertyville, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Complete kitchen remodel and upgrade featuring custom cabinetry, granite countertops, ceramic tile, and Kohler plumbing fixtures.',
    images: [
      { src: 'kitchen-libertyville-design.jpg', label: 'Design Layout' },
      { src: 'kitchen-libertyville-before.jpg', label: 'Before' },
      { src: 'kitchen-libertyville-during.jpg', label: 'During Construction' },
      { src: 'kitchen-libertyville-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'kitchen-grayslake-expansion',
    title: 'Kitchen Remodeling & Expansion',
    location: 'Grayslake, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Major kitchen expansion and redesign in Grayslake. Cabinetry upgrade, granite countertops, ceramic tile, Kohler fixtures, and custom shower installation.',
    images: [
      { src: 'kitchen-grayslake-before.jpg', label: 'Before' },
      { src: 'kitchen-grayslake-during.jpg', label: 'During Construction' },
      { src: 'kitchen-grayslake-after1.jpg', label: 'After — View 1' },
      { src: 'kitchen-grayslake-after2.jpg', label: 'After — View 2' },
    ],
  },
  {
    slug: 'kitchen-highlandpark-addition',
    title: 'Kitchen Expansion & Second Story Addition',
    location: 'Highland Park, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Major kitchen redesign with Armstrong Allwood™ cabinetry, crown molding, antiqued white finish with glaze, and LG kitchen appliances as part of a larger second-story addition project.',
    images: [
      { src: 'kitchen-highlandpark-render.jpg', label: '3D Design Rendering' },
      { src: 'kitchen-highlandpark-photo.jpg', label: 'Completed Kitchen' },
    ],
  },
  {
    slug: 'kitchen-vernonhills-redesign',
    title: 'Kitchen Remodeling & Redesign',
    location: 'Vernon Hills, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Major kitchen remodeling with wall opening, Armstrong cabinetry, and custom accent pieces.',
    images: [
      { src: 'kitchen-vernonhills-before.jpg', label: 'Before' },
      { src: 'kitchen-vernonhills-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'kitchen-longgrove-renovation',
    title: 'Major Kitchen Renovation',
    location: 'Long Grove, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Bearing wall removal requiring steel I-beam in ceiling, open floor concept, custom cabinetry rework, LG Vitera quartz countertops, window addition and layout changes.',
    images: [
      { src: 'kitchen-longgrove-before.jpg', label: 'Before' },
      { src: 'kitchen-longgrove-render.jpg', label: '3D Design Rendering' },
      { src: 'kitchen-longgrove-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'kitchen-roundlake-upgrade',
    title: 'Kitchen Remodeling & Upgrade',
    location: 'Round Lake Beach, IL',
    category: 'kitchens',
    categoryLabel: 'Kitchen Remodeling',
    description: 'Custom oak cabinetry, porcelain tile flooring, Benjamin Moore paint, 36" upper cabinets, crown molding, quartz countertops, and undermount sink.',
    images: [
      { src: 'kitchen-roundlake-before.jpg', label: 'Before' },
      { src: 'kitchen-roundlake-during.jpg', label: 'During Construction' },
      { src: 'kitchen-roundlake-after.jpg', label: 'After — Completed' },
    ],
  },

  // ===== BATHROOMS =====
  {
    slug: 'bathroom-foxlake-mudroom',
    title: 'Basement Bath & Mudroom Remodeling',
    location: 'Fox Lake, IL',
    category: 'bathrooms',
    categoryLabel: 'Bathroom Remodeling',
    description: 'Complete basement bathroom and mudroom renovation.',
    cover: 'bathroom-foxlake-cover.jpg',
    images: [
      { src: 'bathroom-foxlake-cover.jpg', label: 'Project Cover' },
      { src: 'bathroom-foxlake-before.jpg', label: 'Before' },
      { src: 'bathroom-foxlake-after1.jpg', label: 'After — View 1' },
      { src: 'bathroom-foxlake-after2.jpg', label: 'After — View 2' },
    ],
  },
  {
    slug: 'bathroom-kildeer-master',
    title: 'Master Bathroom Remodel',
    location: 'Kildeer, IL',
    category: 'bathrooms',
    categoryLabel: 'Bathroom Remodeling',
    description: 'Master bathroom remodel and upgrade with premium fixtures.',
    cover: 'bathroom-kildeer-cover.jpg',
    images: [
      { src: 'bathroom-kildeer-cover.jpg', label: 'Project Cover' },
    ],
  },
  {
    slug: 'bathroom-highlandpark-hall',
    title: 'Hall Bathroom Addition & Remodeling',
    location: 'Highland Park, IL',
    category: 'bathrooms',
    categoryLabel: 'Bathroom Remodeling',
    description: 'Hall bathroom addition and full remodel in Highland Park.',
    cover: 'bathroom-highlandpark-cover.jpg',
    images: [
      { src: 'bathroom-highlandpark-cover.jpg', label: 'Project Cover' },
    ],
  },
  {
    slug: 'bathroom-greenoaks-upstairs',
    title: 'Upstairs Bathroom Renovation',
    location: 'Green Oaks, IL',
    category: 'bathrooms',
    categoryLabel: 'Bathroom Remodeling',
    description: 'Complete upstairs bathroom renovation and remodeling.',
    cover: 'bathroom-greenoaks-cover.jpg',
    images: [
      { src: 'bathroom-greenoaks-cover.jpg', label: 'Project Cover' },
    ],
  },
  {
    slug: 'bathroom-roundlake-upstairs',
    title: 'Upstairs Bathroom Remodeling',
    location: 'Round Lake Beach, IL',
    category: 'bathrooms',
    categoryLabel: 'Bathroom Remodeling',
    description: 'Upstairs bathroom remodeling with custom tile and fixtures.',
    cover: 'bathroom-roundlake-cover.jpg',
    images: [
      { src: 'bathroom-roundlake-cover.jpg', label: 'Project Cover' },
    ],
  },

  // ===== BASEMENTS =====
  {
    slug: 'basement-greenoaks-major',
    title: 'Major Basement Remodel — Theater, Gym & Wet Bar',
    location: 'Green Oaks, IL',
    category: 'basements',
    categoryLabel: 'Basement Finishing',
    description: 'Massive basement transformation including home theater, home gym, wet bar, and full living space. One of our largest basement projects with 193 project photos.',
    cover: 'basement-greenoaks-cover.jpg',
    images: [
      { src: 'basement-greenoaks-cover.jpg', label: 'Project Cover' },
      { src: 'basement-greenoaks-before.jpg', label: 'Before' },
      { src: 'basement-greenoaks-during.jpg', label: 'During Construction' },
      { src: 'basement-greenoaks-after1.jpg', label: 'After — View 1' },
      { src: 'basement-greenoaks-after2.jpg', label: 'After — View 2' },
    ],
  },
  {
    slug: 'basement-highlandpark-redesign',
    title: 'Basement Redesign & Remodeling',
    location: 'Highland Park, IL',
    category: 'basements',
    categoryLabel: 'Basement Finishing',
    description: 'Complete basement redesign and remodeling in Highland Park.',
    cover: 'basement-highlandpark-cover.jpg',
    images: [
      { src: 'basement-highlandpark-cover.jpg', label: 'Project Cover' },
      { src: 'basement-highlandpark-before.jpg', label: 'Before' },
      { src: 'basement-highlandpark-after1.jpg', label: 'After — View 1' },
      { src: 'basement-highlandpark-after2.jpg', label: 'After — View 2' },
    ],
  },
  {
    slug: 'basement-foxlake-finishing',
    title: 'Basement Finishing & Remodeling',
    location: 'Fox Lake, IL',
    category: 'basements',
    categoryLabel: 'Basement Finishing',
    description: 'Full basement finishing project in Fox Lake.',
    cover: 'basement-foxlake-cover.jpg',
    images: [
      { src: 'basement-foxlake-cover.jpg', label: 'Project Cover' },
    ],
  },
  {
    slug: 'basement-springgrove-wetbar',
    title: 'Basement Remodel with Bathroom & Wet Bar',
    location: 'Spring Grove, IL',
    category: 'basements',
    categoryLabel: 'Basement Finishing',
    description: 'Basement remodeling with new bathroom and wet bar in Spring Grove.',
    cover: 'basement-springgrove-cover.jpg',
    images: [
      { src: 'basement-springgrove-cover.jpg', label: 'Project Cover' },
    ],
  },

  // ===== ADDITIONS =====
  {
    slug: 'addition-highlandpark-secondstory',
    title: 'Second Story Addition & Complete Redesign',
    location: 'Highland Park, IL',
    category: 'additions',
    categoryLabel: 'Home Additions',
    description: 'Our largest addition project — a full second-story addition and complete home redesign with 278 project photos documenting every phase. Includes 3D design renderings.',
    images: [
      { src: 'addition-highlandpark-before.jpg', label: 'Before — Original Home' },
      { src: 'addition-highlandpark-render.jpg', label: '3D Design Rendering' },
      { src: 'addition-highlandpark-during.jpg', label: 'During Construction' },
    ],
  },
  {
    slug: 'addition-libertyville-deck-kitchen',
    title: 'Covered Deck & Kitchen Addition',
    location: 'Libertyville, IL',
    category: 'additions',
    categoryLabel: 'Home Additions',
    description: 'Covered composite deck and kitchen addition with 3D design views and Trex deck layout.',
    cover: 'addition-libertyville-cover.jpg',
    images: [
      { src: 'addition-libertyville-cover.jpg', label: 'Project Cover' },
      { src: 'addition-libertyville-render.jpg', label: '3D Design View' },
      { src: 'addition-libertyville-during.jpg', label: 'During Construction' },
      { src: 'addition-libertyville-after.jpg', label: 'After — Completed' },
    ],
  },

  // ===== DECKS & EXTERIORS =====
  {
    slug: 'deck-greenoaks-patio',
    title: 'Covered Stone Patio with Grill & Fireplace',
    location: 'Green Oaks, IL',
    category: 'decks',
    categoryLabel: 'Decks & Exteriors',
    description: 'Covered rear stone patio with built-in gas grill, outdoor fireplace, and paver work.',
    cover: 'deck-greenoaks-cover.jpg',
    images: [
      { src: 'deck-greenoaks-cover.jpg', label: 'Project Cover' },
      { src: 'deck-greenoaks-before.jpg', label: 'Before' },
      { src: 'deck-greenoaks-during.jpg', label: 'During Construction' },
      { src: 'deck-greenoaks-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'deck-libertyville-seasonroom',
    title: 'Season Room & Party Deck Addition',
    location: 'Libertyville, IL',
    category: 'decks',
    categoryLabel: 'Decks & Exteriors',
    description: 'Seasons room remodeling and multi-level party deck addition.',
    cover: 'deck-libertyville-cover.jpg',
    images: [
      { src: 'deck-libertyville-cover.jpg', label: 'Project Cover' },
      { src: 'deck-libertyville-before.jpg', label: 'Before' },
      { src: 'deck-libertyville-during.jpg', label: 'During Construction' },
      { src: 'deck-libertyville-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'deck-grayslake-pergola',
    title: 'Cedar Pergola Design & Installation',
    location: 'Grayslake, IL',
    category: 'decks',
    categoryLabel: 'Decks & Exteriors',
    description: 'Custom cedar pergola design and professional installation.',
    cover: 'deck-grayslake-cover.jpg',
    images: [
      { src: 'deck-grayslake-cover.jpg', label: 'Project Cover' },
      { src: 'deck-grayslake-before.jpg', label: 'Before' },
      { src: 'deck-grayslake-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'deck-lincolnshire-stairwell',
    title: 'Exterior Covered Stairwell with Heated Stairs',
    location: 'Lincolnshire, IL',
    category: 'decks',
    categoryLabel: 'Decks & Exteriors',
    description: 'Exterior covered stairwell addition with in-floor heating.',
    cover: 'deck-lincolnshire-cover.jpg',
    images: [
      { src: 'deck-lincolnshire-cover.jpg', label: 'Project Cover' },
    ],
  },

  // ===== HOME THEATERS =====
  {
    slug: 'theater-greenoaks-basement',
    title: 'Basement Home Theater',
    location: 'Green Oaks, IL',
    category: 'theaters',
    categoryLabel: 'Home Theaters',
    description: 'Complete home theater design and installation in a finished basement.',
    cover: 'theater-greenoaks-cover.jpg',
    images: [
      { src: 'theater-greenoaks-cover.jpg', label: 'Project Cover' },
      { src: 'theater-greenoaks-before.jpg', label: 'Before' },
      { src: 'theater-greenoaks-after.jpg', label: 'After — Completed' },
    ],
  },
  {
    slug: 'theater-northfield-den',
    title: 'Den Remodel — Wet Bar, Stone Fireplace & Entertainment Center',
    location: 'Northfield, IL',
    category: 'theaters',
    categoryLabel: 'Home Theaters',
    description: 'Complete den redesign with wet bar, stone veneer fireplace, and built-in entertainment center. 247 project photos.',
    images: [
      { src: 'theater-northfield-before.jpg', label: 'Before' },
      { src: 'theater-northfield-during.jpg', label: 'During Construction' },
      { src: 'theater-northfield-after.jpg', label: 'After — Completed' },
    ],
  },

  // ===== NEW HOMES =====
  {
    slug: 'newhome-milwaukee',
    title: 'New Modular Home Construction',
    location: 'Milwaukee, WI',
    category: 'new-homes',
    categoryLabel: 'New Homes',
    description: '2-story modular home design and construction in Milwaukee.',
    cover: 'newhome-milwaukee-cover.jpg',
    images: [
      { src: 'newhome-milwaukee-cover.jpg', label: 'Project Cover' },
      { src: 'newhome-milwaukee-during.jpg', label: 'During Construction' },
      { src: 'newhome-milwaukee-after.jpg', label: 'Completed Home' },
    ],
  },
  {
    slug: 'newhome-south-milwaukee',
    title: 'New 2-Story Modular Home',
    location: 'South Milwaukee, WI',
    category: 'new-homes',
    categoryLabel: 'New Homes',
    description: '2-story modular home construction in South Milwaukee.',
    cover: 'newhome-smilwaukee-cover.jpg',
    images: [
      { src: 'newhome-smilwaukee-cover.jpg', label: 'Project Cover' },
      { src: 'newhome-smilwaukee-during.jpg', label: 'During Construction' },
      { src: 'newhome-smilwaukee-after.jpg', label: 'Completed Home' },
    ],
  },

  // ===== FLOORING =====
  {
    slug: 'flooring-greenoaks-hardwood',
    title: 'Hardwood Flooring Refinishing',
    location: 'Green Oaks, IL',
    category: 'flooring',
    categoryLabel: 'Flooring',
    description: 'Hardwood flooring refinishing and installation.',
    cover: 'flooring-greenoaks-cover.jpg',
    images: [
      { src: 'flooring-greenoaks-cover.jpg', label: 'Project Cover' },
      { src: 'flooring-greenoaks-before.jpg', label: 'Before' },
      { src: 'flooring-greenoaks-after.jpg', label: 'After — Completed' },
    ],
  },
];

export const categories = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'kitchens', label: 'Kitchens' },
  { slug: 'bathrooms', label: 'Bathrooms' },
  { slug: 'basements', label: 'Basements' },
  { slug: 'additions', label: 'Additions' },
  { slug: 'decks', label: 'Decks & Patios' },
  { slug: 'theaters', label: 'Theaters' },
  { slug: 'new-homes', label: 'New Homes' },
  { slug: 'flooring', label: 'Flooring' },
];

// Flat list for simple gallery views
export const portfolioItems = projects.flatMap(p =>
  p.images.map(img => ({
    image: img.src,
    imageLabel: img.label,
    title: p.title,
    location: p.location,
    category: p.category,
    projectSlug: p.slug,
  }))
);
