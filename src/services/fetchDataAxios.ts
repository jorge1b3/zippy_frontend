import axios from 'axios';
import useSWR from 'swr';
import { Token, Vehicle } from './types';

type methods = 'get' | 'post' | 'put' | 'delete';

type userLogin = {
  username: string,
  password: string
}

type data = {
  headers?:{
    Authorization?: string,
  },
  body?: any
}

type Fetcher = <T> (crudMethod: methods) => (data: data) => (url: string)=> Promise<T>;
const fetcher: Fetcher = (crudMethod: methods) => (data) => (url: string) => {
  return axios[crudMethod](url, {...data})
    .then(res => res.data)
    .catch(err => err.response.data)
    .finally(() => console.log('finally')
  );
}

type Response<T> = {
  response: T | undefined,
  isLoading: boolean,
  isError: any
}

const useFetcher = <T>(url: string, crudMethod: methods, data: data): Response<T> => {
  const { data: response, error } = useSWR(url, fetcher<T>(crudMethod)(data));
  return {
    response,
    isLoading: !error && !response,
    isError: error
  }
}

const useFetcherWithAuth = <T>(token: Token, crudMethod: methods, url: string) => {
  return useFetcher<T>(url, crudMethod,  {headers: {Authorization: `Bearer ${token.accessToken}`}})
}

const useFetcherWithAuthAndBody = <T>(token: Token, crudMethod: methods, body: any, url: string) => {
  return useFetcher<T>(url, crudMethod, {headers: {Authorization: `Bearer ${token.accessToken}`}, body: body})
}

const useFetcherWithBody = <T>(crudMethod: methods, body: any, url: string) => {
  return useFetcher<T>(url, crudMethod, {body: body})
}

export const login = (user: userLogin) => {
  return useFetcherWithBody<Token>('post',user,'/api/login');
}

export const getVehicles = (token: Token) => {
  return useFetcherWithAuth<Vehicle[]>(token, 'get' ,'/api/vehicles');
}

export const getVehicle = (token: Token, id: string) => {
  return useFetcherWithAuth<Vehicle>(token, 'get', `/api/vehicles/${id}`);
}

export const createVehicle = (token: Token, vehicle: Vehicle) => {
  return useFetcherWithAuthAndBody<Vehicle>(token, 'post', vehicle, '/api/vehicles');
}

export const updateVehicle = (token: Token, vehicle: Vehicle) => {
  return useFetcherWithAuthAndBody<Vehicle>(token, 'put', vehicle,`/api/vehicles/${vehicle.id}`);
}

export const deleteVehicle = (token: Token, id: string) => {
  return useFetcherWithAuth(token ,'delete', `/api/vehicles/${id}`);
}

// Path: src/pages/index.tsx