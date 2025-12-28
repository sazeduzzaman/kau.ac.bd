import DepartmentCard from "../components/FacultyHomePage/DepartmentsGrid";
import FacultyHero from "../components/FacultyHomePage/FacultyHero";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

/* -----------------------------
   PAGE TITLE (SEO)
----------------------------- */
// import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Faculty Page",
  description: "All pages related to a specific faculty",
};

export default async function FacultyPage({ params }: Props) {
  const { slug } = await params;

  // -----------------------------
  // Fetch Departments and Staff
  // -----------------------------
  const depRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/academics/sites/${slug}/departments-and-staff`,
    { cache: "no-store" }
  );

  let departmentData: any = {};
  if (!depRes.ok) {
    console.error("Departments API returned:", await depRes.text());
  } else {
    try {
      departmentData = await depRes.json();
    } catch (err) {
      console.error("JSON Parse Error (Departments):", err);
      console.error("Server returned:", await depRes.text());
    }
  }

  const departments = Array.isArray(departmentData?.departments)
    ? departmentData.departments
    : [];

  // -----------------------------
  // Fetch Pages
  // -----------------------------
  const pageRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/academics/sites/${slug}/pages`,
    { cache: "no-store" }
  );

  let pageData: any = {};
  if (!pageRes.ok) {
    console.error("Pages API returned:", await pageRes.text());
  } else {
    try {
      pageData = await pageRes.json();
    } catch (err) {
      console.error("JSON Parse Error (Pages):", err);
      console.error("Server returned:", await pageRes.text());
    }
  }

  const pages = Array.isArray(pageData?.pages) ? pageData.pages : [];

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
      <div>
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
