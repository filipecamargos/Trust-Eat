import React from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import "./AddRestaurant.css";

const AddRestaurant = () => {
	// handle the new restaurant data from the user
	const getNewRestaurantDataHandler = (newRestaurantData) => {
		// use math.random to generate a unique id for every restaurant
		let id = Math.random().toString(16).slice(5);

		// each restaurant will have default rating and num_of_reviews which are both 0
		const finalRestaurantData = {
			...newRestaurantData,
			id: id,
			rating: 0,
			num_of_reviews: 0,
		};

		addRestaurantHandler(finalRestaurantData);
	};

	// send the data to firebase to add a new restaurant to Rexburg list
	const addRestaurantHandler = async (newRestaurantData) => {
		try {
			const response = await fetch(
				"https://react-restaurant-review-app-default-rtdb.firebaseio.com/restaurants.json",
				{
					method: "POST",
					body: JSON.stringify(newRestaurantData),
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
				// come into the else block means that the new restaurant got saved into the database successfully,
				// so the new document name (key) will be returned by Firebase and I want to add that into a new column "doc_id"
				// because I will need that when I create a new review (see AddReview.js for more details)
				const data = await response.json();
				const doc_key = data.name;

				fetch(
					"https://react-restaurant-review-app-default-rtdb.firebaseio.com/restaurants/" +
						doc_key +
						".json",
					{
						method: "PATCH",
						body: JSON.stringify({
							doc_id: doc_key,
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
						console.log("Added doc_id into restaurant successfully!");
						console.log(result);
					})
					.catch((err) => console.log(err));
			}
		} catch (err) {
			console.log(err);
		}
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
