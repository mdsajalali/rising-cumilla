import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import logo from "../../assets/images/logo.webp";
const Header = () => {
  return (
    <div className="flex items-center justify-between pt-5 px-5">
      <div className="cursor-pointer">
        <TbMenu2 size={25} />
      </div>
      <div>
        <img className="w-56" src={logo} alt="logo" />
      </div>
      <div>
        <div className="flex gap-3 sm:gap-5 cursor-pointer">
          <FaFacebook size={25} />

          <FaTwitter size={25} />

          <FaYoutube size={25} />

          <FaPinterest size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
