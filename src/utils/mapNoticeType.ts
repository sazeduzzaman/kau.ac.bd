export const mapNoticeType = (file?: string): "notice" | "pdf" | "doc" => {
  if (!file) return "notice";
  const ext = file.split(".").pop()?.toLowerCase();
  if (ext === "pdf") return "pdf";
  if (ext === "doc" || ext === "docx") return "doc";
  return "notice";
};
