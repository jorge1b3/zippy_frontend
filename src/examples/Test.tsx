import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import vehicleImage from "../assets//images//patineta.jpg";
import { MyButton } from "../button/MyButton";
import { Vehicle } from "../models/Vehicle";
import { getVehicles, login } from "../services/fetchDataAxios";
// import {loggin, getVehicles} from "../services/fetchDataAxios";
//
export function Test() {
	const [vehicles, setVehicle] = useState<Vehicle[]>([]);
	login({ username: "admin", password: "admin" }).then(() => {
		getVehicles().response
			? setVehicle(getVehicles().response as Vehicle[])
			: console.log("error");
	});
	return (
		<Container>
			<Table striped bordered hover size="sm" responsive cellPadding={"1em"}>
				<thead>
					<tr>
						<th>Imagen</th>
						<th>Modelo</th>
						<th>Tipo</th>
					</tr>
				</thead>
				<tbody>
					{vehicles.map((vehicle) => (
						<tr>
							<td>
								<img
									src={vehicleImage}
									alt="vehicle"
									style={{ maxWidth: "10vh" }}
								/>
							</td>
							<td>{vehicle.model}</td>
							<td>{vehicle.type}</td>
							<td>
								<MyButton text="Alquilar" />
								<MyButton text="Reservar" />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
}