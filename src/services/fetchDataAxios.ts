import axios from 'axios';
import { useState } from 'react';
import { Token, Vehicle } from 'services/types';
import useSWR from 'swr';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';


export const [isLoggedIn, setLogged] = useState(false);

type methods = 'get' | 'post' | 'put' | 'delete';

type userLogin = {
  username: string,
  password: string
}

type Fetcher = <T> (crudMethod: methods, body?: any, isLoggin?:boolean) => (url: string)=> Promise<T>;

export const fetcher:Fetcher =  (crudMethod: methods, body?:any, isLoggin?:boolean) => async(url: string)=> {
  if (!isLoggin && !axios.defaults.headers["Authorization"]){login({username: 'admin', password: 'admin'})}
  const config = {
    method: crudMethod,
    data: body,
    url: url
  }
  return await axios.request(config)
    .then(res => res.data)
    .catch(err => err.response.data)
    .finally(() => console.log('finally'))
}

type Response<T> = {
  response: T | undefined,
  isLoading: boolean,
  isError: any
}

const useFetcher = <T>(url: string, crudMethod: methods, body?:any): Response<T>=> {
  const { data, error, isLoading  } = useSWR(url, fetcher<T>(crudMethod, body));
  console.log(data, error, isLoading);
  return {
    response: data,
    isLoading: isLoading,
    isError: error
  }
}


export const login = async (user: userLogin) => {
  const response = await fetcher<Token>('post', user, true)('/auth/login');
  if (!response) return {response};
  axios.defaults.headers.common['Authorization'] = `Bearer ${response.accessToken}`;
  setLogged(true);
  return {response};
}

export const checkLogin = () => {
  if (!isLoggedIn){
  login({username: 'admin', password: 'admin'});
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

