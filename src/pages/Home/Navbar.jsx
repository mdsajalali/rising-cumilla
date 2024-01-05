import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-[#C6EBC5] p-4 my-5 xl:block hidden">
      <nav className="flex max-w-[1230px] mx-auto items-center justify-evenly ">
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
        <li className="list-none">
          <a href="#"></a>
        </li>
        <FaSearch className="text-[#F23E3E] cursor-pointer" />
      </nav>
    </div>
  );
};

export default Navbar;
