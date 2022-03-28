// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm6SaCF4ww7UfVlgbJpQNj4mp8E6MgOEg",
  authDomain: "e-shop-2e7e7.firebaseapp.com",
  projectId: "e-shop-2e7e7",
  storageBucket: "e-shop-2e7e7.appspot.com",
  messagingSenderId: "593236516535",
  appId: "1:593236516535:web:33431f29337d7ae5ca3732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app