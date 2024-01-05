import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";
import Navbar from "./pages/Home/Navbar";
import Heading from './pages/Home/Heading';
import DistrictNews from "./pages/Home/DistrictNews";

const App = () => {
  return (
    <div className="bg-[#FAFFF1] min-h-screen">
      <div className="max-w-[1230px] mx-auto">
        <Header />
      </div>
      <Navbar />
      <Heading />
      <DistrictNews />
      <Footer />
    </div>
  );
};

export default App;
