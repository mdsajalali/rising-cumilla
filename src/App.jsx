import CountryNews from "./pages/Home/CountryNews";
import DistrictNews from "./pages/Home/DistrictNews";
import Entertainment from "./pages/Home/Entertainment";
import Heading from "./pages/Home/Heading";
import InternationalNews from "./pages/Home/InternationalNews";
import NewsCarts from "./pages/Home/NewsCarts";
import Sports from "./pages/Home/Sports";
import TopNews from "./pages/Home/TopNews";

const App = () => {
  return (
    <div className="bg-[#FAFFF1] min-h-screen px-5">
      <Heading />
      <TopNews />
      <NewsCarts />
      <CountryNews />
      <InternationalNews />
      <Heading />
      <DistrictNews />
      <Sports />
      <Heading />
      <Entertainment />
      <div className="bg-[#DFF2CA] max-w-[1230px] mx-auto px-5 rounded-sm">
        <h1 className="text-center my-10 pt-5   text-2xl">লাইফস্টাইল</h1>
        <NewsCarts />
      </div>
    </div>
  );
};

export default App;
