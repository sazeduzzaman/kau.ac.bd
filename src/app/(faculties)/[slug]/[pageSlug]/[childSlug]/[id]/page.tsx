import MemberDetails from "@/app/(faculties)/components/FacultyMember/MemberDetails/MemberDetails";

interface StaffPageProps {
  params: { slug: string; pageSlug: string; childSlug: string; id: string };
}

export default async function Page({ params }: StaffPageProps) {
  const { slug, childSlug, pageSlug, id } = await params;
 
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
      <MemberDetails slug={slug} childSlug={childSlug} id={id} />
    </div>
  );
}
