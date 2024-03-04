import {AxiosError} from 'axios';
import apiClient from '../../../core/api/apiClient';
import {API_ENDPOINTS} from '../../../core/constants/apiEndpoints';
import {HomePageType} from '../models/homeModel';
import homeData from '@/core/mockData/home.json';
const getHome = async (): Promise<HomePageType> => {
  const response = await apiClient({
    url: API_ENDPOINTS.HOME,
    method: 'GET',
  });
  if (response.status === 404) {
    return homeData;
  }
  const data = await response;
  return data;
};

const HomeService = {
  getHome,
  homeData,
};

export default HomeService;
