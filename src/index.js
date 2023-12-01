import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

new SlimSelect({
  select: '.breed-select',
});

fetchBreeds()
  .then(breeds => {
    loader.style.display = 'none';

    const cat = breeds
      .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
      .join('');

    select.insertAdjacentElement('beforeend', cat);
  })
  .catch(error => {
    loader.style.display = 'none';
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });
