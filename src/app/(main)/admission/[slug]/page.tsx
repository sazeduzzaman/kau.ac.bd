import AdmissionContent from "@/components/Admission/AdmissionContent";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

interface PageProps {
  params: { slug: string };
}

// Dynamic metadata
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/admissions/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 1 } }
    );

    if (!res.ok) return <NoDataFound  />;

    const admissionData = await res.json();
    const admissionItem = admissionData?.data;
    return (
      <div>
        <AdmissionContent admissionItem={admissionItem} />
      </div>
    );
  } catch (err) {
    console.error(err);
    return <div>Error loading news</div>;
  }
}
