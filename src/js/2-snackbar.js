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
  console.log(state);

  return new Promise((res, rej) => {
    return setTimeout(() => {
      if (state === 'fulfilled') {
        res(
          iziToast.show({
            message: `✅ Fulfilled promise in ${delay}ms`,
            messageColor: 'black',
            messageSize: '14px',
            position: 'topRight',
            timeout: 4000,
            color: 'green',
            closeOnClick: true,
          })
        );
      } else {
        rej(
          iziToast.show({
            message: `❌ Rejected promise in ${delay}ms`,
            messageColor: 'black',
            messageSize: '14px',
            position: 'topRight',
            timeout: 4000,
            color: 'red',
            closeOnClick: true,
          })
        );
      }
    }, delay);
  });
});
