import { useEffect, useState } from "react";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
const Header = () => {
  const [formattedDate, setFormattedDate] = useState("");

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
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="list-none">
                <a href="#">প্রচ্ছদ</a>
              </li>
              <li className="list-none">
                <a href="#">জাতীয়</a>
              </li>
              <li className="list-none">
                <a href="#">সারা দেশ</a>
              </li>
              <li className="list-none">
                <a href="#">কুমিল্লা</a>
              </li>
              <li className="list-none">
                <a href="#">বিশ্ব</a>
              </li>
              <li className="list-none">
                <a href="#">অর্থ ও বাণিজ্য</a>
              </li>
              <li className="list-none">
                <a href="#">অর্থ ও বাণিজ্য</a>
              </li>
              <li className="list-none">
                <a href="#">স্বাস্থ্য</a>
              </li>
              <li className="list-none">
                <a href="#">খেলা</a>
              </li>
              <li className="list-none">
                <a href="#">বিনোদন</a>
              </li>
              <li className="list-none">
                <a href="#">শিক্ষা</a>
              </li>
              <li className="list-none">
                <a href="#">লাইফস্টাইল</a>
              </li>
              <li className="list-none">
                <a href="#">জবস</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="cursor-pointer">
            <img className="w-56" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end text-end hidden md:block">
          <button className="btn btn-ghost btn-circle">
            <FaFacebook size={25} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaTwitter size={25} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaYoutube size={25} />
          </button>
          <button className="btn btn-ghost btn-circle">
            <FaPinterest size={25} />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between   px-5">
        <p>{formattedDate}</p>
        <p>Contribute News কনভার্টার</p>
      </div>
    </>
  );
};

export default Header;
