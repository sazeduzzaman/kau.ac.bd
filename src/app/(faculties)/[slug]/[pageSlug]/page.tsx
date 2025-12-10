import FacultyInnerPages from "../../components/FacultyInnerPages/FacultyInnerPages";

interface Props {
  params: { slug: string; pageSlug: string };
}

export default async function Page({ params }: Props) {
  const { slug, pageSlug } = await params;

  return (
    <div className="">
      <FacultyInnerPages slug={slug} pageSlug={pageSlug} />
    </div>
  );
}
