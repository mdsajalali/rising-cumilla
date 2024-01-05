import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsCartDetail = () => {
  const { id } = useParams();
  const idx = parseInt(id);
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/News.json")
      .then((res) => res.json())
      .then((data) => {
        const singleNews = data.find((item) => item.id === idx);
        setNews(singleNews);
      });
  }, [idx]);
  console.log(news);
  return (
    <div className="max-w-[1230px] mx-auto">
      <img className="w-1/2" src={news.img} alt="" />
      <p>{news.news_desc}</p>
    </div>
  );
};

export default NewsCartDetail;
