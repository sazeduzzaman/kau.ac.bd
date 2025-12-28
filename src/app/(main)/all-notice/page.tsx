import NoticeBoard from "@/components/NoticeBoard/NoticeBoard";
import { NoticesDataSet } from "@/lib/apis/NoticesDataSet/NoticesDataSet";

// NoticeBoard Page Component
export default async function Page() {
  const noticesData = await NoticesDataSet();
  return <NoticeBoard noticesData={noticesData} />;
}
