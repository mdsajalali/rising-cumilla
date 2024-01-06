import { useEffect, useState } from "react";

const ReadMore = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      fetch("/Readmore.json")
        .then((res) => res.json())
        .then((data) => setNews(data));
    }, []);
  return (
    <div className="my-10">
      <hr />
      <h1 className="font-bold text-2xl my-3">আরও পড়ুন</h1>
      <div className="grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10">
        {news.map((news) => (
          <div key={news.id}>
            <img src={news.img} alt="" />
            <p>{news.news_desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReadMore