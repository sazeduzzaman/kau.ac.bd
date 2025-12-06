"use client";

import React from "react";
import {
  X,
  Calendar,
  FileText,
  Download,
  FileType,
  ExternalLink,
} from "lucide-react";
import { Notice } from "@/lib/types/NoticesDataSetTypes/NoticesDataSetTypes";
import Link from "next/link";

interface NoticeModalProps {
  notice: Notice;
  onClose: () => void;
}

const NoticeModal: React.FC<NoticeModalProps> = ({ notice, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-100 bg-site-primary">
          <h3 className="text-lg font-bold text-gray-900">Notice Details</h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 transition-colors rounded-full hover:bg-red-500"
          >
            <X className="w-5 h-5" color="white" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
            <span className="flex items-center gap-1 px-3 py-1 font-medium text-gray-700 bg-gray-100 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              {notice.publish_date}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 font-medium text-gray-700 bg-gray-100 rounded-full">
              <FileText className="w-3.5 h-3.5" />
              {notice.category}
            </span>
          </div>

          <h2 className="text-xl font-bold leading-relaxed text-gray-900 md:text-2xl">
            {notice.title}
          </h2>

          {notice.attachments && notice.attachments.length > 0 && (
            <div className="p-6 border bg-emerald-50 rounded-xl border-emerald-100">
              <h4 className="flex items-center gap-2 mb-4 font-semibold text-emerald-800">
                <Download className="w-5 h-5" />
                Attachments
              </h4>

              <div className="flex flex-col gap-3">
                {notice.attachments.map((file, i) => (
                  <Link
                    href={"/"}
                    target="_blank"
                    key={i}
                    className="flex items-center justify-between p-4 transition-all bg-white border rounded-lg border-emerald-100 hover:border-emerald-300 hover:shadow-md group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 text-red-500 rounded-lg bg-red-50">
                        {file.endsWith(".pdf") ? (
                          <FileText className="w-6 h-6" />
                        ) : (
                          <FileType className="w-6 h-6 text-blue-500" />
                        )}
                      </div>

                      <div className="text-left">
                        <p className="font-medium text-gray-800 transition-colors group-hover:text-emerald-700">
                          {file}
                        </p>
                        <p className="text-xs text-gray-500">Attachment</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <p className="pt-4 text-sm leading-relaxed text-gray-600 border-t">
            This notice was published on the official university website. For
            more details or verification, please contact the administrative
            office.
          </p>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 flex justify-end gap-3 p-6 border-t border-gray-100 bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
