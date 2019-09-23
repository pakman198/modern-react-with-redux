import axios from 'axios';

const KEY = 'AIzaSyA8ZxQmmURvLlO5-SgbYr45SfB5n2eNWXI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});