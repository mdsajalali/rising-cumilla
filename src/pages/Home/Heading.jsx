import heading from "../../assets/images/heading.webp";
const Heading = () => {
  return (
    <div className="max-w-[1230px] mx-auto border mb-5 mt-4">
      <img
        className=" w-full mx-auto md:px-10 xl:px-20 px-5 md:object-contain object-cover h-[70px]   "
        src={heading}
        alt="Heading"
      />
    </div>
  );
};

export default Heading;
