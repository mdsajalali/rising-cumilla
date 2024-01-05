import heading from "../../assets/images/heading.webp";
const Heading = () => {
  return (
    <div className="max-w-[1230px] mx-auto border mb-5">
      <img
        className="w-9/12 mx-auto h-[80px] object-cover"
        src={heading}
        alt="Heading"
      />
    </div>
  );
};

export default Heading;
