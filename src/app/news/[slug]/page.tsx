// app/news/[slug]/page.tsx
import NewsDetails from "@/components/NewsDetails/NewsDetails";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(
      `https://admin.kau.khandkershahed.com/api/v1/news/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 60 } } // optional: ISR
    );

    if (!res.ok) return { title: "News | Not Found" };

    const newsData = await res.json();
    const newsItem = newsData?.data?.news;

    return {
      title: newsItem?.title || "News",
      description: newsItem?.summary || "Latest news from our site",
      openGraph: {
        title: newsItem?.title || "News",
        description: newsItem?.summary || "Latest news from our site",
        images: newsItem?.thumb_image ? [newsItem.thumb_image] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: newsItem?.title || "News",
        description: newsItem?.summary || "Latest news from our site",
        images: newsItem?.thumb_image ? [newsItem.thumb_image] : [],
      },
    };
  } catch (err) {
    console.error("Error generating metadata:", err);
    return { title: "News" };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `https://admin.kau.khandkershahed.com/api/v1/news/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return <NoDataFound message="News not found" />;

    const newsData = await res.json();
    const newsItem = newsData?.data?.news;

    return (
      <div>
        <NewsDetails newsData={newsItem} />
      </div>
    );
  } catch (err) {
    console.error(err);
    return <div>Error loading news</div>;
  }
}
