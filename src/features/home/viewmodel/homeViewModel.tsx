// import {useEffect, useState} from 'react';
import { lazy, useCallback, useEffect, useState } from "react";
import { HomePageType, SectionType } from "../models/homeModel";
import HomeService from "../service/homeService";

// import {BannerText, HeroBanner, ContentGrid, PriceTab} from '@/core/components';
import { modules } from "@/core/constants/modules";
export const HomeViewModel = () => {
  const [homeData, setHomeData] = useState<HomePageType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    getHome();
  }, []);

  const getHome = useCallback(async () => {
    setIsLoading(true);
    const usersList = await HomeService.getHome();
    if (usersList) {
      setHomeData(usersList);
      setIsLoading(false);
    }
  }, []);

  const getModule = (type: string, section: SectionType) => {
    const mod = modules.filter((item) => item.type === type);
    if (mod && mod.length > 0) {
      const Component = lazy(() => import(mod[0].component));
      return <Component section={section} />;
    }
  };

  return {
    getHome,
    homeData,
    isLoading,
    getModule,
  };
};
