import { useParams } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./Restaurant.module.css";
import UserReviewCard from "../Cards/UserReviewCard/UserReviewCard";
import RestaurantCard from "../Cards/RestaurantCard/RestaurantCard";
// import review modal to use when users want to write new review
import ReviewModal from "../AddReview/ReviewModal";
const FIREBASE_ULR =
	"https://react-restaurant-review-app-default-rtdb.firebaseio.com/";

const Restaurant = () => {
	const { restaurante_id } = useParams();
	const [restauranteData, setRestauranteData] = useState([]);
	const [reviewData, setReviewData] = useState([]);
	const [fetchError, setError] = useState(false);
	// the write review modal should be hidden by default
	const [openReviewModal, setOpenReviewModal] = useState(false);

	//Get the restaurante data based on the ID
	const getRestaurante = `${FIREBASE_ULR}restaurants.json?orderBy="id"&equalTo="${restaurante_id}"`;
	const fetchRestaurante = useCallback(async () => {
		const response = await fetch(getRestaurante);
		if (!response.ok) {
			setError(true);
		}
		const data = await response.json();
		let loadData = [];
		for (const key in data) {
			loadData.push(data[key]);
		}
		setRestauranteData(loadData);
	}, []);

	//Get the reviews based on id
	const getReviews = `${FIREBASE_ULR}reviews.json?orderBy="restaurant_id"&equalTo="${restaurante_id}"`;
	const fetchReviews = useCallback(async () => {
		const response = await fetch(getReviews);
		const data = await response.json();
		let loadData = [];
		for (const key in data) {
			loadData.push(data[key]);
		}
		setReviewData(loadData);
	}, []);

	//Apply user effect for both above fetches
	useEffect(() => {
		fetchRestaurante();
		fetchReviews();
	}, [fetchRestaurante, fetchReviews]);

	//Handle error in case data is not fetched from db
	if (fetchError) {
		return (
			<>
				<h1>
					Sorry there was an error loading the information please go to the main
					page
				</h1>
				<Link to={"/"}>Home</Link>
			</>
		);
	}

	// open the review modal
	const openReviewModalHandler = () => {
		setOpenReviewModal(true);
	};
  // close the review modal
	const closeReviewModalHandler = () => {
		setOpenReviewModal(false);
	};

	//Set the restaurant card component
	let restauranteCard = <h1>Loading...</h1>;

	//Call to review
	let btnReviewContent = (
		<div>
			<button
				type="button"
				className={"btn btn-info " + styles.btn}
				onClick={openReviewModalHandler}
			>
				<i className="fa-solid fa-plus"></i> Add a review
			</button>
		</div>
	);

	if (restauranteData.length > 0) {
		//Set up the up part of the restaurant top
		restauranteCard = (
			<div className={styles.restaurant_card_top_card_and_image}>
				<div className={styles.restaurant_card_wrapper}>
					<RestaurantCard
						restaurant={restauranteData[0]}
						key={restauranteData.id}
					/>
				</div>
				<img src={restauranteData[0].image} alt="Restaurant" />
			</div>
		);

		//Dynamically set the btn the person is the first to review
		if (restauranteData[0].rating < 1) {
			btnReviewContent = (
				<div>
					<button
						type="button"
						className={"btn btn-link " + styles.btn}
						onClick={openReviewModalHandler}
					>
						<i className="fa-solid fa-plus"></i> Be the first to review
					</button>
				</div>
			);
		}
	} else {
		restauranteCard = <p key="restaurantLoading">Loading...</p>;
	}

	//Set the list of review cards
	const reviewList = [];
	if (reviewData.length > 0) {
		let i = 0;
		for (let r of reviewData) {
			reviewList.push(
				<UserReviewCard
					key={i++}
					place_id={r.place_id}
					user_name={r.user_name}
					review_title={r.review_title}
					review_rating={r.review_rating}
					review_date={r.review_date}
					review_description={r.review_description}
				/>
			);
		}
	}

  // console.log(`restaurant name: ${restauranteData[0].name}`);

	return (
		<div>
			{openReviewModal && (
				<ReviewModal onCloseModal={closeReviewModalHandler} restaurantName={restauranteData[0].name} restaurantId={restauranteData[0].id}></ReviewModal>
			)}
			<div className={styles.restaurant}>
				{restauranteCard}
				{btnReviewContent}
				<div className={styles.restaurant_reviews}>{reviewList}</div>
			</div>
		</div>
	);
};

export default Restaurant;
