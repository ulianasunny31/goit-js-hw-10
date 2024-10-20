//Imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//Declarations
const startBtnEl = document.querySelector('button[data-start]');
const dateNow = Date.now();
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
let userSelectedDate = '';

//Calendar
startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < dateNow) {
      window.alert('Please choose a date in the future');
    } else {
      userSelectedDate = selectedDates[0];
      console.log(userSelectedDate);
      startBtnEl.disabled = false;
    }
  },
};

const calendar = flatpickr('#datetime-picker', options);

//Timer
startBtnEl.addEventListener('click', handleTimerStart);

function handleTimerStart(e) {
  e.preventDefault();

  startBtnEl.disabled = true;

  const intervalID = setInterval(() => {
    const dateNow = Date.now();
    const difference = userSelectedDate - dateNow;
    const timeLeft = convertMs(difference);

    const days = addLeadingZero(timeLeft.days);
    const hours = addLeadingZero(timeLeft.hours);
    const minutes = addLeadingZero(timeLeft.minutes);
    const seconds = addLeadingZero(timeLeft.seconds);

    //Html changes
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
  }, 1000);
}
//Getting time gap
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//Styling the timer correctly
function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}
