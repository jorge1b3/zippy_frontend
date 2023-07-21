import { Station, Token, User, Vehicle } from "./types";
import { getData } from "./utils";

const API_URL = "http://34.23.109.180:8080/api/";
const API_URL_AUTH = `${API_URL}auth/`;
// const API_URL_USERS = `${API_URL}users/`;
// const API_URL_VEHICLES = `${API_URL}vehicles/`;
const API_URL_STATIONS = `${API_URL}stations/`;

export const login = async (
	email: string,
	password: string,
): Promise<[Token, Error]> => {
	return await getData<Token>(`${API_URL_AUTH}login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});
};

export const register = async (user: User): Promise<[User, Error]> => {
	return await getData<User>(`${API_URL}users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	});
};

export const getAvailableVehicles = async (station: Station, token: Token) => {
	return await getData<Vehicle[]>(
		`${API_URL_STATIONS}${station.id}/available-vehicles`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.accessToken}`,
			},
		},
	);
};

export const getStations = async (token: Token) => {
	return await getData<Station[]>(`${API_URL_STATIONS}all`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.accessToken}`,
		},
	});
};
