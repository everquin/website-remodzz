export interface PortfolioItem {
  image: string;
  title: string;
  location: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Kitchens
  { image: 'kitchen-1.jpg', title: 'Kitchen Redesign', location: 'Libertyville, IL', category: 'kitchens' },
  { image: 'kitchen-2.jpg', title: 'Kitchen Renovation', location: 'Libertyville, IL', category: 'kitchens' },
  { image: 'kitchen-3.jpg', title: 'Kitchen Transformation', location: 'Libertyville, IL', category: 'kitchens' },
  { image: 'featured-IMG_4002.jpg', title: 'Featured Kitchen', location: 'Lake County, IL', category: 'kitchens' },

  // Bathrooms
  { image: 'bathroom-1.jpg', title: 'Bathroom Remodel', location: 'Fox Lake, IL', category: 'bathrooms' },
  { image: 'bathroom-2.jpg', title: 'Bath & Mudroom', location: 'Fox Lake, IL', category: 'bathrooms' },
  { image: 'bathroom-3.jpg', title: 'Spa-Style Bath', location: 'Fox Lake, IL', category: 'bathrooms' },

  // Basements
  { image: 'basement-1.jpg', title: 'Basement Finishing', location: 'Northfield, IL', category: 'basements' },
  { image: 'basement-2.jpg', title: 'Basement Bathroom', location: 'Northfield, IL', category: 'basements' },
  { image: 'basement-3.jpg', title: 'Basement Living Space', location: 'Northfield, IL', category: 'basements' },
  { image: 'featured-IMG_0531.jpg', title: 'Featured Basement', location: 'Lake County, IL', category: 'basements' },

  // Additions
  { image: 'addition-1.jpg', title: 'Kitchen Addition', location: 'Libertyville, IL', category: 'additions' },
  { image: 'addition-2.jpg', title: 'Covered Deck Addition', location: 'Libertyville, IL', category: 'additions' },
  { image: 'addition-3.jpg', title: 'Second Story Addition', location: 'Highland Park, IL', category: 'additions' },
  { image: 'featured-IMG_1137.jpg', title: 'Featured Addition', location: 'Lake County, IL', category: 'additions' },

  // Decks & Exteriors
  { image: 'deck-1.jpg', title: 'Built-In Wolf Grill', location: 'Libertyville, IL', category: 'decks' },
  { image: 'deck-2.jpg', title: 'Covered Stone Patio', location: 'Green Oaks, IL', category: 'decks' },
  { image: 'deck-3.jpg', title: 'Patio & Grill', location: 'Green Oaks, IL', category: 'decks' },
  { image: 'exterior-1.jpg', title: 'Cedar Pergola', location: 'Grayslake, IL', category: 'decks' },
  { image: 'exterior-2.jpg', title: 'Seasons Room Upgrade', location: 'Green Oaks, IL', category: 'decks' },
  { image: 'exterior-3.jpg', title: 'Exterior Remodel', location: 'Green Oaks, IL', category: 'decks' },

  // Theaters
  { image: 'theater-1.jpg', title: 'Basement Home Theater', location: 'Green Oaks, IL', category: 'theaters' },
  { image: 'theater-2.jpg', title: 'Entertainment Center', location: 'Green Oaks, IL', category: 'theaters' },

  // New Homes
  { image: 'newhome-1.jpg', title: 'Modular Home', location: 'Milwaukee, WI', category: 'new-homes' },
  { image: 'newhome-2.jpg', title: 'New Home Construction', location: 'South Milwaukee, WI', category: 'new-homes' },
  { image: 'newhome-3.jpg', title: 'Custom Build', location: 'South Milwaukee, WI', category: 'new-homes' },

  // Featured
  { image: 'featured-IMG_0748.jpg', title: 'Featured Project', location: 'Lake County, IL', category: 'kitchens' },
  { image: 'featured-IMG_5744.jpg', title: 'Featured Craftsmanship', location: 'Lake County, IL', category: 'additions' },
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
];
