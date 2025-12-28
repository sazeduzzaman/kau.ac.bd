import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";

export async function NoticesDataSet(): Promise<Notice[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/notice-categories`
    );

    if (!res.ok) throw new Error(`Server returned ${res.status}`);

    const json = await res.json();
    const data = Array.isArray(json.data) ? json.data : [];

    return data.flatMap((category: any) => {
      const notices = Array.isArray(category.notices) ? category.notices : [];
      return notices.map((n: any) => ({
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
        attachments: Array.isArray(n.attachments)
          ? n.attachments
          : typeof n.attachments === "string"
          ? JSON.parse(n.attachments) || []
          : [],
      }));
    });
  } catch (err) {
    console.warn("API failed, using mock data:", err);

    return [
      {
        id: 0,
        category: "Mock Category",
        type: "notice" as const,
        isNew: true,
        title: "Mock Notice",
        slug: "mock-notice",
        category_id: "0",
        publish_date: new Date().toISOString(),
        first_attachment: "null",
        attachments: [],
      },
    ];
  }
}

