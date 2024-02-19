import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const InternationalNewsTop = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("TopNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const [interNews, setInterNews] = useState([]);
  useEffect(() => {
    fetch("InternationalNews.json")
      .then((res) => res.json())
      .then((data) => setInterNews(data));
  }, []);

  console.log(news);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-10 ">
      {news.map((news) => (
        <>
          <div key={news.id} className="relative">
            <div className="flex items-center gap-3">
              <h1 className="font-bold my-5 text-[18px]">{news.name}</h1>
              <div>
                <div className="w-40 mt-8 border-red-500 border-t-4 pb-2"></div>
                <div className="w-40  border-red-500 border-t-4 p-4"></div>
              </div>
            </div>
            <img src={news.img} alt="" />
            <p className="absolute top-48 p-1 font-bold text-[#FFF8ED] ">
              {news.news_desc}
            </p>
            <div>
              {interNews.map((interNews) => (
                <Link
                  to={`/internationalNewsDetail/${interNews.id}`}
                  key={interNews.id}
                  className="flex mt-5 gap-2"
                >
                  <img
                    className="w-20 h-18 object-cover"
                    src="https://i0.wp.com/risingcumilla.com/wp-content/uploads/2024/02/Handover-of-GI-certificate-of-three-products-including-Tangail-sarees-to-the-Prime-Minister.webp?fit=1200%2C750&ssl=1"
                    alt=""
                  />
                  <p>
                    প্রধানমন্ত্রীর কাছে টাঙ্গাইল শাড়িসহ তিন পণ্যের জিআই সনদ
                    হস্তান্তর
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default InternationalNewsTop;
