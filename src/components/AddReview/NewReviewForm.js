import React from "react";
// useFormInput is a customized hook to handle input's value and error
import useFormInput from "../../hooks/useFormInput";
import classes from "./NewReviewForm.module.css";

export const NewReviewForm = ({ onSubmitReview, onCloseModal }) => {
  // handle user name field
  const {
    value: enteredNameValue,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useFormInput((value) => value.trim() !== "");

  // handle rating field
  const {
    value: enteredRatingValue,
    isValid: enteredRatingIsValid,
    hasError: ratingInputHasError,
    valueChangeHandler: ratingChangedHandler,
    inputBlurHandler: ratingBlurHandler,
    reset: resetRatingInput,
  } = useFormInput((value) => value.trim() !== "");

  // handle review title field
  const {
    value: enteredTitleValue,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangedHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useFormInput((value) => value.trim() !== "");

  // handle review description field
  const {
    value: enteredDescriptionValue,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangedHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useFormInput((value) => value.trim() !== ""); // will add regex logic later

  // when the page just loads, set initial value to false
  let formIsValid = false;

  // check all the input fields to see if the entire form is valid or not
  if (
    enteredNameIsValid &&
    enteredRatingIsValid &&
    enteredTitleIsValid &&
    enteredDescriptionIsValid
  ) {
    formIsValid = true;
  }

  // this function will be trigerred when the users click the submit button
  const submitHandler = (event) => {
    // prevent default behavior of the browser
    event.preventDefault();

    // if any field is missing or doesn't meet the requirement, we don't keep going to process the data
    if (!formIsValid) {
      return;
    }

    // get the current date
    const today = new Date();
    // to put 0 before the day if there is only one number, up to 2 digits
    const day = String(today.getDate()).padStart(2, "0");
    // January is 0, so we need to add 1
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    const reviewDate = month + "/" + day + "/" + year;

    const newReviewData = {
      user_name: enteredNameValue,
      // I need to convert rating from string to num because I will need to use it to calculate new rating in AddReview.js
      review_rating: +enteredRatingValue,
      review_title: enteredTitleValue,
      review_description: enteredDescriptionValue,
      review_date: reviewDate,
    };

    onSubmitReview(newReviewData);

    // after we process all the data from submission, clean up all the input fields
    resetNameInput();
    resetRatingInput("");
    resetTitleInput();
    resetDescriptionInput();
  };

  // set up dynamics class to display error message
  const nameClasses = nameInputHasError ? classes.invalid : "";

  const ratingClasses = ratingInputHasError ? classes.invalid : "";

  const titleClasses = titleInputHasError ? classes.invalid : "";

  const descriptionClasses = descriptionInputHasError ? classes.invalid : "";

  return (
    <form onSubmit={submitHandler} className={classes.reviewForm}>
      <div className={nameClasses}>
        <i className="fa-solid fa-user"></i>
        <label htmlFor="name">User Name*</label>
        <br />
        <input
          type="text"
          id="name"
          maxLength="45"
          value={enteredNameValue}
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && (
          <p className={classes["error-text"]}>Please enter a user name.</p>
        )}
      </div>
      <div className={ratingClasses}>
        <label htmlFor="rating">Rating</label>
        <br />
        <select
          id="rating"
          value={enteredRatingValue}
          onChange={ratingChangedHandler}
          onBlur={ratingBlurHandler}
        >
          <option value="" disabled>
            Select Rating
          </option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        {ratingInputHasError && (
          <p className={classes["error-text"]}>
            Please select rating for this restaurant.
          </p>
        )}
      </div>
      <div className={titleClasses}>
        <label htmlFor="title">Review Title*</label>
        <br />
        <input
          type="text"
          id="title"
          maxLength="45"
          value={enteredTitleValue}
          onChange={titleChangedHandler}
          onBlur={titleBlurHandler}
        />
        {titleInputHasError && (
          <p className={classes["error-text"]}>Please enter a review title.</p>
        )}
      </div>
      <div className={descriptionClasses}>
        <label htmlFor="description">Review Description*</label>
        <br />
        <textarea
          rows="3"
          id="description"
          value={enteredDescriptionValue}
          onChange={descriptionChangedHandler}
          onBlur={descriptionBlurHandler}
        />
        {descriptionInputHasError && (
          <p className={classes["error-text"]}>
            Please enter a review description.
          </p>
        )}
      </div>
      <div>
        <button
          className={classes["submit-modal-button"]}
          disabled={!formIsValid}
        >
          Submit
        </button>
        <button
          onClick={onCloseModal}
          className={classes["cancel-modal-button"]}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewReviewForm;
