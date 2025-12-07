import NoticeDetails from "@/components/NoticeBoard/NoticeDetails";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

interface PageProps {
  params: { slug: string };
}

// Dynamic metadata
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `https://admin.kau.khandkershahed.com/api/v1/notices/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 1 } }
    );

    if (!res.ok) return <NoDataFound message="News not found" />;

    const noticeData = await res.json();
    const noticeItem = noticeData?.data?.notice;
    console.log(noticeItem, "noticeItem");
    return (
      <div>
        <NoticeDetails notice={noticeItem} />
      </div>
    );
  } catch (err) {
    console.error(err);
    return <div>Error loading news</div>;
  }
}
