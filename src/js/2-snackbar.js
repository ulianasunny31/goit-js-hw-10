//Imports
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

//Declarations
const formEl = document.querySelector('.form');

//Form submit
formEl.addEventListener('submit', e => {
  e.preventDefault();
  const delay = e.target.elements.delay.value;

  const formData = new FormData(formEl);
  const state = formData.get('state');

  //Promise creation
  const promise = new Promise((res, rej) => {
    return setTimeout(() => {
      if (state === 'fulfilled') {
        res(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  //Promise handling
  promise
    .then(value => {
      iziToast.show({
        message: value,
        messageColor: 'black',
        messageSize: '14px',
        position: 'topRight',
        timeout: 4000,
        color: 'green',
        closeOnClick: true,
      });
    })
    .catch(value => {
      iziToast.show({
        message: value,
        messageColor: 'black',
        messageSize: '14px',
        position: 'topRight',
        timeout: 4000,
        color: 'red',
        closeOnClick: true,
      });
    });
});
