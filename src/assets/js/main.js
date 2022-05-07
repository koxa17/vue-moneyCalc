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

function passwordVerification() {
    let the_pass="abc";
    document.getElementById("popup").style.display = "none";

    let password = document.getElementById("pass").value;

    if(password === the_pass)  {
        alert('Correct, try another...');
        return true;
    }
    else {
        alert('Wrong...!');
        return false;
    }
}

export {getDate, getCurrentDateAndTime, passwordVerification}