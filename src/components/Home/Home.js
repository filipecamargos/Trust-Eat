import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {
  sortData,
  filterData,
  sortByPrice,
  sortByRating,
} from "../Layout/NavBar/utils";
import baseUrl from "../../FirebaseConfigFile";
import useHttp from "../../hooks/use-Http";
import classes from "./Home.module.css";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  const restaurantsUrl = `${baseUrl}/restaurants.json`;
  let search, restaurants, city, error1;
  if (state) {
    search = state?.search;
    restaurants = state?.restaurants;
    city = state?.city;
    error1 = state?.error;
  }
  const [noResults, setNoResults] = useState(false);
  const [initialRestaurantsData, setInitialRestaurantsData] = useState([]);
  const [restaurantsData, setRestaurantsData] = useState(null);
  const { isLoading, error: error2, sendRequest: getRestaurants } = useHttp();

  useEffect(() => {
    const formatData = (restaurantsObj) => {
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

    if (restaurants && restaurants.length !== 0) {
      if (search.trim() !== "") {
        handleSearch(restaurants, search, "name");
      } else {
        setRestaurantsData(restaurants);
        setNoResults(false);
      }
    } else if (restaurants && restaurants.length === 0 && city === "all") {
      if (search.trim() !== "") {
        handleSearch(initialRestaurantsData, search, "name");
      } else {
        setNoResults(false);
      }
    }
  }, [search, restaurants, city, initialRestaurantsData]);

  const reviewFilterHandler = () => {
    if (restaurants) {
      setRestaurantsData((prevRestaurant) => sortByRating(prevRestaurant));
    } else {
      setRestaurantsData(sortByRating(initialRestaurantsData));
    }
  };

  const priceFilterHandler = () => {
    if (restaurants) {
      setRestaurantsData((prevRestaurant) => sortByPrice(prevRestaurant));
    } else {
      setRestaurantsData(sortByPrice(initialRestaurantsData));
    }
  };

  const restaurantsList = !restaurantsData ? (
    <ul className={classes.ul}>
      {initialRestaurantsData.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <Link
              className={classes.link_style}
              to={"restaurant/" + restaurant.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className={classes.ul}>
      {restaurantsData.map((restaurant) => {
        return (
          <li key={restaurant.id}>
            <Link
              className={classes.link_style}
              to={"restaurant/" + restaurant.id}
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className={classes.home}>
      {!isLoading && !noResults && (
        <DropdownButton id={`dropdown-button-drop-down`} title="Sort By">
          <Dropdown.Item as="button" onClick={reviewFilterHandler}>
            Rating (high to low)
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={priceFilterHandler}>
            Price (low to high)
          </Dropdown.Item>
        </DropdownButton>
      )}
      {(error1 || error2) && <p>We're sorry. Something went wrong!</p>}
      {isLoading && <p>Loading ...</p>}
      {!isLoading && noResults && <p>Sorry. We found no matches.</p>}
      {!(error1 || error2) && restaurantsList}
    </div>
  );
};
export default Home;
