import { Link } from "react-router-dom";

const InternationalNewsCart = ({ news }) => {
  return (
    <div>
      <Link to={`/internationalNewsDetail/${news.id}`}>
        <div className="flex gap-2">
          <img className="w-32 h-20 object-cover" src={news.img} alt="" />
          <p>{news.news_desc}</p>
        </div>
      </Link>
    </div>
  );
};

export default InternationalNewsCart;
