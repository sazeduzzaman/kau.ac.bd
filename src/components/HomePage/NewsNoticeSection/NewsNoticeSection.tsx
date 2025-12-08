import { NewsDataSet } from "@/lib/apis/NewsDataSet/NewsDataSet";
import SomeNews from "./SomeNews";
import { NoticesDataSet } from "@/lib/apis/NoticesDataSet/NoticesDataSet";
import SomeNotice from "./SomeNotice";

export default async function NewsNoticeSection() {
  const newsData = await NewsDataSet(); // fetch server-side
  const newsItems = newsData.slice(0, 3);
  const noticesData = await NoticesDataSet();

  console.log(noticesData, "noticesData")
  return (
    <section className="px-4 py-16 font-sans bg-gray-50">
      <div className="mx-auto max-w-7xl">
        {/* ------- SECTION TITLE ------- */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-bold text-site-primary">
            Latest News & Notices
          </h2>
          <div className="w-32 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#fff] to-[#438ABA]" />
        </div>
        {/* ------- NEW MODERN LAYOUT ------- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* ------------ FEATURED NEWS (BIG CARD) ------------ */}
          <SomeNews newsData={newsItems} />

          {/* ------------ NOTICE BOARD (NEW DESIGN) ------------ */}
          <SomeNotice noticesData={noticesData} />
        </div>
      </div>
    </section>
  );
}
