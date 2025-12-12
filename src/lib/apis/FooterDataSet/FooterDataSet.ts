import { FooterAPIResponse, FooterData } from "@/lib/types/FooterDataTypes/FooterDataTypes";

export const fetchFooterData = async (): Promise<FooterData> => {
  try {
    const response = await fetch(
      "https://admin.kau.khandkershahed.com/api/v1/footer",
      { next: { revalidate: 1 } }
    );

    const result: FooterAPIResponse = await response.json();

    if (!result.success) {
      throw new Error("API returned unsuccessful response");
    }

    return result.data; // ✅ Return only FooterData
  } catch (error) {
    console.error("Failed to fetch footer data:", error);
    throw new Error("Something went wrong while fetching footer data.");
  }
};
