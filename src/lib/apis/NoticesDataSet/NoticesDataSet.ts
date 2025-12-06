import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";

export async function NoticesDataSet(): Promise<Notice[]> {
  const res = await fetch(
    "https://admin.kau.khandkershahed.com/api/v1/notice-categories"
  );
  const json = await res.json();
  const data = json.data;

  const allNotices: Notice[] = data.flatMap((category: any) =>
    category.notices.map((n: any) => ({
      id: n.id,
      category: category.name,
      type: "notice" as const,
      isNew:
        new Date(n.publish_date) >
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      title: n.title,
      slug: n.slug,
      category_id: n.category_id,
      publish_date: n.publish_date,
      first_attachment: n.first_attachment,
      // parse attachments JSON string into string[]
      attachments: Array.isArray(n.attachments)
        ? n.attachments
        : JSON.parse(n.attachments || "[]"),
    }))
  );

  return allNotices;
}
