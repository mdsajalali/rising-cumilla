import { useParams } from "react-router-dom";

const InternationalNewsDetail = () => {
  const { id } = useParams();
  return <div>InternationalNewsDetail : {id}</div>;
};

export default InternationalNewsDetail;
