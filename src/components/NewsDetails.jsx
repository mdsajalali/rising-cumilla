import { Link } from "react-router-dom";

const NewsDetails = ({ news }) => {
  return (
    <div>
      <Link to={`newsCartDetail/${news.id}`}>
        <img className="w-72 mx-auto" src={news.img} alt="" />
        <p className="mt-2   text-center xl:text-left">{news.news_desc}</p>
      </Link>
    </div>
  );
};

export default NewsDetails;
