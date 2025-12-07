import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";
import { FileText } from "lucide-react";
import Link from "next/link";

interface SomeNoticeProps {
  noticesData: Notice[];
}

const SomeNotice = ({ noticesData }: SomeNoticeProps) => {
  return (
    <div className="col-span-1 overflow-hidden">
      {/* Header */}
      <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#00695c] to-[#004d40]">
        Notice Board
      </div>

      {/* Notice Cards */}
      <div className="border border-gray-200 rounded shadow-md card h-[780px]">
        <div className="card-body max-h-[825px] overflow-y-auto px-0 pt-2">
          <div className="p-4 space-y-4 custom-scrollbar">
            {noticesData?.map((notice) => {
              const date = new Date(notice.publish_date);
              const day = date.getDate().toString().padStart(2, "0");
              const month = date
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase();
              const year = date.getFullYear();

              return (
                <Link
                  key={notice.id}
                  href={`/all-notice/${notice.slug}`}
                  className="flex items-center gap-4 p-3 transition border border-gray-200 cursor-pointer bg-gray-50 hover:bg-teal-50/50"
                >
                  {/* DATE BOX */}
                  <div className="flex flex-col items-center justify-center h-16 text-gray-800 bg-white border border-gray-300 rounded shadow-sm w-14">
                    <span className="text-sm font-bold">{day}</span>
                    <span className="text-[10px] uppercase text-gray-600">
                      {month}
                    </span>
                    <span className="text-[9px] text-gray-400">{year}</span>
                  </div>

                  {/* TITLE + FILE */}
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-snug text-gray-800 hover:text-[#00695c]">
                      {notice.title}
                    </p>

                    {/* FILE LINK */}
                    {notice.first_attachment && (
                      <span
                        className="inline-flex items-center gap-1 mt-1 text-xs text-blue-600 hover:underline"
                      >
                        <FileText size={12} />
                        Download Attachment
                      </span>
                    )}
                  </div>

                  <div className="p-2 text-red-600 rounded-full bg-red-50">
                    <FileText size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer">
          <div className="py-3 text-lg font-bold text-center text-white bg-gradient-to-r from-[#00695c] to-[#004d40]">
            <Link
              href="/all-notice"
              className="text-sm font-semibold text-white hover:underline"
            >
              View All Notices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeNotice;
