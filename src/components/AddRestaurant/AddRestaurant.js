import React from "react";
import NewRestaurantForm from "./NewRestaurantForm";
import "./AddRestaurant.css";

const AddRestaurant = () => {

  // handle the new restaurant data from the user
  const getNewRestaurantDataHandler = (newRestaurantData) => {
    console.log(newRestaurantData);
  }

	return (
		<div>
			<div>
				<h2 className="main-message">Add A New Restaurant Here!</h2>
			</div>
      <NewRestaurantForm onGetNewRestaurantData={getNewRestaurantDataHandler}></NewRestaurantForm>
		</div>
	);
};

export default AddRestaurant;
