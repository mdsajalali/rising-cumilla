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
      <h1 className="text-2xl font-bold">সর্বশেষ</h1>
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
