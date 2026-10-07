// Every project below is transcribed from the original NeoTek/REMODzz project
// cover sheets in /public/images/portfolio/covers. Each sheet documents one
// space; sheets that share a job number are grouped into a single project.
// `photo` is the photo area cropped from the sheet (/public/images/projects).

export type Category =
  | 'kitchens'
  | 'bathrooms'
  | 'basements'
  | 'additions'
  | 'outdoor'
  | 'interiors'
  | 'theaters'
  | 'new-homes'
  | 'commercial';

export const categoryLabels: Record<Category, string> = {
  kitchens: 'Kitchens',
  bathrooms: 'Bathrooms',
  basements: 'Basements',
  additions: 'Additions',
  outdoor: 'Decks & Exteriors',
  interiors: 'Interiors & Flooring',
  theaters: 'Theaters & Dens',
  'new-homes': 'New Homes',
  commercial: 'Commercial',
};

export type Stage = 'design' | 'before' | 'construction' | 'finished';

export const stageLabels: Record<Stage, string> = {
  design: 'Design',
  before: 'Before',
  construction: 'Construction',
  finished: 'Finished',
};

export interface Space {
  sheet: string; // cover sheet number, e.g. '014'
  title: string;
  scope: string;
}

export interface FieldPhoto {
  src: string; // file in /public/images/portfolio
  stage: Stage;
}

export interface Project {
  job: string;
  slug: string;
  title: string;
  town: string;
  state: 'IL' | 'WI';
  categories: Category[];
  summary: string;
  spaces: Space[];
  photos?: FieldPhoto[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    job: 'NTK07-2259',
    slug: 'highland-park-second-story-addition',
    title: 'Second-Story Addition & Whole-Home Redesign',
    town: 'Highland Park',
    state: 'IL',
    categories: ['additions', 'kitchens', 'bathrooms', 'basements', 'interiors'],
    summary: 'A single-story ranch converted into a two-story home. The addition brought a new master suite, hall bath and upstairs laundry, and the existing floors were redesigned top to bottom: a new kitchen with Armstrong Allwood cabinetry in an antiqued white glaze, a main floor bath, family room and a refinished basement. Documented across 278 project photos.',
    featured: true,
    spaces: [
      { sheet: '012', title: 'Second-Story Addition', scope: 'Convert ranch home into 2-story home' },
      { sheet: '013', title: 'New Master Bathroom', scope: 'Part of second-story addition project' },
      { sheet: '014', title: 'New Master Bedroom', scope: 'Part of second-story addition project' },
      { sheet: '015', title: 'New Hall Bathroom', scope: 'Part of second-story addition project' },
      { sheet: '016', title: 'Upstairs Laundry Room', scope: 'Part of second-story addition project' },
      { sheet: '017', title: 'Kitchen Redesign', scope: 'Part of second-story addition project' },
      { sheet: '018', title: 'Main Floor Bathroom', scope: 'Part of second-story addition project' },
      { sheet: '019', title: 'Family Room Redesign', scope: 'Part of second-story addition project' },
      { sheet: '020', title: 'Basement Refinishing', scope: 'Part of second-story addition project' },
    ],
    photos: [
      { src: 'addition-highlandpark-render.jpg', stage: 'design' },
      { src: 'basement-highlandpark-before.jpg', stage: 'before' },
      { src: 'addition-highlandpark-before.jpg', stage: 'construction' },
      { src: 'addition-highlandpark-during.jpg', stage: 'construction' },
      { src: 'kitchen-highlandpark-photo.jpg', stage: 'construction' },
      { src: 'basement-highlandpark-after1.jpg', stage: 'finished' },
      { src: 'basement-highlandpark-after2.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-2660',
    slug: 'green-oaks-basement-theater-gym',
    title: 'Basement Design: Theater, Gym & Bath',
    town: 'Green Oaks',
    state: 'IL',
    categories: ['basements', 'theaters', 'bathrooms'],
    summary: 'A major basement design and finishing project that turned raw space into a home theater, a work-out room, a full bathroom and open living space. Documented across 193 project photos.',
    featured: true,
    spaces: [
      { sheet: '030', title: 'Basement Finish', scope: 'Major design & finishing project' },
      { sheet: '031', title: 'Work-Out Room', scope: 'Part of major basement design' },
      { sheet: '032', title: 'Home Theater Room', scope: 'Part of major basement design' },
      { sheet: '033', title: 'Basement Bathroom', scope: 'Part of major basement design' },
    ],
    photos: [
      { src: 'basement-greenoaks-before.jpg', stage: 'construction' },
      { src: 'basement-greenoaks-during.jpg', stage: 'construction' },
      { src: 'theater-greenoaks-before.jpg', stage: 'construction' },
      { src: 'basement-greenoaks-after1.jpg', stage: 'construction' },
      { src: 'basement-greenoaks-after2.jpg', stage: 'construction' },
      { src: 'theater-greenoaks-after.jpg', stage: 'construction' },
    ],
  },
  {
    job: 'NTK09-4047',
    slug: 'round-lake-beach-whole-home',
    title: 'Whole-Home Renovation, Inside & Out',
    town: 'Round Lake Beach',
    state: 'IL',
    categories: ['kitchens', 'bathrooms', 'basements', 'outdoor', 'interiors'],
    summary: 'Five coordinated phases on one home: a gutted and upgraded bathroom, a basement redesign, a new kitchen with custom oak cabinetry, 36" uppers, crown molding, quartz countertops and porcelain tile, then an exterior makeover with new siding, deck, gutters and front door, finished with trim and millwork throughout.',
    featured: true,
    spaces: [
      { sheet: '043', title: 'Bathroom Remodeling', scope: 'Complete gut & upgrade' },
      { sheet: '044', title: 'Basement Redesign & Renovation', scope: 'Complete gut & upgrade' },
      { sheet: '045', title: 'Kitchen Redesign', scope: 'Complete gut & upgrade' },
      { sheet: '046', title: 'Exterior Makeover', scope: 'New siding, deck, gutters, front door' },
      { sheet: '047', title: 'Trim & Millwork Upgrade', scope: 'New trim and millwork throughout' },
    ],
    photos: [
      { src: 'kitchen-roundlake-before.jpg', stage: 'construction' },
      { src: 'kitchen-roundlake-during.jpg', stage: 'finished' },
      { src: 'kitchen-roundlake-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-4008A',
    slug: 'grayslake-kitchen-whole-house',
    title: 'Kitchen Redesign & Whole-House Upgrades',
    town: 'Grayslake',
    state: 'IL',
    categories: ['kitchens', 'interiors', 'theaters'],
    summary: 'A complete kitchen gut with a new layout, granite countertops, ceramic tile and Kohler fixtures, plus an added kitchen window. The work carried through the house: refinished floors, an opened wall, a home theater and a new upstairs laundry closet with a stackable washer and dryer.',
    featured: true,
    spaces: [
      { sheet: '038', title: 'Major Kitchen Redesign', scope: 'Complete gut, redesign & layout change' },
      { sheet: '039', title: 'Upstairs Laundry Closet', scope: 'New laundry area, stackable washer/dryer' },
      { sheet: '040', title: 'Whole House Upgrades', scope: 'Flooring refinish, open wall, home theater' },
      { sheet: '041', title: 'New Window Install', scope: 'Add another window in kitchen' },
    ],
    photos: [
      { src: 'kitchen-grayslake-before.jpg', stage: 'before' },
      { src: 'kitchen-grayslake-during.jpg', stage: 'construction' },
      { src: 'kitchen-grayslake-after1.jpg', stage: 'finished' },
      { src: 'kitchen-grayslake-after2.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-2625',
    slug: 'long-grove-kitchen-redesign',
    title: 'Open-Concept Kitchen Redesign',
    town: 'Long Grove',
    state: 'IL',
    categories: ['kitchens'],
    summary: 'A complete gut and new layout. Removing a bearing wall called for a steel I-beam in the ceiling to open the floor plan. The cabinetry was reworked, LG Viatera quartz countertops installed, and new windows added.',
    featured: true,
    spaces: [{ sheet: '028', title: 'Major Kitchen Redesign', scope: 'Complete gut & new layout w/ windows' }],
    photos: [
      { src: 'kitchen-longgrove-render.jpg', stage: 'design' },
      { src: 'kitchen-longgrove-before.jpg', stage: 'construction' },
      { src: 'kitchen-longgrove-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-4012',
    slug: 'northfield-den-renovation',
    title: 'Den Renovation: Bar, Stone Fireplace & Media Wall',
    town: 'Northfield',
    state: 'IL',
    categories: ['theaters', 'interiors'],
    summary: 'A complete gut and redesign of the den with a wet bar, a stone-veneer fireplace and a built-in entertainment center. Documented across 247 project photos.',
    featured: true,
    spaces: [{ sheet: '042', title: 'Den Renovation', scope: 'Complete gut & redesign' }],
    photos: [
      { src: 'theater-northfield-before.jpg', stage: 'construction' },
      { src: 'theater-northfield-during.jpg', stage: 'construction' },
      { src: 'theater-northfield-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK07-2285',
    slug: 'libertyville-covered-deck-addition',
    title: 'Covered Deck & Kitchen Bump-Out',
    town: 'Libertyville',
    state: 'IL',
    categories: ['additions', 'outdoor'],
    summary: 'A kitchen bump-out addition with new windows and a covered composite deck, planned with 3D design views and a Trex deck layout before construction.',
    spaces: [{ sheet: '022', title: 'Covered Deck & Addition', scope: 'Kitchen bump-out, deck, windows' }],
    photos: [
      { src: 'addition-libertyville-render.jpg', stage: 'design' },
      { src: 'addition-libertyville-during.jpg', stage: 'finished' },
      { src: 'addition-libertyville-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-2791',
    slug: 'green-oaks-covered-patio',
    title: 'Covered Stone Patio with Grill',
    town: 'Green Oaks',
    state: 'IL',
    categories: ['outdoor'],
    summary: 'A covered rear patio with paver work, stone-clad supports, an outdoor fireplace and a built-in gas grill.',
    spaces: [{ sheet: '035', title: 'Covered Rear Patio', scope: 'Paved patio, stone supports, grill' }],
    photos: [
      { src: 'deck-greenoaks-before.jpg', stage: 'before' },
      { src: 'deck-greenoaks-during.jpg', stage: 'construction' },
      { src: 'deck-greenoaks-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK07-2250',
    slug: 'libertyville-seasons-room-deck',
    title: 'Seasons Room & Party Deck',
    town: 'Libertyville',
    state: 'IL',
    categories: ['outdoor', 'additions'],
    summary: 'The existing seasons room was rebuilt and redesigned, and a multi-level party deck was added.',
    spaces: [{ sheet: '010', title: 'Seasons Room w/ Party Deck', scope: 'Rebuild & redesign existing seasons room' }],
    photos: [
      { src: 'deck-libertyville-before.jpg', stage: 'before' },
      { src: 'deck-libertyville-after.jpg', stage: 'construction' },
      { src: 'deck-libertyville-during.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-2701',
    slug: 'grayslake-cedar-pergola',
    title: 'Cedar Pergola',
    town: 'Grayslake',
    state: 'IL',
    categories: ['outdoor'],
    summary: 'A custom cedar pergola, designed and built to tie into the existing paved patio.',
    spaces: [{ sheet: '034', title: 'Cedar Pergola', scope: 'New pergola tied into existing paved patio' }],
    photos: [
      { src: 'deck-grayslake-after.jpg', stage: 'construction' },
      { src: 'deck-grayslake-before.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK07-2188',
    slug: 'fox-lake-basement-finish',
    title: 'Basement Finish with Bath & Mud Room',
    town: 'Fox Lake',
    state: 'IL',
    categories: ['basements', 'bathrooms'],
    summary: 'A complete basement design and build-out, including a new bathroom and a mud room.',
    spaces: [
      { sheet: '007', title: 'Basement Finish', scope: 'Complete design & build-out' },
      { sheet: '008', title: 'Bathroom & Mud Room', scope: 'Part of full basement finish project' },
    ],
    photos: [
      { src: 'bathroom-foxlake-after1.jpg', stage: 'finished' },
      { src: 'bathroom-foxlake-after2.jpg', stage: 'finished' },
      { src: 'bathroom-foxlake-before.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK08-2366',
    slug: 'vernon-hills-whole-house',
    title: 'Whole-House Renovation',
    town: 'Vernon Hills',
    state: 'IL',
    categories: ['kitchens', 'interiors'],
    summary: 'Part of a whole-house renovation: the kitchen was revitalized with a wall opening and Armstrong cabinetry, and the family room was redesigned.',
    spaces: [
      { sheet: '024', title: 'Kitchen Revitalization', scope: 'Part of whole house renovation' },
      { sheet: '025', title: 'Family Room Redesign', scope: 'Part of whole house renovation' },
    ],
    photos: [{ src: 'kitchen-vernonhills-before.jpg', stage: 'before' }],
  },
  {
    job: 'NTK08-2819',
    slug: 'libertyville-kitchen-family-room',
    title: 'Kitchen & Family Room Redesign',
    town: 'Libertyville',
    state: 'IL',
    categories: ['kitchens', 'interiors'],
    summary: 'A total kitchen gut and redesign, paired with a family room update: new flooring, an entertainment center and painting.',
    spaces: [
      { sheet: '036', title: 'Kitchen Redesign', scope: 'Total gut & redesign' },
      { sheet: '037', title: 'Family Room Redesign', scope: 'Flooring, entertainment center & painting' },
    ],
  },
  {
    job: 'NTK05-5016',
    slug: 'milwaukee-custom-modular-home',
    title: 'Custom City Modular Home',
    town: 'Milwaukee',
    state: 'WI',
    categories: ['new-homes'],
    summary: 'A 2,200 sq ft two-story custom modular home, set by crane on an urban lot.',
    spaces: [{ sheet: '049', title: 'Custom City Modular Home', scope: '2,200 SF 2-story home' }],
    photos: [
      { src: 'newhome-milwaukee-during.jpg', stage: 'construction' },
      { src: 'newhome-milwaukee-after.jpg', stage: 'construction' },
    ],
  },
  {
    job: 'NTK05-5008',
    slug: 'south-milwaukee-modular-home',
    title: 'New Two-Story Modular Home',
    town: 'South Milwaukee',
    state: 'WI',
    categories: ['new-homes'],
    summary: 'A 1,800 sq ft two-story modular home with a detached garage.',
    spaces: [{ sheet: '048', title: 'New Modular Home', scope: '1,800 SF 2-story home w/ detached garage' }],
    photos: [
      { src: 'newhome-smilwaukee-during.jpg', stage: 'construction' },
      { src: 'newhome-smilwaukee-after.jpg', stage: 'finished' },
    ],
  },
  {
    job: 'NTK07-2253',
    slug: 'green-oaks-hardwood-stairs',
    title: 'New Hardwood & Stair Refinish',
    town: 'Green Oaks',
    state: 'IL',
    categories: ['interiors'],
    summary: 'New hardwood flooring, with the stairs and railing refinished to match.',
    spaces: [{ sheet: '011', title: 'New Flooring & Refinish', scope: 'New hardwood and refinish stairs & railing' }],
    photos: [
      { src: 'flooring-greenoaks-before.jpg', stage: 'before' },
      { src: 'flooring-greenoaks-after.jpg', stage: 'construction' },
    ],
  },
  {
    job: 'NTK07-2045',
    slug: 'waukegan-kitchen-upgrade',
    title: 'Kitchen Upgrade',
    town: 'Waukegan',
    state: 'IL',
    categories: ['kitchens'],
    summary: 'A kitchen upgrade with new countertops, flooring and windows.',
    spaces: [{ sheet: '002', title: 'Kitchen Upgrade', scope: 'Countertops, flooring & windows' }],
  },
  {
    job: 'NTK07-2092',
    slug: 'libertyville-kitchen-remodel',
    title: 'Kitchen Remodel',
    town: 'Libertyville',
    state: 'IL',
    categories: ['kitchens'],
    summary: 'A complete gut and rebuild of the kitchen.',
    spaces: [{ sheet: '004', title: 'Kitchen Remodel', scope: 'Complete gut & rebuild' }],
  },
  {
    job: 'NTK08-2425',
    slug: 'libertyville-kitchen-gut-remodel',
    title: 'Kitchen Gut & Remodel',
    town: 'Libertyville',
    state: 'IL',
    categories: ['kitchens'],
    summary: 'A kitchen taken down to the studs and remodeled.',
    spaces: [{ sheet: '027', title: 'Kitchen Remodel', scope: 'Gut & remodel' }],
  },
  {
    job: 'NTK07-2220',
    slug: 'kildeer-master-bathroom',
    title: 'Master Bathroom Upgrade',
    town: 'Kildeer',
    state: 'IL',
    categories: ['bathrooms'],
    summary: 'A master bathroom upgrade with new tile, flooring and plumbing hardware.',
    spaces: [{ sheet: '009', title: 'Master Bathroom Upgrade', scope: 'Tile, flooring & plumbing hardware' }],
  },
  {
    job: 'NTK07-2267',
    slug: 'green-oaks-upstairs-bath',
    title: 'Upstairs Bath Renovation',
    town: 'Green Oaks',
    state: 'IL',
    categories: ['bathrooms'],
    summary: 'An upstairs bathroom taken through a complete gut, upgrade and finish.',
    spaces: [{ sheet: '021', title: 'Upstairs Bath Renovation', scope: 'Complete gut, upgrade & finish' }],
  },
  {
    job: 'NTK08-2339',
    slug: 'libertyville-hall-bath',
    title: 'Hall Bath Remodel',
    town: 'Libertyville',
    state: 'IL',
    categories: ['bathrooms'],
    summary: 'A complete gut and redesign of the hall bathroom.',
    spaces: [{ sheet: '023', title: 'Hall Bath Remodel', scope: 'Complete gut & redesign' }],
  },
  {
    job: 'NTK07-2106',
    slug: 'northfield-basement-bathroom',
    title: 'New Basement Bathroom',
    town: 'Northfield',
    state: 'IL',
    categories: ['bathrooms', 'basements'],
    summary: 'Existing basement space redesigned into a new bathroom.',
    spaces: [{ sheet: '005', title: 'New Basement Bathroom', scope: 'Redesign of existing basement space' }],
  },
  {
    job: 'NTK06-89587',
    slug: 'richmond-basement-finishing',
    title: 'Basement Finishing with Bar & Bedroom',
    town: 'Richmond',
    state: 'IL',
    categories: ['basements'],
    summary: 'A complete basement finish with a bathroom, a bar and a bedroom.',
    spaces: [{ sheet: '050', title: 'Basement Finishing', scope: 'Complete with bathroom, bar, bedroom' }],
  },
  {
    job: 'NTK08-2370',
    slug: 'green-oaks-four-seasons-room',
    title: 'Three- to Four-Season Room Conversion',
    town: 'Green Oaks',
    state: 'IL',
    categories: ['additions', 'outdoor'],
    summary: 'A three-season room upgraded to a fully conditioned four-season room.',
    spaces: [{ sheet: '026', title: 'Seasons Room Upgrade', scope: 'Convert 3-seasons to 4-seasons room' }],
  },
  {
    job: 'NTK07-2091',
    slug: 'lincolnshire-heated-stairwell',
    title: 'Covered Exterior Stairwell, Heated Stairs',
    town: 'Lincolnshire',
    state: 'IL',
    categories: ['outdoor'],
    summary: 'An exterior stairwell redesigned with a roof cover and heated stairs.',
    spaces: [{ sheet: '003', title: 'Ext. Stairwell Redesign', scope: 'Covered stairwell, heated stairs' }],
  },
  {
    job: 'NTK08-2635',
    slug: 'winnetka-office-breakroom',
    title: 'Office Breakroom Upgrade',
    town: 'Winnetka',
    state: 'IL',
    categories: ['commercial'],
    summary: 'A commercial breakroom taken through a complete gut and a new layout.',
    spaces: [{ sheet: '029', title: 'Office Breakroom Upgrade', scope: 'Complete gut & new layout' }],
  },
];

export const sheetPhoto = (sheet: string) => `/images/projects/${sheet}.jpg`;
export const sheetFull = (sheet: string) => `/images/portfolio/covers/NTK_ProjectCoverSheets.${sheet}.jpg`;
export const fieldPhoto = (src: string) => `/images/portfolio/${src}`;

export const projectWithSheet = (sheet: string) => projects.find((p) => p.spaces.some((s) => s.sheet === sheet));

export const coverOf = (p: Project) => sheetPhoto(p.spaces[0].sheet);

export const totals = {
  projects: projects.length,
  spaces: projects.reduce((n, p) => n + p.spaces.length, 0),
  towns: new Set(projects.map(p => p.town)).size,
};

export const projectsIn = (cats: Category[]) =>
  projects.filter(p => p.categories.some(c => cats.includes(c)));

export const projectsByTown = projects.reduce<Record<string, number>>((acc, p) => {
  acc[p.town] = (acc[p.town] || 0) + 1;
  return acc;
}, {});
