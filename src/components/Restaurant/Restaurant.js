import { useParams } from "react-router-dom";

const Restaurant = () => {
  const { restaurante_id } = useParams();
  
  return <div>Restaurant= {restaurante_id}</div>;
};

export default Restaurant;
