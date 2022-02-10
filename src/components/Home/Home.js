import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import rexburgData from "../../json data/Rexburg20Places.json";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  let search, city;
  if (state) {
    search = state?.search;
    city = state?.city;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState([]);

  const handleSearch = (data, substring) => {
    let newRestaurantsList = data.filter((item) =>
      item.name.toLowerCase().includes(substring.trim().toLowerCase())
    );
    setIsLoading(false);
    setRestaurantsData(newRestaurantsList);

    if (newRestaurantsList.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  useEffect(() => {
    if (search && search.trim() !== "") {
      handleSearch(rexburgData, search);
    } else {
      setIsLoading(false);
      setNoResults(false);
      setRestaurantsData(rexburgData);
    }
  }, [search]);

  return (
    <>
      <h1>Home</h1>
      {isLoading && <p>Loading ...</p>}
      {noResults && <p>Sorry. We found no matches.</p>}
      <ul>
        {restaurantsData.map((restaurant) => (
          <li key={restaurant.id}>
            <ul>
              <li>{restaurant.name}</li>
              <li>{restaurant.address}</li>
              <li>{restaurant.phone}</li>
              <li>{restaurant.price_range}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
