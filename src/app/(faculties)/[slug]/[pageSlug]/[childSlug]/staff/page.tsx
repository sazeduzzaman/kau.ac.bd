import FacultyMember from "@/app/(faculties)/components/FacultyMember/FacultyMember";

interface StaffPageProps {
  params: { slug: string; parentSlug: string; childSlug: string };
}

export default async function Page({ params }: StaffPageProps) {
  const { slug, childSlug } = await params;

  return (
    <div className="">
      <FacultyMember slug={slug} childSlug={childSlug} />
    </div>
  );
}
