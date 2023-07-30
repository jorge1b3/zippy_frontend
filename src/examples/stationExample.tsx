import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { auth, getStations } from "../services/rest.ts";
import { Station } from "../services/types.ts";

// type Props = {
// 	token: Token | undefined;
// };

export const StationCard = () => {
	const [stations, setStations] = useState<Station[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const username = "admin";
	const password = "admin";

	useEffect(() => {
		const fetchData = async () => {
			const loginResponse = await auth(username, password);
			// if (!token) {
			// 	setError(new Error("No token"));
			// }
			const stationResponse = await getStations(loginResponse.right());
			if (loginResponse.isLeft() || stationResponse.isLeft()) {
				setError(loginResponse.left() || stationResponse.right());
			}
			setStations(stationResponse.right());
		};
		fetchData();
	}, []);

	return (
		<Container>
			<ul>
				{error ? (
					<div>Error: {error.message}</div>
				) : (
					stations.map((station) => <li>{station.name}</li>)
				)}
			</ul>
		</Container>
	);
};
