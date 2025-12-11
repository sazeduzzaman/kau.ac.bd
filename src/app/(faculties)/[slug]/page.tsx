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
  const departmentsStuff = departmentData?.staff || [];
  // -----------------------------
  // Fetch Pages
  // -----------------------------
  const resPage = await fetch(
    `https://admin.kau.khandkershahed.com/api/v1/academics/sites/${slug}/pages`,
    { cache: "no-store" }
  );
  const dataPage = await resPage.json();

  // Safe check – pages exists & is array
  const pages = Array.isArray(dataPage?.pages) ? dataPage.pages : [];

  // -----------------------------
  // Find Home Page
  // -----------------------------
  const homePage = pages.find((p: any) => p.is_home === true);

  return (
    <div className="text-black">
      <div>
        {/* -----------------------------
            ✔ Show Hero ONLY if home page exists
           ----------------------------- */}
        {homePage && <FacultyHero homePageData={homePage} />}

        {/* -----------------------------
            ✔ Show Departments ONLY if:
              - home page exists
              - is_department_boxes === true
              - departments list exists
           ----------------------------- */}
        {homePage?.is_department_boxes === true && departments.length > 0 && (
          <DepartmentCard
            departments={departments}
            basePath={`/${slug}/departments`}
          />
        )}
      </div>
    </div>
  );
}
