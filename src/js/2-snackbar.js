//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//Declarations
const formEl = document.querySelector('.form');
const notifOpt = {
  message: 'Please choose a date in the future',
  messageColor: 'black',
  messageSize: '14px',
  position: 'topRight',
  timeout: 4000,
  color: 'yellow',
  closeOnClick: true,
};

//Form submit
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delay = e.target.elements.delay.value;
  const fulffiled = e.querySelector('input[name="fulfilled"]').value;
  console.log(fulffiled);

  return new Promise((res, rej) => {
    const timeoutID = setTimeout(() => {}, delay);
  });
});
