import DistrictNews from "./pages/Home/DistrictNews";
import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";
import Heading from "./pages/Home/Heading";
import Navbar from "./pages/Home/Navbar";
import NewsCarts from "./pages/Home/NewsCarts";

const App = () => {
  return (
    <div className="bg-[#FAFFF1] min-h-screen">
      <div className="max-w-[1230px] mx-auto">
        <Header />
      </div>
      <Navbar />
      <Heading />
      <NewsCarts />
      <DistrictNews />
      <Footer />
    </div>
  );
};

export default App;
