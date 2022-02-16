import React from "react";
// import css file
import "./ReviewModal.css";
// import other components
import AddReview from "./AddReview";

const ReviewModal = (props) => {
	return (
		<div>
			<div className="backdrop" onClick={props.onCloseModal}></div>
			<div className="myModal">
				<AddReview onCloseModal={props.onCloseModal}></AddReview>
			</div>
		</div>
	);
};

export default ReviewModal;
