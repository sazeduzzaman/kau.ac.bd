// Each individual news item
export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  publish_date: string;
  published_at: string;
  read_time: number;
  attachments: string[]; // Always an array
  first_attachment: string; // First file in attachments
  category?: string; // Optional if your API has categories
  summary?: string; // Optional, for displaying summaries
  imageUrl?: string; // Optional, for displaying images
  thumb_image?: string; // Optional, for displaying images
}

// Pagination link (used in API response)
export interface PaginationLink {
  url: string | null; // null if no link (e.g., first/last page)
  label: string; // Text label (e.g., "Next", "1", "2")
  active: boolean; // True if current page
}

// Full API response from backend
export interface NewsAPIResponse {
  success: boolean;
  data: {
    current_page: number;
    data: NewsItem[]; // Array of news items
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
}


