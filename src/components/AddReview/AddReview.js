import React from "react";
import "./AddReview.css";
import NewReviewForm from "./NewReviewForm";

const AddReview = (props) => {
	// when the users click on a restaurant, we will receive the id of the restaurant
	const restaurant_id = props.restaurantId;
	console.log(restaurant_id);

	const submitReviewHandler = (newReviewData) => {
        console.log(newReviewData);
    };

	return (
		<div className="container">
			<h1 className="header">Write New Review for {props.restaurantName}</h1>
			<NewReviewForm onSubmitReview={submitReviewHandler} onCloseModal={props.onCloseModal}></NewReviewForm>
		</div>
	);
};

export default AddReview;
