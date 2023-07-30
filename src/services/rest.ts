import { ObjectId } from "bson";
import { url_auth, url_stations, url_vehicle } from "./constantes";
import { FetchOptions, Station, Token, Vehicle, login } from "./types";
import { getData, response } from "./utils";

type AuthResponse = (username: string, password: string) => response<Token>
type VehicleResponse = (token: Token) => response<Vehicle[]>

export const auth: AuthResponse = async (username, password)=> {
  const data: login = {
    username: username,
    password: password
  }
  const fetchOptions: FetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  };
  const url = `${url_auth}/login`;
  return await getData<Token>(fetchOptions, url);
};

export const getVehicles: VehicleResponse = async (token) => {
  const url = `${url_vehicle}/all`;
  const fetchOptions: FetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
    },
  };
  return await getData<Vehicle[]>(fetchOptions, url);
};

export const getStations = async (token: Token) => {
  const url = `${url_stations}/all`;
  const fetchOptions: FetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
    },
  };
  return await getData<Station[]>(fetchOptions, url);
};

export const getAvailableVehicles = async (idStation: ObjectId, token: Token) => {
  const url = `${url_stations}${idStation.toString}/available-vehicles`;
	const fetchOptions: FetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.accessToken}`,
    },
  };

};