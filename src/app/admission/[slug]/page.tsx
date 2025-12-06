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
      `https://admin.kau.khandkershahed.com/api/v1/admissions/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return <NoDataFound message="News not found" />;

    const admissionData = await res.json();
    const admissionItem = admissionData?.data;
    console.log(admissionItem, "Admission Items");
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
