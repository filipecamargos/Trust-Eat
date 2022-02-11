import React from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import "./AddRestaurant.css";

const AddRestaurant = () => {
	// handle the new restaurant data from the user
	const getNewRestaurantDataHandler = (newRestaurantData) => {
		const finalRestaurantData = {
			...newRestaurantData,
			rating: 0,
		};

    addRestaurantHandler(finalRestaurantData);
	};

	// send the data to firebase to add a new restaurant to Rexburg list
	const addRestaurantHandler = async (newRestaurantData) => {
		const response = await fetch(
			"https://react-restaurant-review-app-default-rtdb.firebaseio.com/Rexburg.json",
			{
				method: "POST",
				body: JSON.stringify(newRestaurantData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<div>
				<h2 className="main-message">Add A New Restaurant Here!</h2>
			</div>
			<NewRestaurantForm
				onGetNewRestaurantData={getNewRestaurantDataHandler}
			></NewRestaurantForm>
		</div>
	);
};

export default AddRestaurant;
