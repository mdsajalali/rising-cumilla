import InternationalNews from "./InternationalNews";
import NewsCarts from "./NewsCarts";

const NewsInformation = () => {
  return (
    <div className="max-w-[1230px] mx-auto my-10">
      <NewsCarts />
      <InternationalNews />
    </div>
  );
};

export default NewsInformation;
