import { useEffect, useState } from "react";

const InternationalNewsTop = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("TopNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-10 ">
      {news.map((news) => (
        <div key={news.id} className="relative">
          <div className="flex items-center gap-3">
            <h1 className="font-bold my-5 text-[18px]">{news.name}</h1>
            <div>
              <div className="w-36 mt-8 border-red-500 border-t-4 pb-2"></div>
              <div className="w-36  border-red-500 border-t-4 p-4"></div>
            </div>
          </div>
          <img src={news.img} alt="" />
          <p className="absolute bottom-3 p-1 font-bold text-[#FFF8ED] ">
            {news.news_desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default InternationalNewsTop;
