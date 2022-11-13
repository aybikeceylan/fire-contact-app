// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, getDatabase, onValue, push, ref, set, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWN05OYRRHf0oMBTgytRdz28Ctg1-T7D8",
    authDomain: "fire-contact-fc837.firebaseapp.com",
    projectId: "fire-contact-fc837",
    storageBucket: "fire-contact-fc837.appspot.com",
    messagingSenderId: "1026501021728",
    appId: "1:1026501021728:web:0486540fd6186e12556c45",
    measurementId: "G-GMT59EX59L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);



// For basic write operations

export const writeUserData = (name, phone, gender) => {
    const db = getDatabase();
    const userId = new Date().getTime()
    console.log(name);
    set(ref(db, 'users/' + userId), {
        username: name,
        phone: phone,
        gender: gender,
        userId: userId

    });
    console.log(userId);
}

// // For basic read operations

// export const db = getDatabase();
// export const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     updateStarCount(postElement, data);
// });
