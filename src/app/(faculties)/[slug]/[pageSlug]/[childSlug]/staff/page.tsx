import FacultyMember from "@/app/(faculties)/components/FacultyMember/FacultyMember";

interface StaffPageProps {
  params: { slug: string; pageSlug: string; childSlug: string };
}

export default async function Page({ params }: StaffPageProps) {
  const { slug, childSlug, pageSlug } = await params;

  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: 'url("/images/facultybg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FacultyMember slug={slug} childSlug={childSlug} pageSlug={pageSlug} />
    </div>
  );
}
