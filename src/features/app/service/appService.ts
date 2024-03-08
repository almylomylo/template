import apiClient from "../../../core/api/apiClient";
import { API_ENDPOINTS } from "../../../core/constants/apiEndpoints";
import { FooterItemType, MainMenuItemType } from "../model/appModels";
// import {HomePageType} from '../models/homeModel';
const getMainMenu = async (): Promise<MainMenuItemType[]> => {
  const response = await apiClient({
    url: API_ENDPOINTS.MENU,
    method: "GET",
  });
  if (response.status === 404) {
    return response;
  }
  const data = await response;
  return data;
};

const getFooterAbout = async (): Promise<FooterItemType[]> => {
  const response = await apiClient({
    url: API_ENDPOINTS.FOOTER_ABOUT,
    method: "GET",
  });
  if (response.status === 404) {
    return response;
  }
  const data = await response;
  return data;
};
const getFooterHelp = async (): Promise<FooterItemType[]> => {
  const response = await apiClient({
    url: API_ENDPOINTS.FOOTER_HELP,
    method: "GET",
  });
  if (response.status === 404) {
    return response;
  }
  const data = await response;
  return data;
};

const AppService = {
  getMainMenu,
  getFooterAbout,
  getFooterHelp,
};

export default AppService;
