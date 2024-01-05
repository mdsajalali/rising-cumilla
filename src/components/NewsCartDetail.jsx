import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsCartDetail = () => {
  const { id } = useParams();
  const idx = parseInt(id);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/News.json")
      .then((res) => res.json())
      .then((data) => {
        const singleNews = data.find((item) => item.id === idx);
        setNews(singleNews);
        setLoading(false);
      });
  }, [idx]);
  
  if (loading) {
    return (
      <div className="flex items-center  justify-center h-100">
        <span className="loading loading-spinner text-success my-10"></span>
      </div>
    );
  }
  console.log(news);
  return (
    <div className="max-w-[1230px] mx-auto">
      <img className="w-1/2" src={news.img} alt="" />
      <p>{news.news_desc}</p>f
    </div>
  );
};

export default NewsCartDetail;
