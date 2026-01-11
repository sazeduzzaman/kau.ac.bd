import FacultyInnerPages from "../../components/FacultyInnerPages/FacultyInnerPages";

interface Props {
  params: { slug: string; pageSlug: string };
}

/* -----------------------------
   PAGE METADATA (ASYNC)
----------------------------- */
/* -----------------------------
   GENERATE STATIC PARAMS
----------------------------- */
export async function generateStaticParams() {
  // In a real app, you would fetch this from your database/API
  // const data = await fetch('https://api.yourdomain.com/faculties').then(res => res.json());

  return [
    { slug: "engineering", pageSlug: "computer-science" },
    { slug: "science", pageSlug: "biology" },
    { slug: "business", pageSlug: "marketing" },
  ];
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
