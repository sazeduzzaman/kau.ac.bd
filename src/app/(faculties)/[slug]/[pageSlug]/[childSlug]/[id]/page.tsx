import MemberDetails from "@/app/(faculties)/components/FacultyMember/MemberDetails/MemberDetails";

interface StaffPageProps {
  params: { slug: string; pageSlug: string; childSlug: string; id: number };
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
      {/* <div className="text-black">
        SLUG: {slug} <br />
        PAGE SLUG: {pageSlug} <br />
        CHILD SLUG: {childSlug} <br />
        ID: {id}
      </div> */}
      <MemberDetails />
    </div>
  );
}
