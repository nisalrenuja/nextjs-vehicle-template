// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8CzawmyK38JBdJpO3Gj8KGp2c3d388M",
  authDomain: "nextjs-vehicle.firebaseapp.com",
  projectId: "nextjs-vehicle",
  storageBucket: "nextjs-vehicle.appspot.com",
  messagingSenderId: "681901636519",
  appId: "1:681901636519:web:75323b5f70f641dcb29482",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//export to use in other files
export const initFirebase = () => {
  return app;
};
