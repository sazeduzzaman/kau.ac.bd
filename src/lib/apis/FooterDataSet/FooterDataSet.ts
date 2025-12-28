import { FooterAPIResponse } from "@/lib/types/FooterDataTypes/FooterDataTypes";

export const fetchFooterData = async (): Promise<FooterAPIResponse> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/footer`,
      {
        next: { revalidate: 1 },
      }
    );

    const data: FooterAPIResponse = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    throw new Error("Something went wrong while fetching footer data.");
  }
};

