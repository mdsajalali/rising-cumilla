import { useEffect, useState } from "react";
import InternationalNewsCart from "../../components/InternationalNewsCart";
import InternationalNewsTop from "../../components/InternationalNewsTop";

const InternationalNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("InternationalNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="max-w-[1230px] mx-auto my-10">
      <InternationalNewsTop />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {news.map((news) => (
          <InternationalNewsCart key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default InternationalNews;
