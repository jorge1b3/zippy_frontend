import { useEffect, useState } from "react";
import "./index.css";
import { FetchOptions, Token, Vehicle } from "./types";
import { getData } from "./utils";
const auth = async (username: String, password: String) => {
	const fetchOp: FetchOptions = {
		method: "POST",
		body: JSON.stringify({
			username: username,
			password: password,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	};
	const url = "http://34.23.109.180:8080/api/auth/login";
	return getData<Token>(url, fetchOp);
};

const getVehicles = async (token: Token) => {
	const fetchOp: FetchOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token.accessToken}`,
		},
	};
	const url = "http://34.23.109.180:8080/api/vehicle/all";
	return getData<Vehicle[]>(url, fetchOp);
};

export const VehicleCard = () => {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const username = "admin";
	const password = "admin";

	useEffect(() => {
		const fetchData = async () => {
			useEffect;
			const [loginResponse, loginError] = await auth(username, password);
			if (loginError) {
				setError(loginError);
				return;
			}
			const [vehicleResponse, vehicleError] = await getVehicles(loginResponse);
			if (vehicleError) {
				setError(vehicleError);
				return;
			}
			setVehicles(vehicleResponse);
		};
		fetchData();
	}, []);

	if (error) {
		return <div>Uppps! Estamos teniendo problemas</div>;
	} else {
		return (
			<div>
				<h1>Vehicles</h1>
				<ul>
					{vehicles.map((vehicle) => (
						<li>{vehicle.model}</li>
					))}
				</ul>
			</div>
		);
	}
};
