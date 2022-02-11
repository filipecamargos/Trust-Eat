import React from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import "./AddRestaurant.css";

const AddRestaurant = () => {
	return (
		<div>
			<div>
				<h2 className="main-message">Add A New Restaurant Here!</h2>
			</div>
      <NewRestaurantForm></NewRestaurantForm>
		</div>
	);
};

export default AddRestaurant;
