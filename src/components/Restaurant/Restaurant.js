import { useParams } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import UserReviewCard from "../Cards/UserReviewCard/UserReviewCard"
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
const FIREBASE_ULR = "https://react-restaurant-review-app-default-rtdb.firebaseio.com/";

const Restaurant = () => {
  const { restaurante_id } = useParams();
  const [restauranteData, setRestauranteData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [fetchError, setError] = useState(false);
  
  //Get the restaurante data based on the ID
  const getRestaurante = `${FIREBASE_ULR}restaurants.json?orderBy="id"&equalTo="${restaurante_id}"`
  const fetchRestaurante = useCallback(async () => {
      const response = await fetch(getRestaurante);
      if (!response.ok) {
        setError(true);
      }
      const data = await response.json();
      let loadData = [];
      for (const key in data) {loadData.push(data[key])}
      setRestauranteData(loadData);
  }, []);

  //Get the reviews based on id
  const getReviews = `${FIREBASE_ULR}reviews.json?orderBy="restaurant_id"&equalTo="${restaurante_id}"`
  const fetchReviews = useCallback(async () => {
      const response = await fetch(getReviews);
      const data = await response.json();
      let loadData = [];
      for (const key in data) {loadData.push(data[key])}
      setReviewData(loadData)
  }, []);

  useEffect(() => {
    fetchRestaurante();
    fetchReviews();
  }, [fetchRestaurante, fetchReviews]);

  //Handle error in case data is not fetched from db
  if (fetchError) {
    return <>
    <h1>Sorry there was an error loading the information please go to the main page</h1>
    <Link to={"/"}>Home</Link>
  </>
  }

  //Set the restaurant card component
  let restauranteCard = <h1>Loading</h1>;
  if (restauranteData.length > 0) {
      restauranteCard = <RestaurantCard restaurant={restauranteData[0]} key={restauranteData.id}/>
  } else {
    restauranteCard = <p key='restaurantLoading'>Loading...</p>
  }

  //Set the list of review cards
  const reviewList = [];
  if (reviewData.length > 0) {
    let i = 0;
    for (let r of reviewData) {
      reviewList.push(<UserReviewCard
        key={i++}
        place_id= {r.place_id}
        user_name= {r.user_name}
        review_title= {r.review_title}
        review_rating= {r.review_rating}
        review_date= {r.review_date}
        review_description= {r.review_description}
      />);
    }
  } else {
    reviewList.push(<p key="reviewCase">No reviews available!</p>)
  }

  //TODO Remove the click effect from the Card on the restarurant page

  //Style the page

  return(<div>
      <div>{restauranteCard}</div>
      <br></br>
      <br></br>
      <div>{reviewList}</div>
    </div>
  );
  
};

export default Restaurant;
