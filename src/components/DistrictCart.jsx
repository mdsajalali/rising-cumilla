import { Link  } from "react-router-dom";

const DistrictCart = ({ news }) => {
 
  return (
    <Link to={`districtNewsDetail/${news.id}`}>
      <img className="w-72" src={news.img} alt="" />
      <p className="mt-2">{news.news_desc}</p>
    </Link>
  );
};

export default DistrictCart;
