import { Screenshot } from '../types';

export const sampleScreenshots: Screenshot[] = [
  {
    id: '1',
    title: 'Coffee shop receipt',
    capturedAt: '2024-10-10T09:12:00Z',
    category: 'receipts',
    summary: 'Latte and croissant, $9.50',
    ocrText: 'Latte 5.50, Croissant 4.00, Total 9.50',
    autoDelete: { enabled: true, daysUntilDeletion: 30 },
    tags: ['tax', 'breakfast']
  },
  {
    id: '2',
    title: 'Friend meme',
    capturedAt: '2024-10-09T20:40:00Z',
    category: 'meme',
    summary: 'Relatable group chat joke',
    ocrText: 'When the sprint ends but the bugs start',
    autoDelete: { enabled: true, daysUntilDeletion: 7 },
    tags: ['funny', 'chat']
  },
  {
    id: '3',
    title: 'Directions to meetup',
    capturedAt: '2024-10-05T15:10:00Z',
    category: 'directions',
    summary: 'Subway stops from JFK to Brooklyn',
    ocrText: 'Take A train to Hoyt-Schermerhorn, transfer to G',
    autoDelete: { enabled: false, daysUntilDeletion: 0 },
    tags: ['travel']
  },
  {
    id: '4',
    title: 'Boarding pass',
    capturedAt: '2024-09-28T06:30:00Z',
    category: 'boarding-pass',
    summary: 'Delta 1423 JFK -> SFO',
    ocrText: 'Boarding Zone 2 Seat 12C',
    autoDelete: { enabled: true, daysUntilDeletion: 3 },
    tags: ['flight', 'travel']
  },
  {
    id: '5',
    title: 'Conversation receipt request',
    capturedAt: '2024-09-26T11:05:00Z',
    category: 'conversation',
    summary: 'Client asking for invoice copy',
    ocrText: 'Can you send the receipt from Oct 1st?',
    autoDelete: { enabled: false, daysUntilDeletion: 0 },
    tags: ['work']
  }
];
