import React from "react";
// import css file
import classes from "./ReviewModal.module.css";
// import other components
import AddReview from "./AddReview";

const ReviewModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onCloseModal}></div>
      <div className={classes.myModal}>
        <AddReview
          onCloseModal={props.onCloseModal}
          restaurantName={props.restaurantName}
          restaurantId={props.restaurantId}
          restaurantDocId={props.restaurantDocId}
          restaurantNumOfReviews={props.restaurantNumOfReviews}
          restaurantRating={props.restaurantRating}
        ></AddReview>
      </div>
    </div>
  );
};

export default ReviewModal;
