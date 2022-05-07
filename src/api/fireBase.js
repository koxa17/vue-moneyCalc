import axios from "axios";
import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    signOut
} from "firebase/auth";
import {getCurrentDateAndTime, getDate} from "../assets/js/main";
import showMessageUserNoty from "./notifications"

const firebaseConfig = {
    apiKey: "AIzaSyANm3wl3FMW3Hbwrjksp1kO1pg1dIBW_oo",
    authDomain: "vue-calculate.firebaseapp.com",
    databaseURL: "https://vue-calculate-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-calculate",
    storageBucket: "vue-calculate.appspot.com",
    messagingSenderId: "1034511723793",
    appId: "1:1034511723793:web:dff4c5696ae97c8ca630b0"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)

const [get, put, post, del] = ['get', 'put', 'post', 'delete'];

const responseExample = {
    status: true,
    message: '',
};

const instance = axios.create({
    baseURL: firebaseConfig.databaseURL,
    timeout: 3000,
});

instance.interceptors.request.use(response => response,
    error => {
        let message = '';
        if (error.response.data.message) {
            showMessageUserNoty('warning', error.response.data.message);
        } else {
            message = typeof error.response.data === 'object' ? Object.values(
                    error.response.data).map(i => {
                    const message = Array.isArray(i) ? i.join('\n') : i;
                    showMessageUserNoty('warning', message);
                })
                : showMessageUserNoty('warning', 'При обработке запроса произошла ошибка');
        }
        throw  error.response.data;
    });

let request = (type, url, data) => {
    switch (type) {
        case get:
            return instance.get(url, {
                params: data ? data : null,
            });
        case post:
            return instance.post(url, data);
        case put:
            return instance.put(url, data);
        case del:
            return instance.delete(url, data);
        default:
            return instance.get(url);
    }
};

async function getAllData(uid) {
    const response = await request(get, `/users/${uid}//operations.json`).then(res => res)
    responseExample.message = response.data;
    return responseExample;
}

async function createOperation(user, type, data) {
    const year = getDate('year')
    const month = getDate('month').toLowerCase()

    data.date_added = getCurrentDateAndTime()

    const response = await request(post, `/users/${user.uid}/operations/${typeof year === 'number' ? year : Number(year)}/${month}/${type}.json`, data)
    responseExample.message = response.data;
    return responseExample;
}

async function recordUserData(uid, data) {
    const response = await request(post, `/users/${uid}/info.json`, data)
    responseExample.message = response.data;
    return responseExample;
}

async function getUserInfo(uid) {
    const response = await request(get, `/users/${uid}/info.json`)
    responseExample.message = response.data;
    return responseExample.message;
}

export {getAllData, createOperation, auth, recordUserData, getUserInfo}