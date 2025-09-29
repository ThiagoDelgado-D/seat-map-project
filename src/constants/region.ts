interface Region {
  id: string;
  name: string;
  flag: string;
  location: string;
  latency?: string;
}

export const REGIONS: Region[] = [
  {
    id: 'south-america',
    name: 'South America',
    flag: '🇧🇷',
    location: 'São Paulo, Brazil',
    latency: '~5ms'
  },
  {
    id: 'north-america',
    name: 'North America',
    flag: '🇺🇸', 
    location: 'Virginia, USA',
    latency: '~20ms'
  },
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇩🇪',
    location: 'Frankfurt, Germany',
    latency: '~40ms'
  },
  {
    id: 'oceania',
    name: 'Oceania',
    flag: '🇦🇺',
    location: 'Sydney, Australia',
    latency: '~80ms'
  }
];