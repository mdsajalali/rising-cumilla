import { useEffect, useState } from "react";
import NewsCarts from "./NewsCarts";
import InternationalNewsCart from "../../components/InternationalNewsCart";

const InternationalNews = () => {
  const [news, setNews] = useState([]);
  console.log(news);
  useEffect(() => {
    fetch("InternationalNews.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="max-w-[1230px] mx-auto my-10">
      <NewsCarts />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {news.map(news => <InternationalNewsCart  key={news.id} news={news}/>)}
      </div>
    </div>
  );
};

export default InternationalNews;
