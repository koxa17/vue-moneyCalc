import {
    updateProfile
} from "firebase/auth";
import {auth} from "./fireBase.js";
import showMessageUserNoty from "./notifications.js";


export async function updateUser(newData) {
    updateProfile(auth.currentUser, {
        displayName: newData.name,
    }).then(() => {
        showMessageUserNoty('success', `Регистрация прошла успешно!`)
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`errorCode: ${errorCode} errorMessage: ${errorMessage}`)
        showMessageUserNoty('error', errorMessage)
    });
}