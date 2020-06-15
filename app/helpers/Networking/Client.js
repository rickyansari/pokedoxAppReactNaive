import axios from 'axios';
import {SERVER} from 'app/config/ENV';

/* Axios allows us to define a base instance in which we can define a URL
  and any other configuration elements
*/
const baseURL = SERVER;

const defaultConfig = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    common: {'Content-Type': 'multipart/form-data', Accept: 'application/json'},
  },
  responseType: 'json',
};

export function getAPIClient(customConfig = {}) {
  return axios.create({
    ...defaultConfig,
    ...customConfig,
  });
}
const defaultAPIClient = getAPIClient();

export default defaultAPIClient;
