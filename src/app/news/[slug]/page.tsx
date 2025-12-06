import NewsDetails from "@/components/NewsDetails/NewsDetails";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ no await

  // Fetch data from the API
  const res = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/news/${slug}`
  );
  const newsData = await res.json();

  // Extract only the 'news' object
  const newsItem = newsData?.data?.news;

  return (
    <div>
      <NewsDetails newsData={newsItem} />
    </div>
  );
}
