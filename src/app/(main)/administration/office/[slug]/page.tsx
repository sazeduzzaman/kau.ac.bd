import AdministrationSectionMembers from "@/components/AdministrationSectionMembers/AdministrationSectionMembers";
import NoDataFound from "@/components/Shared/NoDataFound/NoDataFound";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } =await params;

  try {
    const res = await fetch(
      `https://admin.kau.khandkershahed.com/api/v1/administration/office/${encodeURIComponent(
        slug
      )}`,
      { next: { revalidate: 1 } }
    );

    if (!res.ok) return <NoDataFound message="Office not found" />;

    const admissionData = await res.json();
    const admissionItem = admissionData?.data;

    return (
      <div>
        <AdministrationSectionMembers admissionItem={admissionItem} />
      </div>
    );
  } catch (err) {
    console.error(err);
    return <div>Error loading office data</div>;
  }
}
