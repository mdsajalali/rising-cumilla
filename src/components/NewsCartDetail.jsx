import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LatestNews from "../pages/Home/LatestNews";
import DetailsHeading from "./../pages/Home/DetailsHeading";
import ReadMore from "./ReadMore";

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
    <div className="max-w-[1230px] mx-auto px-5">
      <div className="md:flex   gap-10 justify-between">
        <div className="max-w-[750px]">
          <DetailsHeading />
          <div>
            <img src={news.img} alt="" />
            <hr className="my-5" />
            <p>{news.news_desc}</p>
          </div>
        </div>
        <div className="max-w-[450px]">
          <LatestNews />
        </div>
      </div>
      <ReadMore />
    </div>
  );
};

export default NewsCartDetail;
