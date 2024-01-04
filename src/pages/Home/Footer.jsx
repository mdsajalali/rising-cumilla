const Footer = () => {
  return (
    <>
      <footer className=" p-10 bg-[#C6EBC5]">
        <div className="max-w-[1230px] mx-auto footer">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
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
