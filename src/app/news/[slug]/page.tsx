// app/news/[slug]/page.tsx
import NewsDetails from "@/components/NewsDetails/NewsDetails";

interface PageProps {
  params: { slug: string };
}

export default async function page({ params }: any) {
  const { slug } = await params; // just get slug

  return (
    <div>
      <NewsDetails slug={slug} />
    </div>
  );
}
