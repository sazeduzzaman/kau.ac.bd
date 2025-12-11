import DepartmentCard from "../components/FacultyHomePage/DepartmentsGrid";
import FacultyHero from "../components/FacultyHomePage/FacultyHero";

interface Props {
  params: { slug: string };
}

export default async function FacultyPage({ params }: Props) {
  const { slug } = await params;

  // -----------------------------
  // Fetch Departments and Staff
  // -----------------------------
  const res = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/departments-and-staff`,
    { cache: "no-store" }
  );
  const departmentData = await res.json();
  const departments = departmentData?.departments || [];

  // -----------------------------
  // Fetch Pages
  // -----------------------------
  const resPage = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`,
    { cache: "no-store" }
  );
  const dataPage = await resPage.json();
  const pages = Array.isArray(dataPage?.pages) ? dataPage.pages : [];

  // -----------------------------
  // Find Home Page
  // -----------------------------
  const homePage = pages.find((p: any) => p.is_home);
  const showDepartments =
    homePage?.is_department_boxes && departments.length > 0;

  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: 'url("/images/facultybg-3.png")',
        backgroundSize: "container",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="">
        {homePage && <FacultyHero homePageData={homePage} />}
        {showDepartments && (
          <DepartmentCard
            departments={departments}
            basePath={`/${slug}/departments`}
          />
        )}
      </div>
    </div>
  );
}
