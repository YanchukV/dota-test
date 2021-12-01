import axios from 'axios';


const url = 'https://api.opendota.com/api/heroStats';

const api =  {
  app: {
    getHeroes: () => axios.get(`${url}`)
  }
};

export default api;