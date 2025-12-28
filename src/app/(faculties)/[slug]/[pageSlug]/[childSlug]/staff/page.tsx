import type { Metadata } from "next";
import FacultyMember from "@/app/(faculties)/components/FacultyMember/FacultyMember";

interface StaffPageProps {
  params: { slug: string; pageSlug: string; childSlug: string };
}

/* -----------------------------
   PAGE METADATA (ASYNC)
----------------------------- */
export async function generateMetadata({
  params,
}: StaffPageProps): Promise<Metadata> {
  const { slug, pageSlug, childSlug } = await params;

  // Example async: you can fetch API here if needed
  // const res = await fetch(`...`);
  // const data = await res.json();

  const format = (value?: string) =>
    value
      ? value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "";

  return {
    title: `${format(childSlug)} | ${format(pageSlug)} | ${format(slug)}`,
  };
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
