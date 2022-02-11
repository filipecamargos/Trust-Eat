import { Link } from "react-router-dom";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";

const Home = () => {
  return <div>
      <Link  to={'restaurant/' + 'id_of_the_restaurante'} key={'id_of_the_restaurante'}>
        <RestaurantCard />
      </Link>
    </div>
};

export default Home;