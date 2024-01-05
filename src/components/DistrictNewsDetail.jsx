import { useParams } from "react-router-dom";

const DistrictNewsDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>DistrictNewsDetail {id}</h1>
    </div>
  );
};

export default DistrictNewsDetail;
