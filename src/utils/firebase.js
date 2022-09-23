// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVDuw7PT_cjYBezA7Oa73Qi981ipgXfus",
  authDomain: "borderline-3d-react.firebaseapp.com",
  projectId: "borderline-3d-react",
  storageBucket: "borderline-3d-react.appspot.com",
  messagingSenderId: "588527691265",
  appId: "1:588527691265:web:7970c1a94fc0b15e1b4200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos (instancia de la base de datos)
export const db = getFirestore(app); //export para ser llamarlo de otra parte de la app

