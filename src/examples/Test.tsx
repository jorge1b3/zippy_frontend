import axios from "axios";
import { useEffect, useState } from "react";
import { Token } from "../services/types";
// import {loggin, getVehicles} from "../services/fetchDataAxios";
//
export function Test() {
	// const [vehicles, setVehicle] = useState<Vehicle[]>([]);

	const [token, setToken] = useState<Token>();

	useEffect(() => {
		const fetchData = async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
				data: JSON.stringify({ username: "admin", password: "admin" }),
				method: "post",
			};

			const loginResponse = await axios
				.request<Token>(config)
				.then((res) => res.data);
			setToken(loginResponse);
			console.log("token", loginResponse);
		};
		fetchData();
	}, [token]);
	return !token ? <div>error</div> : <div>{token.accessToken}</div>;
}
// 	if (error) return "An error has occurred.";
// 	if (isLoading) return "Loading...";
// 	const vehicles = data as Vehicle[];
// 	return vehicles ? (
// 		<Container>
// 			<Table striped bordered hover size="sm" responsive cellPadding={"1em"}>
// 				<thead>
// 					<tr>
// 						<th>Imagen</th>
// 						<th>Modelo</th>
// 						<th>Tipo</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{vehicles?.map((vehicle) => (
// 						<tr>
// 							<td>
// 								<img
// 									src={vehicleImage}
// 									alt="vehicle"
// 									style={{ maxWidth: "10vh" }}
// 								/>
// 							</td>
// 							<td>{vehicle.model}</td>
// 							<td>{vehicle.type}</td>
// 							<td>
// 								<MyButton text="Alquilar" />
// 								<MyButton text="Reservar" />
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</Table>
// 		</Container>
// 	) : (
// 		<div>error</div>
// 	);
// }
