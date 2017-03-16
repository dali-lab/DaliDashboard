import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

const weatherZipSearch = (zip_) => {
  const params = {
    units: 'imperial',
    zip: zip_,
    appid: '72d832d9c94f2b936a58485b1afad98f',
  };

  return new Promise((resolve, reject) => {
    axios.get(API_URL, { params })
      .then(response => {
        resolve(response.data);
      })
    .catch(error => {
      console.log('error');
      reject(error);
    });
  });
};

export default weatherZipSearch;
