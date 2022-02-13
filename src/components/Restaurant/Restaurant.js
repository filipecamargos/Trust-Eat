import { useParams } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
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
      if (!response.ok) {
        console.log("no Data");
      }
      const data = await response.json();
      let loadData = [];
      for (const key in data) {loadData.push(data[key])}
      setReviewData(loadData)
  }, []);

  useEffect(() => {
    fetchRestaurante();
    fetchReviews();
  }, [fetchRestaurante, fetchReviews]);

  //Set the restaurant card component
    const restauranteCard = [];
    restauranteData.map((r, i) => {
     restauranteCard.push(<RestaurantCard key={i} restaurante={r}/>)
  });

  //Set the list of review cards
  const reviewList = [];
  reviewData.map((r, i) => {
     reviewList.push(<UserReviewCard
      key={i}
      place_id= {r.place_id}
      user_name= {r.user_name}
      review_title= {r.review_title}
      review_rating= {r.review_rating}
      review_date= {r.review_date}
      review_description= {r.review_description}
    />);
  })

    //TODO if somereason there is error display a sorry

    //TODO Display Loading Part for empty card

    //TODO Caculate the reating for the restaurant card based on the ratings

    //TODO Change the Arrow functions to FOR Loops

  return(<div>
      <div>{restauranteCard}</div>
      <br></br>
      <br></br>
      <div>{reviewList}</div>
    </div>
  );
  
};

export default Restaurant;
