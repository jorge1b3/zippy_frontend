import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { auth, getVehicles } from "../services/rest.ts";
import { Vehicle } from "../services/types.ts";

export const VehicleCard = () => {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const username = "admin";
	const password = "admin";

	useEffect(() => {
		const fetchData = async () => {
			const loginResponse = await auth(username, password);
			const vehiclesResponse = await getVehicles(loginResponse.right());
			if (loginResponse.isLeft() || vehiclesResponse.isLeft()) {
				setError(loginResponse.left() || vehiclesResponse.right());
			}
			setVehicles(vehiclesResponse.right());
		};
		fetchData();
	}, []);

	return (
		<Container>
			<ul>
				{error ? (
					<div>Error: {error.message}</div>
				) : (
					vehicles.map((vehicle) => (
						<li key={vehicle.serial}>{vehicle.model}</li>
					))
				)}
			</ul>
		</Container>
	);
};
