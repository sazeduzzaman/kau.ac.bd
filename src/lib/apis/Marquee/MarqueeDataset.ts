import { BreakingNewsApiResponse, BreakingNewsData } from "@/lib/types/BreakingDataSet/BreakingDataSet";


export const BreakingDataSet = async (): Promise<BreakingNewsData[]> => {
  try {
    const response = await fetch(
      "https://admin.kau.khandkershahed.com/api/v1/marquees",
      {
        next: { revalidate: 60 },
      }
    );

    const data: BreakingNewsApiResponse = await response.json();

    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
