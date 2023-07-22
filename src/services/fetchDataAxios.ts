import axios from 'axios';
import { useState } from 'react';
import useSWR from 'swr';
import { Token, Vehicle } from './types';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';


export const [isLoggedIn, setLogged] = useState(false);

type methods = 'get' | 'post' | 'put' | 'delete';

type userLogin = {
  username: string,
  password: string
}

type Fetcher = <T> (crudMethod: methods) => (body: any) => (url: string)=> Promise<T>;

const fetcher:Fetcher = (crudMethod: methods) => (body?:any) => (url: string)=> {
  return axios[crudMethod](url, {body:body})
    .then(res => res.data)
    .catch(err => err.response.data)
    .finally(() => console.log('finally'))
}

type Response<T> = {
  response: T | undefined,
  isLoading: boolean,
  isError: any
}

const useFetcher = <T>(url: string, crudMethod: methods, body?:any): Response<T> => {
  const { data, error, isLoading  } = useSWR(url, fetcher<T>(crudMethod)(body));
  return {
    response: data,
    isLoading: isLoading,
    isError: error
  }
}


export const login = async (user: userLogin) => {
  const response = await fetcher<Token>('post')(user)('/login');
  if (!response) return {response};
  axios.defaults.headers.common['Authorization'] = `Bearer ${response.accessToken}`;
  setLogged(true);
  return {response};
}

const checkLogin = () => {
  if (!isLoggedIn){
    return {response: undefined, isLoading: false, isError: 'You need to login first'}
  }
}

export const getVehicles = () => {
  checkLogin();
  return useFetcher<Vehicle[]>('/vehicles', 'get');
}

export const getVehicle = (id: string) => {
  checkLogin();
  return useFetcher<Vehicle>(`/vehicles/${id}`, 'get');
}
