import NoticeBoard from "@/components/NoticeBoard/NoticeBoard";
import { NoticesDataSet } from "@/lib/apis/NoticesDataSet/NoticesDataSet";

export default async function Page() {
  const noticesData = await NoticesDataSet(); 
  return <NoticeBoard noticesData={noticesData} />;
}
