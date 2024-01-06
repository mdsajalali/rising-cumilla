import { useEffect, useState } from "react";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/LatestNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="text-2xl mt-12 font-bold border-l-8 border-red-500">
        <h1 className="ml-5">সর্বশেষ</h1>
      </div>
      <div>
        {news.map((news) => (
          <div key={news.id} className="flex gap-4 my-5">
            <img className="w-40" src={news.img} alt="" />
            <p>{news.news_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
