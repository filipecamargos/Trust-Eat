import React from "react";
import "./AddReview.css";
import NewReviewForm from "./NewReviewForm";

const AddReview = () => {

    // when the users click on a restaurant, we will receive the id of the restaurant
    // fake id for now
    const restaurant_id = 100;

	return (
		<div>
			<div>Restaurant Name</div>
			<NewReviewForm restaurantId={restaurant_id}></NewReviewForm>
		</div>
	);
};

export default AddReview;
