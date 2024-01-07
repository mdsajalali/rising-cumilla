import { useEffect, useState } from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
const Header = () => {
  const [click, setClick] = useState(false);

  const [formattedDate, setFormattedDate] = useState("");

  const toggleNavbar = () => {
    setClick(!click);
  };

  useEffect(() => {
    const updateDate = () => {
      const currentDate = new Date();

      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const year = currentDate.getFullYear();

      let hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours || 12;

      const newFormattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${ampm}`;
      setFormattedDate(newFormattedDate);
    };

    const intervalId = setInterval(updateDate, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex items-center flex-col md:flex-row gap-5 justify-evenly pt-5 relative">
        <div>
          {/* mobile view start here*/}
          <div className="sm:hidden block">
            <div className="flex items-center gap-24">
              <div>
                <Link to="/">
                  <img className="w-56" src={logo} alt="logo" />
                </Link>
              </div>
              <div className="cursor-pointer" onClick={toggleNavbar}>
                <TbMenu2 size={25} />
              </div>
            </div>
          </div>
          {/* mobile view end here */}
          <div
            className="cursor-pointer  hidden sm:block  xl:-ml-6"
            onClick={toggleNavbar}
          >
            <TbMenu2 size={25} />
          </div>
          {click && (
            <nav className="w-[250px] bg-white list-none  cursor-pointer fixed top-0 left-0 min-h-screen    ">
              <Link to="/">
                <img
                  className="w-full px-10 py-5  bg-[#F5FFDC]"
                  src={logo}
                  alt=""
                />
              </Link>
              <li className="px-10 py-2 text-[#FF7676]">
                <Link to="/">প্রচ্ছদ</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">জাতীয়</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">সারা দেশ</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">কুমিল্লা</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">বিশ্ব</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">অর্থ ও বাণিজ্য</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">অর্থ ও বাণিজ্য</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">স্বাস্থ্য</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/">খেলা</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/"> বিনোদন</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/"> শিক্ষা</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/"> লাইফস্টাইল</Link>
              </li>
              <li className="px-10 py-2">
                <Link to="/"> জবস</Link>
              </li>

              <hr className="my-5 " />

              <div className="flex flex-col gap-5 px-10 py-2">
                <Link to="/">আমাদের সম্পর্কে</Link>
                <Link to="/">ব্যবহারের শর্তাবলি</Link>
                <Link to="/">গোপনীয়তার নীতি</Link>
              </div>
              <div className="flex gap-3 sm:gap-5 cursor-pointer my-5    justify-center ">
                <FaFacebook size={25} />
                <FaTwitter size={25} />
                <FaYoutube size={25} />
                <FaPinterest size={25} />
              </div>
            </nav>
          )}
        </div>
        <div>
          <Link to="/">
            <img className="w-56  hidden sm:block" src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div className="flex gap-3 sm:gap-5 cursor-pointer  xl:-mr-6">
            <FaFacebook size={25} />

            <FaTwitter size={25} />

            <FaYoutube size={25} />

            <FaPinterest size={25} />
          </div>
        </div>
      </div>
      <div className="flex max-w-[1230px] mx-auto flex-wrap items-center justify-between px-5">
        <p className="hidden xl:block">{formattedDate}</p>
        <p className="hidden xl:block">Contribute News কনভার্টার</p>
      </div>
    </>
  );
};

export default Header;
