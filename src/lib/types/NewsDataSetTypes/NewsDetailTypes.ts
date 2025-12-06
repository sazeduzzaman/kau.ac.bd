// lib/types/NewsDetailTypes.ts

// Each detailed news item from the API
export interface NewsDetailItem {
  id: number;
  title: string;
  slug: string;
  thumb_image?: string;      // Thumbnail image
  content_image?: string;    // Content image
  banner_image?: string;     // Banner image (for metadata)
  summary: string;           // Short summary
  content: string;           // Full HTML/content
  author: string;            // Author name
  published_at: string;      // ISO date string
  read_time: number;         // Reading time in minutes
  category?: string;         // Category of the news
  tags?: string[];           // Tags array
  status: string;            // e.g., "published"
}

// API response for a single news fetch
export interface NewsDetailAPIResponse {
  success: boolean;
  data: {
    news: NewsDetailItem;
    related_news?: NewsDetailItem[]; // Optional related news
  };
}
