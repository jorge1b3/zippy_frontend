import axios from 'axios';
import { useEffect, useState } from 'react';
import { Token, Vehicle } from './types';



axios.defaults.baseURL = 'http://zippy.sytes.net:8080/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const [isLoggedIn, setLogged] = useState(false);

type methods = 'get' | 'post' | 'put' | 'delete';

type userLogin = {
  username: string,
  password: string
}

type Fetcher = <T> (crudMethod: methods,url: string ,  body?: any)=> Promise<T>;

export const fetcher:Fetcher = async (crudMethod: methods, url: string,  body?:any)=> {
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

export const useFetcher = <T>(url: string, crudMethod: methods, body?:any, needLogin?:boolean) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (needLogin && !axios.defaults.headers["Authorization"]) {
          setError('Not logged')
          return;
        }
        const response = await fetcher<T>(crudMethod, url, body);
        setData(response);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  },[]);
  return {data, error};
}

export const login = async (user: userLogin) => {
  const response = await fetcher<Token>('post', '/auth/login', user);
  if (!response) return {response};
  axios.defaults.headers.common['Authorization'] = `Bearer ${response.accessToken}`;
  setLogged(true);
  return {response};
}

export const getVehicles = () => {
  return useFetcher<Vehicle[]>('/vehicles', 'get');
}

export const getVehicle = (id: string) => {
  return useFetcher<Vehicle>(`/vehicles/${id}`, 'get');
}