import apiClient from '../../../core/api/apiClient';
import {API_ENDPOINTS} from '../../../core/constants/apiEndpoints';
import {UserModel} from '../models/homeModel';

// const getUsers = async () => {
//   return await apiClient({
//     url: API_ENDPOINTS.USERS,
//     method: 'GET',
//   });
// };

const getUsers = async (): Promise<UserModel[] | null> => {
  const response = await apiClient({
    url: API_ENDPOINTS.USERS,
    method: 'GET',
  });
  if (response.ok) {
    throw new Error('Failed to get all users');
  }
  const data = await response;
  return data;
};

const HomeService = {
  getUsers,
};

export default HomeService;
