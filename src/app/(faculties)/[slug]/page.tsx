import DepartmentsGrid from "../components/FacultyHomePage/DepartmentsGrid";
import FacultyHero from "../components/FacultyHomePage/FacultyHero";

// app/(faculties)/faculties/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

// If you need async (e.g., fetch data), mark the function async
export default async function FacultyPage({ params }: Props) {
  const { slug } = await params; // NO await here

  // Example: fetch data if needed
  // const data = await fetch(`https://api.example.com/faculties/${slug}`).then(res => res.json());

  return (
    <>
      <FacultyHero />
      <DepartmentsGrid />
      <div className="container mx-auto">
        <div className="py-20 text-center text-black">
          <h1 className="text-3xl font-bold">{slug}</h1>
          <p>Details about {slug} faculty go here.</p>
        </div>
      </div>
    </>
  );
}
