import { HomePageAPIResponse } from "@/lib/types/HomePageDataTypes/HomePageDataTypes";

export const HomePageDataSet = async (): Promise<HomePageAPIResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/homepage`,
      {
        next: { revalidate: 1 },
      }
    );

    const data: HomePageAPIResponse = await response.json();

    return data; // return the full object
  } catch (error) {
    console.error("Failed to fetch homepage data:", error);
    throw new Error("Something went wrong while fetching homepage data.");
  }
};
