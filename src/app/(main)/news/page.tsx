import AllNews from "@/components/NewsDetails/AllNews";
import { NewsDataSet } from "@/lib/apis/NewsDataSet/NewsDataSet";


export default async function Page() {
  const newsData = await NewsDataSet(); // fetch server-side
  return (
    <div className="p-0 bg-white">
      <div className="container mx-auto">
        <AllNews newsData={newsData} />
      </div>
    </div>
  );
}
