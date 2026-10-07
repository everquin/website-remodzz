export const site = {
  name: 'REMODzz',
  legalName: 'Everquin, LLC',
  formerName: 'NeoTek Construction',
  url: 'https://remodzz.com',
  phone: '847.603.7614',
  phoneHref: 'tel:+18476037614',
  fax: '847.481.8829',
  hours: [
    { days: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
  ],
  region: 'Northern Illinois & Southern Wisconsin',
  payment: ['Visa', 'MasterCard', 'Discover', 'PayPal'],
  // Estimate requests are delivered to this inbox via Web3Forms (web3forms.com).
  estimateEmail: 'estimates@remodzz.com',
  // Web3Forms access key for estimateEmail. It is designed to be public.
  web3formsKey: '',
};

export interface County {
  county: string;
  state: 'IL' | 'WI';
  towns: string[];
}

export const serviceArea: County[] = [
  { county: 'Lake County', state: 'IL', towns: ['Antioch', 'Fox Lake', 'Grayslake', 'Green Oaks', 'Gurnee', 'Highland Park', 'Kildeer', 'Lake Bluff', 'Lake Forest', 'Lake Zurich', 'Libertyville', 'Lincolnshire', 'Lindenhurst', 'Long Grove', 'Mundelein', 'North Chicago', 'Round Lake', 'Round Lake Beach', 'Spring Grove', 'Vernon Hills', 'Waukegan'] },
  { county: 'Cook County', state: 'IL', towns: ['Arlington Heights', 'Des Plaines', 'Evanston', 'Northbrook', 'Northfield', 'Palatine', 'Park Ridge', 'Schaumburg', 'Skokie', 'Wilmette', 'Winnetka'] },
  { county: 'McHenry County', state: 'IL', towns: ['Algonquin', 'Crystal Lake', 'Huntley', 'Marengo', 'McHenry', 'Richmond', 'Woodstock'] },
  { county: 'Kenosha County', state: 'WI', towns: ['Bristol', 'Kenosha', 'Pleasant Prairie', 'Salem', 'Twin Lakes'] },
  { county: 'Walworth County', state: 'WI', towns: ['Delavan', 'Elkhorn', 'Lake Geneva', 'Whitewater'] },
  { county: 'Racine County', state: 'WI', towns: ['Burlington', 'Caledonia', 'Mount Pleasant', 'Racine'] },
  { county: 'Milwaukee County', state: 'WI', towns: ['Greenfield', 'Milwaukee', 'South Milwaukee', 'Wauwatosa', 'West Allis'] },
];
