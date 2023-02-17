// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

auth.useDeviceLanguage();


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    try {

        signInWithPopup(auth, googleProvider).then((res)=> {

            const user = res.user;
            console.log(user)
        })
    } catch (err) {
        console.log(err)
    }
}

export const signOut = async () => {
    try {
        await auth.signOut();
        alert("hey youre signed out")
    } catch(err) {
        console.log(err)
    }
}