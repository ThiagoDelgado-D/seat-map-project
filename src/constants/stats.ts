export interface StatItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export const SEAT_MAP_STATS: StatItem[] = [
  {
    id: 'seats-booked',
    value: '7M+',
    label: 'SEATS BOOKED MONTHLY',
    description: 'Total seats reserved through SeatMap Studio monthly'
  },
  {
    id: 'impressions',
    value: '200M+',
    label: 'YEARLY IMPRESSIONS TO TICKET BUYERS',
    description: 'Annual reach to potential customers'
  },
  {
    id: 'mobile-bookings',
    value: '70%',
    label: 'BOOKINGS ON MOBILE',
    description: 'Percentage of reservations made on mobile devices'
  },
  {
    id: 'events-live',
    value: '3M+',
    label: 'EVENTS GONE LIVE',
    description: 'Total events successfully launched with our platform'
  }
];

export const STUDIO_STATS: StatItem[] = [
  {
    id: 'maps-created',
    value: '50K+',
    label: 'MAPS CREATED',
    description: 'Venue maps designed with our editor'
  },
  {
    id: 'venues-served',
    value: '2K+',
    label: 'VENUES SERVED',
    description: 'Theaters, stadiums, and event spaces using our platform'
  },
  {
    id: 'countries',
    value: '45+',
    label: 'COUNTRIES',
    description: 'Global reach across continents'
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'UPTIME',
    description: 'Reliable service availability'
  }
];