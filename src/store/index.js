import {createStore} from "vuex";
import {getAllData} from "../api/api";
import {getLocalStorage} from "../assets/js/localeStorage";
import {auth, getUserInfo, recordUserData} from "../api/fireBase";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import showMessageUserNoty from "../api/notifications";

export default createStore({
    state: {
        all_operations: [],
        income: [],
        cost: [],
        currencies: [
            {
                name: "RUB",
                sign: "₽",
                country: "Россия",
                id: 1
            },
            {
                name: "UAH",
                sign: "₴",
                country: "Украина",
                id: 2
            },
        ],
        selectCurrency: {
            name: "RUB",
            sign: "₽",
            country: "Россия",
            id: 1
        },
        user: {
            name: 'Гость',
            email: 'example@mail.ru',
            uid: '1'
        }
    },
    mutations: {
        SET_OPERATIONS_TO_STATE: (state, payload) => {
            state[payload.stateName].push(payload.value)
        },
        SET_FORMDATA: (state, data) => {
            state.formData = data
        },
        ADD_NEW_CURRENCY: (state, currency) => {
            state.currencies[currency.name] = currency
        },
        SET_SELECT_CURRENCY: (state, data) => {
            state.selectCurrency = data
        },
        SET_USER_DATA: (state, data) => {
            for (const dataKey in data) {
                state.user[dataKey] = data[dataKey]
            }
        },
        SET_USER_NAME: (state, data) => {
            state.user.name = data
        },
        SET_USER_UID: (state, data) => {
            state.user.uid = data
        },
        SET_USER_MAIL: (state, data) => {
            state.user.email = data
        }
    },
    actions: {
        async GET_ALL_JOURNAL_FOR_FIREBASE({commit}) {
            const operations = await getAllData()
            commit('SET_OPERATIONS_TO_STATE', {stateName: 'all_operations', value: operations.message})
        },
        async SIGN_IN({commit}, userData) {
            await signInWithEmailAndPassword(auth, userData.email, userData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    this.dispatch('ON_AUTH')
                    return userCredential
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(`errorCode: ${errorCode} errorMessage: ${errorMessage}`)
                    showMessageUserNoty('error', errorMessage)
                    throw error
                });
        },
        async LOG_OUT() {
            await signOut(auth).then(() => {
                showMessageUserNoty('success', `Вы вышли из системы!`)
            }).catch((error) => {
                const errorMessage = error.message;
                showMessageUserNoty('error', errorMessage)
            })
        },
        ON_AUTH({commit, state}) {
             onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const getInfo = await getUserInfo(user.uid)
                    let userInfo = null
                    for (const userInfoKey in getInfo) {
                        userInfo = getInfo[userInfoKey]
                    }
                    await commit('SET_USER_DATA', {...userInfo, uid: user.uid})
                    showMessageUserNoty('success', `Добро пожаловать ${state.user.name}`);
                }
            });
        },
        async REGISTER({commit}, userData) {
            await createUserWithEmailAndPassword(auth, userData.email, userData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const info = {
                        email: userData.email,
                        name: userData.name
                    }
                    commit('SET_USER_DATA', {
                        name: userData.name,
                        mail: userData.email,
                        uid: user.uid
                    })
                    recordUserData(user.uid, info)
                    showMessageUserNoty('success', `Регистрация прошла успешно!`);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    showMessageUserNoty('error', errorMessage)
                });
        }
    },
    getters: {
        GET_ALL_JOURNAL(state) {
            return state.all_operations
        },
        // TODO сделать геттер возврата всех доходов
        GET_LIST_INCOMES: state => findYear => {
            return state.all_operations.find(year => {
                return null
            })
        },
        // TODO сделать геттер возврата всех возвратов
        GET_LIST_COSTS(state, getters) {
            return getters.GET_ALL_JOURNAL
        },
        GET_ALL_CURRENCIES(state) {
            return state.currencies
        },
        GET_CURRENCY: state => name => {
            name = name.toUpperCase()
            return state.currencies[name]
        },
        GET_SELECTED_CURRENCY: (state) => {
            let data = JSON.parse(getLocalStorage())
            if (data) {
                return data
            }
            return state.selectCurrency
        },
        GET_CURRENT_USER(state) {
            return state.user
        },
    },
    modules: {}
});
