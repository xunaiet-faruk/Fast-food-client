// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZLSnFW0sWpXWFAm8K8opoVcRWYDyroyY",
    authDomain: "fast-food-webside.firebaseapp.com",
    projectId: "fast-food-webside",
    storageBucket: "fast-food-webside.appspot.com",
    messagingSenderId: "765432660704",
    appId: "1:765432660704:web:f67adc8313ea2ae9be4685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;