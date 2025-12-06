// Single marquee item
export interface BreakingNewsData {
  typeof: string;
  title: string;
  url?: string;
  date?: string;
}

// Full API response
export interface BreakingNewsApiResponse {
  data: BreakingNewsData[];
}
