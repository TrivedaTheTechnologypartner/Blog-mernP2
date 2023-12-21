import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , getAuth} from 'firebase/auth'
import { useRef } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAC-pjj4C8XADnZCgUNAGeACHHeHMkgl7g",
  authDomain: "react-js-blog-website-yt-ded86.firebaseapp.com",
  projectId: "react-js-blog-website-yt-ded86",
  storageBucket: "react-js-blog-website-yt-ded86.appspot.com",
  messagingSenderId: "815662181167",
  appId: "1:815662181167:web:2bce34278b61f3bc928fda"
};

const app = initializeApp(firebaseConfig);

//google auth

const provider = new GoogleAuthProvider()

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}