import { useEffect, useState } from "react";
import NewsDetails from "../../components/NewsDetails";

const NewsCarts = () => {
  const [newsCart, setNewsCart] = useState([]);
  useEffect(() => {
    fetch("News.json")
      .then((res) => res.json())
      .then((data) => setNewsCart(data));
  }, []);
  return (
    <div className="max-w-[1230px] mx-auto">
      <hr />
      <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 my-10">
        {newsCart.map((news) => (
          <NewsDetails key={news.id} news={news} />
        ))}
      </div>
      <hr className="mb-10" />
    </div>
  );
};

export default NewsCarts;
