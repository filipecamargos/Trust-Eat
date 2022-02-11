import React from "react";
// useFormInput is a customized hook to handle input error validation
import useFormInput from "../../hooks/useFormInput";

const NewRestaurantForm = () => {
	// handle name field error validation
	const {
		value: enteredNameValue,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useFormInput((value) => value.trim() !== "");

	// handle address field error validation
	const {
		value: enteredAddressValue,
		isValid: enteredAddressIsValid,
		hasError: addressInputHasError,
		valueChangeHandler: addressChangedHandler,
		inputBlurHandler: addressBlurHandler,
		reset: resetAddressInput,
	} = useFormInput((value) => value.trim() !== "");

	// when the page just loads, set initial value to false
	let formIsValid = false;

	// check all the input fields to see if the entire form is valid or not
	if (enteredNameIsValid) {
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

		// after we process all the data from submission, clean up all the input fields
		resetNameInput();
	};

	// set up dynamics class to display error message
	const nameClasses = nameInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={submitHandler}>
			<div className={nameClasses}>
				<label htmlFor="name">Restaurant Name*</label>
				<br />
				<input
					type="text"
					id="name"
					value={enteredNameValue}
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
				/>
				{nameInputHasError && (
					<p className="error-text">Please enter a restaurant name.</p>
				)}
			</div>
			<div className="">
				<label htmlFor="address">Address*</label>
				<br />
				<input
					type="text"
					id="address"
					value={enteredAddressValue}
					onChange={addressChangedHandler}
					onBlur={addressBlurHandler}
				/>
				{addressInputHasError && (
					<p className="error-text">
						Please enter an address for this restaurant.
					</p>
				)}
			</div>
			<div className="">
				<label htmlFor="phone">Phone Number*</label>
				<br />
				<input type="text" id="phone" value="" onChange="" onBlur="" />
				{/* {phoneHasError && (
					<p className="error-text">Please enter a valid phone number.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="type">Types of Food (separated by commas)*</label>
				<br />
				<input type="text" id="type" value="" onChange="" onBlur="" />
				<p>Ex: American, Burgers, Steak...</p>
				{/* {typeHasError && (
					<p className="error-text">Please enter at least one type for this restaurant.</p>
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
				<label htmlFor="website">Website (Optional)</label>
				<br />
				<input type="text" id="website" value="" onChange="" onBlur="" />
				{/* {websiteHasError && (
					<p className="error-text">Please enter a valid website.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="image">Url to Image (Optional)</label>
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
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default NewRestaurantForm;
