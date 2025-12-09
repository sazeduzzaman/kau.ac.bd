// app/(faculties)/layout.tsx
import FacultiesFooter from "./components/Shared/Footer/FacultiesFooter";
import FacultiesHeader from "./components/Shared/Header/FacultiesHeader";
import "@/app/(main)/globals.css"; // adjust path if needed

export default function FacultiesRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen faculties-layout-container">
          <FacultiesHeader />
          <main className="flex-1">{children}</main>
          <FacultiesFooter/>
        </div>
      </body>
    </html>
  );
}
