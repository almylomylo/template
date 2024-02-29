import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {setError} from '../store/app/events';

const client = axios.create({
  baseURL: `${import.meta.env.VITE_CMS_URL}`,
});

const apiClient = async (options: AxiosRequestConfig) => {
  const onSuccess = function (response: AxiosResponse) {
    // console.debug('Request Successful!', response);
    return response.data;
  };

  const onError = (error: any) => {
    console.error('Request Failed:', error.config);
    setError(`Error Message: ${error.message}`);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error as AxiosError);
  }
};

export default apiClient;
