import FacultyInnerPages from "../../components/FacultyInnerPages/FacultyInnerPages";

interface Props {
  params: { slug: string; pageSlug: string };
}

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
