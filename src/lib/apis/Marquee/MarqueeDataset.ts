import { BreakingNewsApiResponse, BreakingNewsData } from "@/lib/types/BreakingDataSet/BreakingDataSet";


export const BreakingDataSet = async (): Promise<BreakingNewsData[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/marquees`,
      {
        next: { revalidate: 1 },
      }
    );

    const data: BreakingNewsApiResponse = await response.json();

    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
