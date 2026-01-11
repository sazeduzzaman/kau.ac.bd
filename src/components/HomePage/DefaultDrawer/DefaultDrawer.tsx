"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import HtmlRenderer from "@/lib/HtmlRenderer/HtmlRenderer";

const DefaultDrawer = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-9999 bg-black transition-opacity duration-300
        ${open ? "opacity-80" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 z-10000
        w-full max-w-4xl -translate-x-1/2 -translate-y-1/2
        bg-white rounded-xl shadow-2xl transition-all duration-300
        ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4"
        >
          <FaTimes />
        </button>

        <div className="bg-[#004b49] p-6 text-white">
          <h1 className="text-3xl font-bold">{data.title}</h1>
        </div>

        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <HtmlRenderer content={data.content} />
        </div>
      </div>
    </>
  );
};

export default DefaultDrawer;
