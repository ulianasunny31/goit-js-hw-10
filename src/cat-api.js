import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_m41d3E5FsfxzwasIN9KHbzTUcAvnEuRJAf851jLm4ivgnpnZkXS2brb1sDMEDKvP';

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      const breeds = response.data;

      const breedSelect = document.querySelector('.breed-select');

      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.text = breed.name;
        breedSelect.append('option');
      });
      return breeds;
    })
    .catch(error => {
      throw error;
    });
};

const fetchCatsByID = breedId => {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}')
    .then(response => {
      const catInfo = response.data[0];
    });
};
