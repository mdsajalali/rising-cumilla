import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Footer";
import Header from "../pages/Home/Header";
import Navbar from "../pages/Home/Navbar";

const Root = () => {
  return (
    <div className="bg-[#FAFFF1]">
      <div className="max-w-[1230px] mx-auto">
        <Header />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
