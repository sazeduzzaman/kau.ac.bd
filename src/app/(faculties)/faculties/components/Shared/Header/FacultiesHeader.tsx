// app/(faculties)/faculties/components/Header.tsx
"use client";

import Link from "next/link";

export default function FacultiesHeader() {
  return (
    <header className="p-4 text-white bg-blue-600 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/" className="text-xl font-bold">
          KU Faculties
        </Link>
        <nav className="flex gap-4">
          <Link
            href="/faculties/veterinary-animal-biomedical"
            className="hover:text-gray-200"
          >
            Veterinary
          </Link>
          <Link href="/faculties/agriculture" className="hover:text-gray-200">
            Agriculture
          </Link>
          <Link
            href="/faculties/fisheries-oceans"
            className="hover:text-gray-200"
          >
            Fisheries
          </Link>
        </nav>
      </div>
    </header>
  );
}
