import { MyButton } from "./MyButton";
import vehicleImage from "./assets/patineta.jpg";
//import "./AppStationDetails.css";
import { Container, Table } from "react-bootstrap";

const station = {
  id: 1,
  name: "Estación UIS",
  address: "Calle 9 #27-01",
  bikes: [
    {
      id: 411,
      model: "Turboant X7 Pro",
      type: "Patineta electrica",
      lastMaintenance: "1/6/2023",
      price: 1500,
    },
    {
      id: 405,
      model: "Turboant X7 Pro",
      type: "Patineta electrica",
      lastMaintenance: "1/6/2023",
      price: 1500,
    },
    {
      id: 415,
      model: "Turboant X7 Pro",
      type: "Patineta electrica",
      lastMaintenance: "1/6/2023",
      price: 1500,
    },
    {
      id: 402,
      model: "Turboant X7 Pro",
      type: "Patineta electrica",
      lastMaintenance: "1/6/2023",
      price: 1500,
    },
  ],
}

export function AppStationDetails() {
  return (
    <Container>
    <Table striped bordered hover size="sm" responsive cellPadding={"1em"}>
      <thead>
        <tr>
          <th>id</th>
          <th>Imagen</th>
          <th>Modelo</th>
          <th>Tipo</th>
          <th>Ultimo mantenimiento</th>
          <th>Precio viaje</th>
        </tr>
      </thead>
      <tbody>
          {station.bikes.map((bike) => (
            <tr key={bike.id}>
              <td>{bike.id}</td>
              <td><img src={vehicleImage} alt="vehicle" style={{maxWidth: "10vh"}} /></td>
              <td>{bike.model}</td>
              <td>{bike.type}</td>
              <td>{bike.lastMaintenance}</td>
              <td>{bike.price}</td>
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