//Imports
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

//Declarations
const startBtnEl = document.querySelector('button[data-start]');
const dateNow = Date.now();

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
