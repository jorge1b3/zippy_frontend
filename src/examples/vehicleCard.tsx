import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getVehicles } from "../services/rest.ts";
import { Token, Vehicle } from "../services/types.ts";

type Props = {
	token: Token | undefined;
};

export const VehicleCard = ({ token }: Props) => {
	const [vehicles, setVehicles] = useState<Vehicle[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const username = "admin";
	const password = "admin";

	useEffect(() => {
		const fetchData = async () => {
			// const loginResponse = await auth(username, password);
			const vehiclesResponse = await getVehicles(token);
			// if (loginResponse.isLeft() || vehiclesResponse.isLeft()) {
			// 	setError(loginResponse.left() || vehiclesResponse.right());
			// }
			if (!token) {
				setError(new Error("No token"));
			}
			setVehicles(vehiclesResponse.right());
		};
		fetchData();
	}, [token]);

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
