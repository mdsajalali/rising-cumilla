import CountryNews from "./pages/Home/CountryNews";
import DistrictNews from "./pages/Home/DistrictNews";
import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";
import Heading from "./pages/Home/Heading";
import InternationalNews from "./pages/Home/InternationalNews";
import Navbar from "./pages/Home/Navbar";
import NewsCarts from "./pages/Home/NewsCarts";
import TopNews from "./pages/Home/TopNews";

const App = () => {
  return (
    <div className="bg-[#FAFFF1] min-h-screen">
      <div className="max-w-[1230px] mx-auto">
        <Header />
      </div>
      <Navbar />
      <Heading />
      <TopNews />
      <NewsCarts />
      <CountryNews />
      <InternationalNews />
      <Heading />
      <DistrictNews />
      <div className="bg-[#DFF2CA] max-w-[1230px] mx-auto px-5 rounded-sm">
        <h1 className="text-center my-10 pt-5   text-2xl">লাইফস্টাইল</h1>
        <NewsCarts />
      </div>
      <Footer />
    </div>
  );
};

export default App;
