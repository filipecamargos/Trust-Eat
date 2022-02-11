import React from "react";
// useFormInput is a customized hook to handle input's value and error
import useFormInput from "../../hooks/useFormInput";

const NewRestaurantForm = () => {
	// handle name field
	const {
		value: enteredNameValue,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useFormInput((value) => value.trim() !== "");

	// handle address field
	const {
		value: enteredAddressValue,
		isValid: enteredAddressIsValid,
		hasError: addressInputHasError,
		valueChangeHandler: addressChangedHandler,
		inputBlurHandler: addressBlurHandler,
		reset: resetAddressInput,
	} = useFormInput((value) => value.trim() !== "");

	// handle phone number field
	const {
		value: enteredPhoneValue,
		isValid: enteredPhoneIsValid,
		hasError: phoneInputHasError,
		valueChangeHandler: phoneChangedHandler,
		inputBlurHandler: phoneBlurHandler,
		reset: resetPhoneInput,
	} = useFormInput((value) => value.trim() !== ""); // will add regex logic later

	// handle types of food field
	const {
		value: enteredTypeValue,
		isValid: enteredTypeIsValid,
		hasError: typeInputHasError,
		valueChangeHandler: typeChangedHandler,
		inputBlurHandler: typeBlurHandler,
		reset: resetTypeInput,
	} = useFormInput((value) => value.trim() !== "");

	// handle price range field
	const {
		value: enteredPriceValue,
		// isValid: enteredPriceIsValid,
		// hasError: priceInputHasError,
		valueChangeHandler: priceChangedHandler,
		inputBlurHandler: priceBlurHandler,
		reset: resetPriceInput,
	} = useFormInput((value) => value.trim() !== "");

	// handle website field (optional field)
	const {
		value: enteredWebsiteValue,
		// isValid: enteredWebsiteIsValid,
		// hasError: websiteInputHasError,
		valueChangeHandler: websiteChangedHandler,
		inputBlurHandler: websiteBlurHandler,
		reset: resetWebsiteInput,
	} = useFormInput(() => {});

	// handle url to image field (optional field)
	const {
		value: enteredImageUrlValue,
		// isValid: enteredImageUrlIsValid,
		// hasError: imageUrlInputHasError,
		valueChangeHandler: imageUrlChangedHandler,
		inputBlurHandler: imageUrlBlurHandler,
		reset: resetImageUrlInput,
	} = useFormInput(() => {});

	// when the page just loads, set initial value to false
	let formIsValid = false;

	// check all the input fields to see if the entire form is valid or not
	if (
		enteredNameIsValid &&
		enteredAddressIsValid &&
		enteredPhoneIsValid &&
		enteredTypeIsValid
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

		// after we process all the data from submission, clean up all the input fields
		resetNameInput();
		resetAddressInput();
		resetPhoneInput();
		resetTypeInput();
		resetPriceInput("$");
		resetWebsiteInput();
		resetImageUrlInput();
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
				<input
					type="text"
					id="phone"
					value={enteredPhoneValue}
					onChange={phoneChangedHandler}
					onBlur={phoneBlurHandler}
				/>
				{phoneInputHasError && (
					<p className="error-text">Please enter a valid phone number.</p>
				)}
			</div>
			<div className="">
				<label htmlFor="type">Types of Food (separated by commas)*</label>
				<br />
				<input
					type="text"
					id="type"
					value={enteredTypeValue}
					onChange={typeChangedHandler}
					onBlur={typeBlurHandler}
				/>
				<p>Ex: American, Burgers, Steak...</p>
				{typeInputHasError && (
					<p className="error-text">
						Please enter at least one type for this restaurant.
					</p>
				)}
			</div>
			<div className="">
				<label htmlFor="price_range">Price Range</label>
				<br />
				<select
					id="price_range"
					value={enteredPriceValue}
					onChange={priceChangedHandler}
					onBlur={priceBlurHandler}
				>
					<option>$</option>
					<option>$$</option>
					<option>$$$</option>
					<option>$$$$</option>
				</select>
				{/* {priceInputHasError && (
					<p className="error-text">Please select a price range.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="website">Website (Optional)</label>
				<br />
				<input
					type="text"
					id="website"
					value={enteredWebsiteValue}
					onChange={websiteChangedHandler}
					onBlur={websiteBlurHandler}
				/>
				{/* {websiteInputHasError && (
					<p className="error-text">Please enter a valid website.</p>
				)} */}
			</div>
			<div className="">
				<label htmlFor="image">Url to Image (Optional)</label>
				<br />
				<input
					type="text"
					id="image"
					value={enteredImageUrlValue}
					onChange={imageUrlChangedHandler}
					onBlur={imageUrlBlurHandler}
				/>
				{/* {imageUrlInputHasError && (
					<p className="error-text">Please enter an image url for this restaurant.</p>
				)} */}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Add New Restaurant</button>
			</div>
		</form>
	);
};

export default NewRestaurantForm;
