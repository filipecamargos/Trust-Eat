// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDIlw2MT761j1-F68L-ddHUVuVCxxwgdO4",
	authDomain: "react-restaurant-review-app.firebaseapp.com",
	databaseURL:
		"https://react-restaurant-review-app-default-rtdb.firebaseio.com",
	projectId: "react-restaurant-review-app",
	storageBucket: "react-restaurant-review-app.appspot.com",
	messagingSenderId: "429699666598",
	appId: "1:429699666598:web:d2b2be0c0f79ba0f8d1a67",
	measurementId: "G-VL2E0J4KN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase doc: https://firebase.google.com/docs/database/web/start 

