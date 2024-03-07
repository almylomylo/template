import apiClient from '../../../core/api/apiClient';
import {API_ENDPOINTS} from '../../../core/constants/apiEndpoints';
import {MainMenuItemType} from '../model/appModels';
// import {HomePageType} from '../models/homeModel';
const getMainMenu = async (): Promise<MainMenuItemType[]> => {
  const response = await apiClient({
    url: API_ENDPOINTS.MENU,
    method: 'GET',
  });
  if (response.status === 404) {
    return response;
  }
  const data = await response;
  return data;
};

const AppService = {
  getMainMenu,
};

export default AppService;
