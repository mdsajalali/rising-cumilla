import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
const Footer = () => {
  return (
    <>
      <footer className=" p-10 bg-[#C6EBC5]">
        <div className="max-w-[1230px] mx-auto footer">
          <nav>
            <header className="footer-title">
              <Link to="/">
                <img className="w-60" src={logo} alt="Logo" />
              </Link>
            </header>
            <div className="flex gap-10">
              <a className="link link-hover">আমাদের সম্পর্কে </a>
              <a className="link link-hover">গোপনীয়তার নীতি</a>
              <a className="link link-hover">ব্যবহারের শর্তাবলি</a>
            </div>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">প্রকাশকঃ আলহাজ্ব আব্দুল বাতেন</a>
            <a className="link link-hover">
              ভারপ্রাপ্ত সম্পাদকঃ শাদমান আল আরবী
            </a>
          </nav>
          <nav>
            <header className="footer-title">অস্থায়ী ঠিকানা</header>
            <a className="link link-hover">১২১, রায়ের বাজার,</a>
            <a className="link link-hover">ধানমণ্ডি ১৫, ঢাকা- ১২০৯</a>
            <a className="link link-hover">info@risingcumilla.com</a>
          </nav>
        </div>
        <p className="text-center max-w-[1150px] mx-auto mt-5">
          Rising Cumilla (রাইজিং কুমিল্লা) is a trusted online news website that
          provides the latest and most accurate news from various fields,
          including politics, business, entertainment, sports, and more. With a
          team of experienced journalists, Rising Cumilla aims to deliver
          comprehensive and objective news coverage to its readers.
        </p>
      </footer>
      <footer className="footer footer-center p-4 bg-[#0E0E0E] text-white">
        <aside>
          <p>স্বত্ব © ২০২৩ রাইজিং কুমিল্লা। Design & Developed by BDIGITIC </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
