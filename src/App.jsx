import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";
import Navbar from "./pages/Home/Navbar";

const App = () => {
  return (
    <div className="bg-[#FAFFF1] min-h-screen">
      <div className="max-w-[1230px] mx-auto">
        <Header />
      </div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default App;
