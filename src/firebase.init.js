// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1yobu0B2xA3uE8ANiLcE7aFTAHhOJssM",
  authDomain: "independent-service-prov-619a5.firebaseapp.com",
  projectId: "independent-service-prov-619a5",
  storageBucket: "independent-service-prov-619a5.appspot.com",
  messagingSenderId: "116368702102",
  appId: "1:116368702102:web:82714624915809869f20b7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
