import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LatestNews from "../pages/Home/LatestNews";
import ReadMore from "./ReadMore";
import DetailsHeading from "../pages/Home/DetailsHeading";

const DistrictNewsDetail = () => {
  const { id } = useParams();
  const idx = parseInt(id);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("/DistrictNews.json")
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
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div>
          <DetailsHeading />
          <div>
            <img src={news.img} alt="" />
            <hr className="my-5" />
            <p>{news.news_desc}</p>
          </div>
        </div>
        <div>
          <LatestNews />
        </div>
      </div>
      <ReadMore />
    </div>
  );
};

export default DistrictNewsDetail;
