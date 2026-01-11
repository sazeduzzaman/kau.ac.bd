import FacultyMember from "@/app/(faculties)/components/FacultyMember/FacultyMember";

interface StaffPageProps {
  params: Promise<{ slug: string; pageSlug: string; childSlug: string }>;
}

/* -----------------------------
    GENERATE STATIC PARAMS
----------------------------- */
export async function generateStaticParams() {
  // 1. Fetch your data from your database or CMS
  // This must return an array of all possible URL combinations
  // Example: if the URL is /engineering/cs/staff, then:
  // slug = engineering, pageSlug = cs, childSlug = staff
  
  // const faculties = await getFacultiesFromDB(); 

  return [
    { slug: "science", pageSlug: "physics", childSlug: "professors" },
    { slug: "arts", pageSlug: "history", childSlug: "lecturers" },
    // Add all your actual paths here
  ];
}

/* -----------------------------
    PAGE COMPONENT
----------------------------- */
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