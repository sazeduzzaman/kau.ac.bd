import {
  NewsAPIResponse,
  NewsItem,
} from "@/lib/types/NewsDataSetTypes/NewsDataSetTypes";

// Returns only the news items (array) from the paginated response
export const NewsDataSet = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(
      "https://admin.kau.khandkershahed.com/api/v1/news",
      {
        next: { revalidate: 1 },
      }
    );

    const data: NewsAPIResponse = await response.json();

    // Return only the array of news items
    return data.data.data; // first "data" is the API response, second "data" is the array of items
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
