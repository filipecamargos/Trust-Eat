import React from "react";
import "./AddReview.css";
import NewReviewForm from "./NewReviewForm";

const AddReview = (props) => {
	// when the users click on a restaurant, we will receive the id of the restaurant
	const restaurant_id = props.restaurantId;

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
				// data is a JavaScript object
				const data = await response.json();
				console.log(data.name);
				fetch(
					"https://react-restaurant-review-app-default-rtdb.firebaseio.com/restaurants.json"
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="container">
			<h1 className="header">Write New Review for {props.restaurantName}</h1>
			<NewReviewForm
				onSubmitReview={submitReviewHandler}
				onCloseModal={props.onCloseModal}
			></NewReviewForm>
		</div>
	);
};

export default AddReview;
