import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const body = document.querySelector('body');

select.style.visibility = 'hidden';

fetchBreeds()
  .then(breeds => {
    select.style.visibility = 'visible';
    loader.style.display = 'none';

    const cat = breeds
      .map(breed => `<option value="${breed.id}">${breed.name}</option>`)
      .join('');

    select.insertAdjacentHTML('beforeend', cat);
  })
  .catch(error => {
    console.log(error);
    loader.style.display = 'none';
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });

select.addEventListener('change', function () {
  catInfo.innerHTML = '';
  const selectedBreed = this.value;

  loader.style.display = 'block';

  fetchCatByBreed(selectedBreed)
    .then(breeds => {
      loader.style.display = 'none';
      catData = breeds[0];

      catInfo.innerHTML = `
    <div><img src="${catData.url}" width="400" alt="${catData.breeds[0].name}"></div>
    <div>
    <h3>${catData.breeds[0].name}</h3>
    <p>Description: ${catData.breeds[0].description}</p>
    <p>Temperament: ${catData.breeds[0].temperament}</p>
    </div>
    `;

      catInfo.style.display = 'flex';
      catInfo.style.gap = '30px';
      catInfo.style.marginTop = '50px';
    })
    .catch(error => {
      console.log(error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
});

body.style.backgroundColor = '#FDFEF7';
