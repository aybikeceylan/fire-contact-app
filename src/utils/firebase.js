// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";
import ToastifySuccess from "./toastify";

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

export const writeUserData = (name, phone, gender, isEdit) => {

    const db = getDatabase();
    const userId = new Date().getTime()

    console.log(name);
    set(ref(db, 'users/' + userId + isEdit), {
        username: name,
        phone: phone,
        gender: gender,
        userId: userId,
        isEdit: false

    });

    console.log(userId);
    ToastifySuccess("Data Added!")

}

// For basic read operations

export const GetUser = () => {
    const [contactList, setContactList] = useState();
    useEffect(() => {
        const db = getDatabase();
        const userRef = ref(db, "users");
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const Array = [];

            for (let id in data) {
                Array.push({ id, ...data[id] });
            }
            setContactList(Array);
        });
    }, []);
    return { contactList };
};

export const DeleteUser = (id) => {
    const db = getDatabase();

    remove(ref(db, "users/" + id));
    ToastifySuccess("Data Deleted!")
};
export const EditUser = (name, phone, gender) => {
    const db = getDatabase();


    update(ref(db, 'users/'), {
        username: name,
        phone: phone,
        gender: gender,


    });
    ToastifySuccess("Data Editted!")
};