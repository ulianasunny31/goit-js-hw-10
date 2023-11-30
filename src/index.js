import { fetchBreeds } from './cat-api';

const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const loaderCheck = isLoading => {
  loader.style.display = isLoading ? 'block' : 'none';
};

const errorCheck = isError => {
  error.style.display = isError ? 'block' : 'none';
};
