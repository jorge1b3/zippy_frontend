import { Station, Token, Vehicle } from "services/types";
import { getData } from "./utils";

const API_URL = "http://zippy.sytes.net:8080/api/";
const API_URL_AUTH = `${API_URL}auth/`;
// const API_URL_USERS = `${API_URL}users/`;
// const API_URL_VEHICLES = `${API_URL}vehicles/`;
const API_URL_STATIONS = `${API_URL}stations/`;

export const login = async (
	email: string,
	password: string,
) => {
	return await getData<Token>({
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
}, `${API_URL_AUTH}login`);
};

// export const register = async (user: User): Promise<[User, Error]> => {
// 	return await getData<User>(`${API_URL}users`, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(user),
// 	});
// };

export const getAvailableVehicles = async (station: Station, token: Token) => {
	return await getData<Vehicle[]>(
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token.accessToken}`,
			},
		},
		`${API_URL_STATIONS}${station.id}/available-vehicles`
	);
};

export const getStations = async (token: Token) => {
	return await getData<Station[]>({
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.accessToken}`,
		},
	}, `${API_URL_STATIONS}all` );
};
