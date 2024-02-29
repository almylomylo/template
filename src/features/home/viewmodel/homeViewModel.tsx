// import {useEffect, useState} from 'react';
import {useCallback, useEffect, useState} from 'react';
import {UserModel} from '../models/homeModel';
import HomeService from '../service/homeService';

export const HomeViewModel = () => {
  const [users, setUsers] = useState<UserModel[] | null>();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = useCallback(async () => {
    const usersList = await HomeService.getUsers();
    if (usersList) setUsers(usersList);
  }, []);

  return {
    getUsers,
    users,
  };
};
