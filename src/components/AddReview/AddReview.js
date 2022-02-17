import React from "react";
import classes from "./AddReview.module.css";
import NewReviewForm from "./NewReviewForm";

const AddReview = (props) => {
  // when the users click on a restaurant, we will receive all the info of the restaurant
  // we pass these here because we will need them to write new review and update restaurant info below
  const restaurant_id = props.restaurantId;
  const restaurantDocId = props.restaurantDocId;
  const restaurantNumOfReviews = props.restaurantNumOfReviews;
  const restaurantRating = props.restaurantRating;
  console.log({ ...props });

  const submitReviewHandler = (newReviewData) => {
    const reviewData = {
      restaurant_id: restaurant_id,
      ...newReviewData,
    };

    addReviewHandler(reviewData);
  };

  // send the data to firebase to add a new restaurant to Rexburg list
  const addReviewHandler = async (newReviewData) => {
    try {
      const response = await fetch(
        "https://react-restaurant-review-app-default-rtdb.firebaseio.com/reviews.json",
        {
          method: "POST",
          body: JSON.stringify(newReviewData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // handle the error
      if (!response.ok) {
        throw new Error(
          "Something went wrong. Please contact the food app team at test@gmail.com"
        );
      } else {
        // if the response is okay, then we want to proceed to update the num_of_reviews and rating for the restaurant

        const newNumOfReviews = restaurantNumOfReviews + 1;
        let newRating =
          (restaurantRating * restaurantNumOfReviews +
            newReviewData.review_rating) /
          newNumOfReviews;
        // I need to make sure the rating only has one decimal place
        newRating = Math.round(newRating * 10) / 10;

        fetch(
          "https://react-restaurant-review-app-default-rtdb.firebaseio.com/restaurants/" +
            restaurantDocId +
            ".json",
          {
            method: "PATCH",
            body: JSON.stringify({
              num_of_reviews: newNumOfReviews,
              rating: newRating,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(
              "Updated num_of_reviews and rating in restaurant successfully!"
            );
            console.log(result);
            // I actually want to close the modal here instead of after submitting the review because I want the users
            // to see the newly created review after the modal is closed, and I tighted the useEffect with the state of my modal in Restaurant.js
            props.onCloseModal();
          })
          .catch((err) => console.log(err));
      }

      // data is a JavaScript object
      const data = await response.json();
      console.log("Wrote a new review successfully!");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`container ${classes.container}`}>
      <h1 className={classes.header}>
        Write New Review for {props.restaurantName}
      </h1>
      <NewReviewForm
        onSubmitReview={submitReviewHandler}
        onCloseModal={props.onCloseModal}
      ></NewReviewForm>
    </div>
  );
};

export default AddReview;
