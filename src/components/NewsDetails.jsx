
const NewsDetails = ({news}) => {
  return (
    <div>
      <img className="w-72" src={news.img} alt="" />
      <p className="mt-2">{news.news_desc}</p>
    </div>
  );
}

export default NewsDetails