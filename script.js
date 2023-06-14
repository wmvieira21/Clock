const months = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];
const weekDays = ['Sunday', 'Saturday', 'Monday', 'Tusdey', 'Wednesday', 'thrusday', 'Friday'];

function getDegres(number, oldMin, oldMax, newMin, newMax) {
    return (((number - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
}

const getTime = () => {
    const date = new Date();
    const dateTime = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        monthName: months[date.getMonth()],
        dayName: weekDays[date.getDay() + 1],
        day: date.getDate()
    }
    return dateTime;
}

const getCurrentDate = (...params) => {
    setInterval(() => {
        const dateTime = getTime();
        params[0].style.transform = `translate(-50%, -35%) rotate(${getDegres(dateTime.hours, 0, 12, 0, 360)}deg)`;
        params[1].style.transform = `translate(-50%, -50%) rotate(${getDegres(dateTime.minutes, 0, 60, 0, 360)}deg)`;
        params[2].style.transform = `translate(-50%, -50%) rotate(${getDegres(dateTime.seconds, 0, 60, 0, 360)}deg)`;
        params[3].innerText = `${dateTime.hours}:${dateTime.minutes}`;
        params[4].innerText = `${dateTime.monthName}, ${dateTime.dayName}, ${dateTime.day}`;
    }, 1000);
}

(function () {
    const html = document.querySelector('html');
    const mode = document.querySelector('.dark-light__mode');
    const pointerHour = document.querySelector('.pointer.hour');
    const pointerMinute = document.querySelector('.pointer.minute');
    const pointerSecond = document.querySelector('.pointer.second');

    const clockInfoTime = document.querySelector('.clock-info__time');
    const clockInfoDate = document.querySelector('.clock-info__date');

    return function () {
        mode.addEventListener('click', (event) => {
            html.classList.toggle('dark-mode');
        });
        getCurrentDate(pointerHour, pointerMinute, pointerSecond, clockInfoTime, clockInfoDate);
    }
})()();
