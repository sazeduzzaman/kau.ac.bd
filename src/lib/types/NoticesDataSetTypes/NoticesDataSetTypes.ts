export interface Notice {
  id: number;
  category_id: string;
  title: string;
  slug: string;
  publish_date: string;
  category: string;
  type: "notice";
  isNew: boolean;
  attachments: string[]; // Always an array
  first_attachment: string;
}

export interface CategoryAPI {
  id: number;
  name: string;
  slug: string;
  notices: {
    id: number;
    category_id: string;
    title: string;
    slug: string;
    publish_date: string;
    attachments: string;
    first_attachment: string;
  }[];
}
