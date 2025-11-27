export type ScreenshotCategory =
  | 'receipts'
  | 'meme'
  | 'directions'
  | 'boarding-pass'
  | 'conversation'
  | 'other';

export type AutoDeletePolicy = {
  enabled: boolean;
  daysUntilDeletion: number;
};

export type Screenshot = {
  id: string;
  title: string;
  capturedAt: string;
  category: ScreenshotCategory;
  summary: string;
  ocrText: string;
  autoDelete: AutoDeletePolicy;
  tags?: string[];
};
