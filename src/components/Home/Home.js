import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import allData from "../../json data/all.json";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";

const filterData = (data, substring, property) => {
  let filteredData = data.filter((item) =>
    item[property].toLowerCase().includes(substring.trim().toLowerCase())
  );
  return filteredData;
};

const Home = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  let search, city;
  if (state) {
    search = state?.search;
    city = state?.city;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState([]);

  const rexburgData = filterData(allData, "rexburg", "address");
  const idahoFallsData = filterData(allData, "falls", "address");

  const handleSearch = useCallback((data, substring, property) => {
    let newRestaurantsList = filterData(data, substring, property);
    setIsLoading(false);
    setRestaurantsData(newRestaurantsList);

    if (newRestaurantsList.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, []);

  useEffect(() => {
    if (city && search.trim() === "") {
      switch (city) {
        case "rex":
          setRestaurantsData(rexburgData);
          break;
        case "if":
          setRestaurantsData(idahoFallsData);
          break;
        default:
          setIsLoading(false);
          setNoResults(false);
          setRestaurantsData(allData);
      }
    } else if (city && search && search.trim() !== "") {
      switch (city) {
        case "rex":
          handleSearch(rexburgData, search, "name");
          break;
        case "if":
          handleSearch(idahoFallsData, search, "name");
          break;
        default:
          handleSearch(allData, search, "name");
      }
    } else if (!search && !city) {
      setIsLoading(false);
      setNoResults(false);
      setRestaurantsData(allData);
    }
  }, [search, city, rexburgData, idahoFallsData, handleSearch]);

  return (
    <>
      <h1>Home</h1>
      {isLoading && <p>Loading ...</p>}
      {noResults && <p>Sorry. We found no matches.</p>}
      <ul>
        {restaurantsData.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            priceTag={restaurant.price_range}
            review={restaurant.rating}
            numberOfReviews={5}
            address={restaurant.address}
            site={restaurant.website}
            phone={restaurant.phone}
            type={restaurant.type}
            id={restaurant.id}
          />
        ))}
      </ul>
    </>
  );
};
export default Home;
