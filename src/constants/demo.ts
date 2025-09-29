export interface Template {
  id: string;
  name: string;
  description: string;
  category: 'theater' | 'stadium' | 'conference' | 'custom';
  seats: number;
  image: string;
}

export interface Example {
  id: string;
  name: string;
  description: string;
  complexity: 'simple' | 'medium' | 'complex';
  useCase: string;
  image: string;
}