import axios from "axios";

const firebaseConfig = {
    apiKey: "AIzaSyANm3wl3FMW3Hbwrjksp1kO1pg1dIBW_oo",
    authDomain: "vue-calculate.firebaseapp.com",
    databaseURL: "https://vue-calculate-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-calculate",
    storageBucket: "vue-calculate.appspot.com",
    messagingSenderId: "1034511723793",
    appId: "1:1034511723793:web:dff4c5696ae97c8ca630b0"
};

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
    error =>{
        let message = '';
        if (error.response.data.message) {
            console.log('warning', error.response.data.message);
        }
        else {
            message = typeof error.response.data === 'object' ? Object.values(
                    error.response.data).map(i => {
                    const message = Array.isArray(i) ? i.join('\n') : i;
                    console.log('warning', message);
                })
                : console.log('warning', 'При обработке запроса произошла ошибка');
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

async function getAllData() {
    const response = await request(get,'/operations.json').then(res => res)
    responseExample.message = response.data;
    return responseExample;
}

export {getAllData, firebaseConfig}