export interface CalligraphyWork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  size: string;
  medium: string;
  category: string;
}

export const works: CalligraphyWork[] = [
  {
    id: '1',
    title: 'Serene Poetry',
    description: 'A beautiful piece combining watercolor and copperplate calligraphy',
    imageUrl: '/cal1.png',
    date: '2023-05-15',
    size: '12x16 inches',
    medium: 'Ink and watercolor on cotton paper',
    category: 'Framed Art',
  },
  {
    id: '2',
    title: 'Wedding Vows',
    description: 'Elegant Spencerian script for a wedding ceremony',
    imageUrl: '/cal2.jpg',
    date: '2023-06-22',
    size: '8x10 inches',
    medium: 'Gouache on vellum',
    category: 'Commission',
  },
  {
    id: '3',
    title: 'Ancient Wisdom',
    description: 'Traditional Chinese calligraphy with modern interpretation',
    imageUrl: '/cal3.jpg',
    date: '2023-04-10',
    size: '18x24 inches',
    medium: 'Ink on rice paper',
    category: 'Exhibition',
  },
  {
    id: '4',
    title: 'Business Logo',
    description: 'Custom logo design with flourished lettering',
    imageUrl: '/cal4.jpg',
    date: '2023-07-05',
    size: '6x6 inches',
    medium: 'Digital vector',
    category: 'Commercial',
  },
  {
    id: '5',
    title: 'Poetry Collection',
    description: 'Hand-lettered book of classic poems',
    imageUrl: '/cal5.webp',
    date: '2023-03-18',
    size: '9x12 inches',
    medium: 'Ink and gold leaf on archival paper',
    category: 'Book Art',
  },
  {
    id: '6',
    title: 'Monogram Set',
    description: 'Personalized monograms for a family',
    imageUrl: '/cal6.webp',
    date: '2023-08-30',
    size: '5x5 inches each',
    medium: 'Gouache on bristol',
    category: 'Stationery',
  },
];