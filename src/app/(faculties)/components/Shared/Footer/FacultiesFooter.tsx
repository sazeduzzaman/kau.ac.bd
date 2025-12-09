// app/(faculties)/faculties/components/Footer.tsx
export default function FacultiesFooter() {
  return (
    <footer className="p-4 mt-8 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Khulna Agricultural University</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}
