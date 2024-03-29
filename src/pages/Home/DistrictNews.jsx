import { useEffect, useState } from "react";
import DistrictCart from "../../components/DistrictCart";

const DistrictNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("DistrictNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="bg-[#EEF3DC] p-2">
      <div className="max-w-[1230px] mx-auto list-none ">
        <h1 className="text-center my-10 text-2xl font-bold border-b-4 border-red-400 w-[85px] mx-auto pb-1">
          কুমিল্লা
        </h1>
        <nav className="flex flex-wrap gap-5 px-5 sm:px-10 md:px-20 items-center justify-center">
          <li>
            <a href="#">সকল খবর</a>
          </li>
          <li>
            <a href="#">কুমিল্লা সিটি</a>
          </li>
          <li>
            <a href="#">আদর্শ সদর</a>
          </li>
          <li>
            <a href="#">চান্দিনা</a>
          </li>
          <li>
            <a href="#">চৌদ্দগ্রাম</a>
          </li>
          <li>
            <a href="#">তিতাস</a>
          </li>
          <li>
            <a href="#">দাউদকান্দি</a>
          </li>
          <li>
            <a href="#">দেবিদ্বার</a>
          </li>
          <li>
            <a href="#">নাঙ্গলকোট</a>
          </li>
          <li>
            <a href="#">বরুড়া</a>
          </li>
          <li>
            <a href="#">বুড়িচং</a>
          </li>
          <li>
            <a href="#">ব্রাহ্মণপাড়া</a>
          </li>
          <li>
            <a href="#">মনোহরগঞ্জ</a>
          </li>
          <li>
            <a href="#">মুরাদনগর</a>
          </li>
          <li>
            <a href="#">মেঘনা</a>
          </li>
          <li>
            <a href="#">লাকসাম</a>
          </li>
          <li>
            <a href="#">লালমাই</a>
          </li>
          <li>
            <a href="#">হোমনা</a>
          </li>
        </nav>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10">
          {news.map((news) => (
            <DistrictCart key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistrictNews;
