import NoticeBoard from "@/components/NoticeBoard/NoticeBoard";
import { NoticesDataSet } from "@/lib/apis/NoticesDataSet/NoticesDataSet";

export default async function Page() {
  const noticesData = await NoticesDataSet(); // fetch server-side
  console.log(noticesData, "noticesData");
  return <NoticeBoard noticesData={noticesData} />;
}
