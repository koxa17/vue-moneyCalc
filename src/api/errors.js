export function errorsMessage(code) {
    switch (code) {
        case 'auth/user-not-found':
            return 'Пользователь с таким email не существует!';
        case 'auth/wrong-password':
            return 'Неверный пароль!';
        case 'auth/email-already-in-use':
            return 'Пользователь с таким email уже существует! Войдите в аккаунт!';
        case 'auth/weak-password':
            return 'Пароль слишком простой!';
        default :
            return `Упс... Что-то пошло не так! ${code}`
    }
}