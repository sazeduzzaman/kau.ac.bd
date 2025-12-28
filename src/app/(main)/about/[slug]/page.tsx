import AboutPage from "@/components/AboutPage/AboutPage";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/about-pages/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 1 } }
    );

    if (!res.ok) return <NoDataFound/>;

    const aboutData = await res.json();
    const aboutItem = aboutData?.page;
    return <div>
      <AboutPage aboutItem={aboutItem} />
    </div>;
  } catch (err) {
    console.error(err);
    return <div>Error loading office data</div>;
  }
}
