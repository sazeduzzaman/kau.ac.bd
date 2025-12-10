import DepartmentCard from "../components/FacultyHomePage/DepartmentsGrid";
import FacultyHero from "../components/FacultyHomePage/FacultyHero";

interface Props {
  params: { slug: string };
}

export default async function FacultyPage({ params }: Props) {
  const { slug } = await params;

  // Fetch data on the server
  const res = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/departments-and-staff`,
    { cache: "no-store" } // ensures fresh data
  );

  const data = await res.json();
  const departments = data.departments;

  // Extract site name and potentially slug name for the subtitle
  const siteName = data.site?.name || "Faculty/Site Name";
  const slugName = slug;

  // Fetch data on the server
  const resPage = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`,
    { cache: "no-store" } // ensures fresh data
  );
  const dataPage = await resPage.json();
  const homePageData = dataPage.pages[0];
  return (
    <div className="text-black">
      {/* Component Sections */}
      <div className="">
        <FacultyHero homePageData={homePageData} />
        {/* Pass the slug/site name as basePath if DepartmentCard needs it for linking */}
        <DepartmentCard
          departments={departments}
          basePath={`/${slug}/departments`}
        />
      </div>
    </div>
  );
}
