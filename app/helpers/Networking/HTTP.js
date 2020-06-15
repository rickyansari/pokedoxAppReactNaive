import defaultAPIClient from './Client';
import {commonExceptionMessage} from 'app/config/commonConstants';

function isNetworkError(error) {
  return error.isAxiosError && !error.response;
}

function callApi(endpoint, method, body, {APIClient = defaultAPIClient} = {}) {
  return APIClient[method](endpoint, body)
    .then(response => {
      const {data} = response;
      return {success: true, data: data.data};
    })
    .catch(error => {
      if (isNetworkError(error)) {
        return {
          success: false,
          errors: commonExceptionMessage,
        };
      }

      if (error.response) {
        /*
          This code block will be executed if the request was made and the server
          responded with a status code that falls out of the range of 2xx (i.e. 3xx and 4xx etc.)
        */
        if (error.response.status === 401) {
          return {
            success: false,
            errors: 'UnAuthorized Access',
          };
        }
        return {success: false, errors: error.response};
      }
      if (error.request) {
        // The request was made but no response was received
        return {
          success: false,
          errors: error.message,
        };
      }
      // Something happened in setting up the request that triggered an Error
      return {
        success: false,
        errors: error.message,
      };
    });
}

export default {
  get: (url, body, options) => callApi(url, 'get', {params: body}, options),
  post: (url, body, options) => callApi(url, 'post', body, options),
  put: (url, body, options) => callApi(url, 'put', body, options),
  delete: (url, body, options) => callApi(url, 'delete', body, options),
};
