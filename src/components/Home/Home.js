import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
import { sortData, filterData } from "../Layout/NavBar/utils";
import baseUrl from "../../FirebaseConfigFile";
import useHttp from "../../hooks/use-Http";
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
  const restaurantsUrl = `${baseUrl}/restaurants.json`;
  console.log(state);
  let search, restaurants, error1;
  if (state) {
    search = state?.search;
    restaurants = state?.restaurants;
    error1 = state?.error;
  }
  const [noResults, setNoResults] = useState(false);
  const [initialRestaurantsData, setInitialRestaurantsData] = useState([]);
  const [restaurantsData, setRestaurantsData] = useState(null);
  const { isLoading, error: error2, sendRequest: getRestaurants } = useHttp();

  useEffect(() => {
    const formatData = (restaurantsObj) => {
      console.log(restaurantsObj);
      const restaurantsArray = Object.values(restaurantsObj).map(
        (value) => value
      );
      setInitialRestaurantsData(sortData(restaurantsArray));
    };

    getRestaurants({ url: restaurantsUrl }, formatData);
  }, [getRestaurants, restaurantsUrl]);

  useEffect(() => {
    const handleSearch = (data, substring, property) => {
      let newRestaurantsList = filterData(data, substring, property);
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
    } else {
      setNoResults(false);
    }
  }, [search, restaurants]);

  const restaurantsList = !restaurantsData ? (
    <ul className={classes.ul}>
      {initialRestaurantsData.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className={classes.ul}>
      {restaurantsData.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={classes.home}>
      {(error1 || error2) && <p>We're sorry. Something went wrong!</p>}
      {isLoading && <p>Loading ...</p>}
      {noResults && <p>Sorry. We found no matches.</p>}
      {!(error1 || error2) && restaurantsList}
    </div>
  );
};
export default Home;
