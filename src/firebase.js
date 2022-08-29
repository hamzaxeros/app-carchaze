// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBdYdp_XcVWVDdMkYZ_X74IODiisksZuWU",
	authDomain: "carchaze-dev.firebaseapp.com",
	projectId: "carchaze-dev",
	storageBucket: "carchaze-dev.appspot.com",
	messagingSenderId: "205865843290",
	appId: "1:205865843290:web:8470438e2ff43fdc6df663",
	measurementId: "G-XRGR0GK4VF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const getFirebaseAuth = getAuth(app);
