import axios from 'axios';
import apiKey from './config.js';

export const getNews = () => {
  const url = `https://content.guardianapis.com/search?q=news&api-key=${apiKey}`;
  return axios.get(url).then(
    ({
      data: {
        response: { results }
      }
    }) => {
      console.log(results);
      return results;
    }
  );
};
