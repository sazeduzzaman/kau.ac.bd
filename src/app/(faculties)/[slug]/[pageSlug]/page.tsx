import type { Metadata } from "next";
import FacultyInnerPages from "../../components/FacultyInnerPages/FacultyInnerPages";

interface Props {
  params: { slug: string; pageSlug: string };
}

/* -----------------------------
   PAGE METADATA (ASYNC)
----------------------------- */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, pageSlug } = await params;

  const format = (value?: string) =>
    value
      ? value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "";

  return {
    title: `${format(pageSlug)} | ${format(slug)}`,
  };
}

/* -----------------------------
   PAGE COMPONENT
----------------------------- */
export default async function Page({ params }: Props) {
  const { slug, pageSlug } = await params;

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
      <FacultyInnerPages slug={slug} pageSlug={pageSlug} />
    </div>
  );
}
