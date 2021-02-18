import axios from 'axios';

const hostUrl = 'https://assignmentapi.maikokuipers.nl/';

const defaultConfig = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: 'json',
  baseURL: hostUrl
});

export default defaultConfig;
