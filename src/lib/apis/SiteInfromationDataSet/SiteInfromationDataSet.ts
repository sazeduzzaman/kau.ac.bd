import { SettingsResponse } from "@/lib/types/SiteInfromationTypes/SiteInfromationTypes";

export async function SiteSettingDataset(): Promise<SettingsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/site-informations`
  );

  if (!res.ok) throw new Error("Failed to fetch site settings");

  const json: SettingsResponse = await res.json();

  return json;
}
