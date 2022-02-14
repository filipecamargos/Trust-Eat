import React from "react";
// useFormInput is a customized hook to handle input's value and error
import useFormInput from "../../hooks/useFormInput";
// add CSS style
import "./NewRestaurantForm.css";

const NewRestaurantForm = ({ onGetNewRestaurantData }) => {
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

	// handle city field
	const {
		value: enteredCityValue,
		isValid: enteredCityIsValid,
		hasError: cityInputHasError,
		valueChangeHandler: cityChangedHandler,
		inputBlurHandler: cityBlurHandler,
		reset: resetCityInput,
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
		isValid: enteredPriceIsValid,
		hasError: priceInputHasError,
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
		enteredTypeIsValid &&
		enteredCityIsValid &&
		enteredPriceIsValid
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

		// clean up and handle the types here
		// first, split all the types by comma (split function returns a new array)
		const typeArrayData = enteredTypeValue.split(",");
		// next, trim off all the white space before and after each type
		const finalTypeData = typeArrayData.map((type) => {
			return type.trim();
		});

		// handle the address here, we need to make sure the address includes "city" which is either Rexburg or Idaho Falls
		// includes is case sensitive, so I need to lower all the address
		const lowerCaseAddress = enteredAddressValue.toLowerCase();
		let finalAddressValue;
		// city is "Rexburg"
		if (enteredCityValue === "Rexburg") {
			if (!lowerCaseAddress.includes("rexburg")) {
				finalAddressValue = enteredAddressValue.concat(", ", "Rexburg");
			} else {
				finalAddressValue = enteredAddressValue;
			}
		} else {
		// city is "Idaho Falls"
			if (!lowerCaseAddress.includes("idaho falls")) {
				finalAddressValue = enteredAddressValue.concat(", ", "Idaho Falls");
			} else {
				finalAddressValue = enteredAddressValue;
			}
		}

		const newRestaurantData = {
			name: enteredNameValue,
			address: finalAddressValue,
			city: enteredCityValue,
			phone: enteredPhoneValue,
			type: finalTypeData,
			price_range: enteredPriceValue,
			website: enteredWebsiteValue,
			url: enteredImageUrlValue,
		};

		onGetNewRestaurantData(newRestaurantData);

		// after we process all the data from submission, clean up all the input fields
		resetNameInput();
		resetAddressInput();
		resetCityInput("Rexburg");
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

	const adressClasses = addressInputHasError
		? "form-control invalid"
		: "form-control";

	const cityClasses = addressInputHasError
		? "form-control invalid"
		: "form-control";

	const phoneClasses = phoneInputHasError
		? "form-control invalid"
		: "form-control";

	const typeClasses = typeInputHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={submitHandler} className="form">
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
			<div className={adressClasses}>
				<label htmlFor="address">
					Address* (Please don't include city, choose below)
				</label>
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
			<div className={cityClasses}>
				<label htmlFor="city">City*</label>
				<br />
				<select
					id="city"
					value={enteredCityValue}
					onChange={cityChangedHandler}
					onBlur={cityBlurHandler}
				>
					<option value="" disabled>
						Select City
					</option>
					<option>Rexburg</option>
					<option>Idaho Falls</option>
				</select>
				{cityInputHasError && (
					<p className="error-text">
						Please select a city for this restaurant.
					</p>
				)}
			</div>
			<div className={phoneClasses}>
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
			<div className={typeClasses}>
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
					<option value="" disabled>
						Select Price Range
					</option>
					<option>$</option>
					<option>$$</option>
					<option>$$$</option>
					<option>$$$$</option>
				</select>
				{priceInputHasError && (
					<p className="error-text">Please select a price range.</p>
				)}
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
				<button className="submit-button" disabled={!formIsValid}>
					Add New Restaurant
				</button>
			</div>
		</form>
	);
};

export default NewRestaurantForm;
