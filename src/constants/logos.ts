export interface LogoItem {
  id: string;
  name: string;
  imageUrl: string;
  alt: string;
  website?: string;
}

export const TRUSTED_COMPANIES: LogoItem[] = [
  {
    id: 'flowte',
    name: 'Flowte',
    imageUrl: '/logos/flowte.png',
    alt: 'Flowte logo',
    website: 'https://flowte.com'
  },
  {
    id: 'alo-ingressos',
    name: 'Alô Ingressos',
    imageUrl: '/logos/alo-ingressos.jpg',
    alt: 'Alô Ingressos logo',
    website: 'https://aloingressos.com.br'
  },
  {
    id: 'flicket',
    name: 'Flicket',
    imageUrl: '/logos/flicket.webp',
    alt: 'Flicket logo',
    website: 'https://flicket.com'
  },
  {
    id: 'billeto',
    name: 'Billetto',
    imageUrl: '/logos/billeto.png',
    alt: 'Billetto logo',
    website: 'https://billetto.com'
  },
  {
    id: 'atrapalo',
    name: 'Atrapalo.com',
    imageUrl: '/logos/atrapalo.png',
    alt: 'Atrapalo.com logo',
    website: 'https://atrapalo.com'
  },
  {
    id: 'ticketpark',
    name: 'TicketPark',
    imageUrl: '/logos/ticketpark.png',
    alt: 'TicketPark logo',
    website: 'https://ticketpark.com'
  },
  {
    id: 'gofan',
    name: 'GoFan',
    imageUrl: '/logos/gofan.png',
    alt: 'GoFan logo',
    website: 'https://gofan.co'
  },
  {
    id: 'oscars',
    name: 'The Oscars',
    imageUrl: '/logos/oscars.jpg',
    alt: 'The Oscars logo',
    website: 'https://oscars.org'
  },
  {
    id: 'fever',
    name: 'Fever',
    imageUrl: '/logos/fever.jpg',
    alt: 'Fever logo',
    website: 'https://feverup.com'
  },
  {
    id: 'boletia',
    name: 'Boletia',
    imageUrl: '/logos/logo-boletia.webp',
    alt: 'Boletia logo',
    website: 'https://boletia.com'
  },
  {
    id: 'get-your-guide',
    name: 'GetYourGuide',
    imageUrl: '/logos/GetYourGuide.png',
    alt: 'GetYourGuide logo',
    website: 'https://getyourguide.com'
  },
  {
    id: 'tickettailor',
    name: 'TicketTailor',
    imageUrl: '/logos/ticket-tailor-logo.png',
    alt: 'TicketTailor logo',
    website: 'https://tickettailor.com'
  },
  {
    id: 'leap',
    name: 'Leap Event Technology',
    imageUrl: '/logos/leap-tecnology-logo.png',
    alt: 'Leap Event Technology logo'
  },
  {
    id: 'prekindle',
    name: 'Prekindle',
    imageUrl: '/logos/prekindle-logo.png',
    alt: 'Prekindle logo'
  },
  {
    id: 'ticketsocket',
    name: 'TicketSocket',
    imageUrl: '/logos/TicketSocket_Logo.jpg',
    alt: 'TicketSocket logo'
  },
  {
    id: 'future-ticketing',
    name: 'Future Ticketing',
    imageUrl: '/logos/Logo-FT.jpg',
    alt: 'Future Ticketing logo'
  },
  {
    id: 'skiddle',
    name: 'Skiddle',
    imageUrl: '/logos/skiddle.png',
    alt: 'Skiddle logo',
    website: 'https://skiddle.com'
  }
];

export const LOGO_ROWS = {
  row1: TRUSTED_COMPANIES.slice(0, 9),
  row2: TRUSTED_COMPANIES.slice(9, 18),
} as const;