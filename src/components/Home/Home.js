import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
import allData from "../../json data/all.json";
import { sortData, filterData } from "../Layout/NavBar/utils";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  let search, restaurants;
  if (state) {
    search = state?.search;
    restaurants = state?.restaurants;
  }
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [restaurantsData, setRestaurantsData] = useState(sortData(allData));

  useEffect(() => {
    const handleSearch = (data, substring, property) => {
      let newRestaurantsList = filterData(data, substring, property);
      setIsLoading(false);
      setRestaurantsData(newRestaurantsList);

      if (newRestaurantsList.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
      }
    };

    if (restaurants && search && search.trim() !== "") {
      handleSearch(restaurants, search, "name");
    } else if (restaurants) {
      setRestaurantsData(restaurants);
      setNoResults(false);
      setIsLoading(false);
    } else {
      setNoResults(false);
      setIsLoading(false);
    }
  }, [search, restaurants]);

  return (
    <>
      <h1>Home</h1>
      {isLoading && <p>Loading ...</p>}
      {noResults && <p>Sorry. We found no matches.</p>}
      {restaurantsData && (
        <ul>
          {restaurantsData.map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Home;
