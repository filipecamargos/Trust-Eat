import React from "react";
// useFormInput is a customized hook to handle form error validation
import useFormInput from "../../hooks/useFormInput";

const NewRestaurantForm = () => {
	// pass name rule to the hook to handle form validation
	const {
		value: enteredNameValue,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useFormInput((value) => value.trim() !== "");

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();

		// if any field is missing or doesn't meet the requirement, we don't keep going to process the data
		if (!formIsValid) {
			return;
		}

        resetNameInput();
	};

	const nameClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={submitHandler}>
			<div className={nameClasses}>
				<label htmlFor="name">Name</label>
				<br />
				<input type="text" id="name" value={enteredNameValue} onChange={nameChangedHandler} onBlur={nameBlurHandler} />
				{nameInputHasError && (
					<p className="error-text">Please enter a restaurant name.</p>
				)}
			</div>
			<div className="">
				<label htmlFor="address">Address</label>
				<br />
				<input type="text" id="address" value="" onChange="" onBlur="" />
				{/* {addressHasError && (
					<p className="error-text">Please enter an address for this restaurant.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="phone">Phone</label>
				<br />
				<input type="text" id="phone" value="" onChange="" onBlur="" />
				{/* {phoneHasError && (
					<p className="error-text">Please enter a valid phone number.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="website">Website</label>
				<br />
				<input type="text" id="website" value="" onChange="" onBlur="" />
				{/* {websiteHasError && (
					<p className="error-text">Please enter a valid website.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="type">Type</label>
				<br />
				<p>Ex: American, Burgers, Steak... (Please seperate by comma)</p>
				<input type="text" id="type" value="" onChange="" onBlur="" />
				{/* {typeHasError && (
					<p className="error-text">Please enter at least one type for this restaurant.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="image">Image Url</label>
				<br />
				<p>
					Find an image of the restaurant on Google, right click to copy image
					url and paste here
				</p>
				<input type="text" id="image" value="" onChange="" onBlur="" />
				{/* {imageUrlHasError && (
					<p className="error-text">Please enter an image url for this restaurant.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="price_range">Price Range</label>
				<br />
				<select id="price_range" value="" onChange="" onBlur="">
					<option>$</option>
					<option>$$</option>
					<option>$$$</option>
					<option>$$$$</option>
				</select>
				{/* {priceRangeHasError && (
					<p className="error-text">Please select a price range.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="rating">Rating (5 means the Best)</label>
				<br />
				<select id="rating" value="" onChange="" onBlur="">
					<option>5</option>
					<option>4</option>
					<option>3</option>
					<option>2</option>
					<option>1</option>
				</select>
				{/* {ratingHasError && (
					<p className="error-text">Please select a rating.</p>
				)} */}
			</div>

			<div className="form-actions">
				<button disabled>Submit</button>
			</div>
		</form>
	);
};

export default NewRestaurantForm;
