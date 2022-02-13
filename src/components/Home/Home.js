import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
import allData from "../../json data/all.json";
import { sortData, filterData } from "../Layout/NavBar/utils";
import classes from "./Home.module.css";


//TODO: Remove the DUMMY_DATA and get it from the API
const RESTAURANT_DATA = {
    "address": "615 E Iona Rd, Idaho Falls",
    "city": "Idaho Falls",
    "id": "ChIJb9xyyKwLVFMRv3Nb-tksuzk",
    "image": "http://tny.im/rdJ",
    "name": "Mitchell's Restaurant",
    "phone": "(208) 525-8834",
    "price_range": "$",
    "rating": 3.5,
    "type": [
    "American",
    "Burgers",
    "Fries",
    "Steak"
    ],
    "website": "https://www.mitchellsrestaurant-idaho.com/",
    "numberOfReviews": 5
};

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
    <div className={classes.home}>
      {isLoading && <p>Loading ...</p>}
      {noResults && <p>Sorry. We found no matches.</p>}
      {restaurantsData && (
        <ul className={classes.ul}>
          {restaurantsData.map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Home;
