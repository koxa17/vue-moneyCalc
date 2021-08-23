import moment from 'moment';

moment.locale('ru');

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getDate(currentDate) {
    const date = new Date()
    let result;
    switch (currentDate) {
        case 'day' :
            result = date.getDay()
            break;
        case 'month' :
            result = months[date.getMonth()]
            break;
        case 'year' :
            result = date.getFullYear()
            break;
    }
    return result
}

function getCurrentDateAndTime() {
    return `${moment().format('L')} ${moment().format('LTS')}`
}

export {getDate, getCurrentDateAndTime}