import React from "react";
// useFormInput is a customized hook to handle input's value and error
import useFormInput from "../../hooks/useFormInput";
import "./NewReviewForm.css";

export const NewReviewForm = () => {
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

	return (
		<form>
			<div className="">
				<i className="fa-solid fa-user"></i>
				<label htmlFor="name">User Name*</label>
				<br />
				<input
					type="text"
					id="name"
					value={enteredNameValue}
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
				/>
				{nameInputHasError && (
					<p className="error-text">Please enter a user name.</p>
				)}
			</div>
			<div className="">
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
					<p className="error-text">
						Please select rating for this restaurant.
					</p>
				)}
			</div>
			<div className="">
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
					<p className="error-text">Please enter a review title.</p>
				)}
			</div>
			<div className="">
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
					<p className="error-text">Please enter a review description.</p>
				)}
			</div>
		</form>
	);
};

export default NewReviewForm;
