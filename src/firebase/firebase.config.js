// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_apikey,
  //   authDomain: import.meta.env.VITE_authDomain,
  //   projectId: import.meta.env.VITE_projectId,
  //   storageBucket: import.meta.env.VITE_storageBucket,
  //   messagingSenderId: import.meta.env.VITE_messagingSenderId,
  //   appId: import.meta.env.VITE_appId,

  apiKey: "AIzaSyD6PPDvObZpEhjwgIl7VMhdebbBp5aclUg",
  authDomain: "my-portfolio-efb3d.firebaseapp.com",
  projectId: "my-portfolio-efb3d",
  storageBucket: "my-portfolio-efb3d.firebasestorage.app",
  messagingSenderId: "305745359880",
  appId: "1:305745359880:web:3247f12bf500a716fb4dbd",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
