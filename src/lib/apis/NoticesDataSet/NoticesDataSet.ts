import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";

export async function NoticesDataSet(): Promise<Notice[]> {
  try {
    const res = await fetch(
      "https://admin.kau.khandkershahed.com/api/v1/notice-categories"
    );

    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return []; // fallback to empty array
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await res.text();
      console.error("Received non-JSON response:", text);
      return [];
    }

    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data : [];

    const allNotices: Notice[] = data.flatMap((category: any) => {
      const notices = Array.isArray(category.notices) ? category.notices : [];
      return notices.map((n: any) => {
        let attachments: string[] = [];
        if (Array.isArray(n.attachments)) {
          attachments = n.attachments;
        } else if (typeof n.attachments === "string") {
          try {
            attachments = JSON.parse(n.attachments);
            if (!Array.isArray(attachments)) attachments = [];
          } catch {
            attachments = [];
          }
        }

        return {
          id: n.id,
          category: category.name || "Uncategorized",
          type: "notice" as const,
          isNew:
            new Date(n.publish_date) >
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          title: n.title,
          slug: n.slug,
          category_id: n.category_id,
          publish_date: n.publish_date,
          first_attachment: n.first_attachment,
          attachments,
        } as Notice;
      });
    });

    return allNotices;
  } catch (err) {
    console.error("Failed to fetch notices:", err);
    return []; // fallback
  }
}
