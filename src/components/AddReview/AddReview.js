import React from "react";
import "./AddReview.css";
import NewReviewForm from "./NewReviewForm";

const AddReview = (props) => {

    // when the users click on a restaurant, we will receive the id of the restaurant
    // fake id for now
    const restaurant_id = 100;

	return (
		<div className="container">
            <h1>Write a New Review!</h1>
			<div>Restaurant Name</div>
			<NewReviewForm restaurantId={restaurant_id}></NewReviewForm>
            <button onClick={props.onCloseModal} className="cancel-modal-button">Cancel</button>
		</div>
	);
};

export default AddReview;
