import type { FeatureCollection } from "geojson";
import mapLib from "mapbox-gl";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { auth, getStations } from "../services/rest.ts";
// import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import { auth, getVehicles } from "../services/rest.ts";
// import { Vehicle } from ". ./services/types.ts";
import type { CircleLayer } from "react-map-gl";

export const Mapa = () => {
	mapLib.accessToken =
		"pk.eyJ1Ijoiam9yZ2UxYjMiLCJhIjoiY2xrMDM2ZjRlMDNyNjNsdDkxdHFiN3g1cyJ9.Ait98D4oXjHa-lVXPqUf6g";
	mapLib.Marker;
	const [stations, setStations] = useState<Station[]>([]);
	// const [vehicles, setVehicles] = useState<any[]>([]);
	const [error, setError] = useState<Error | null>(null);
	const username = "admin";
	const password = "admin";

	useEffect(() => {
		const fetchData = async () => {
			const loginResponse = await auth(username, password);
			const stationsResponse = await getStations(loginResponse.right());
			if (loginResponse.isLeft() || stationsResponse.isLeft()) {
				setError(loginResponse.left() || stationsResponse.right());
			}
			setStations(stationsResponse.right());
		};
		fetchData();
	}, []);

	const cordinates = stations.map((station) => station["coordinates"]);

	// const geojson: FeatureCollection = {
	//   type: 'FeatureCollection',
	//   features: [
	//     {geometry: {type: 'Point', coordinates: [-77.032, 38.913]}, type: 'Feature', properties: {title: 'Mapbox'}}
	//   ]
	// };

	const geojson2: FeatureCollection = {
		type: "FeatureCollection",
		features: [
			cordinates.map((cordinate) => {
				return {
					geometry: { type: "Point", coordinates: cordinate },
					type: "Feature",
					properties: { title: "Mapbox" },
				};
			}),
		],
	};

	const layerStyle: CircleLayer = {
		id: "point",
		type: "circle",
		paint: {
			"circle-radius": 10,
			"circle-color": "#007cbf",
		},
	};

	return error ? (
		<div>Error</div>
	) : (
		<Container className="justify-content-center">
			<Map
				mapLib={mapLib}
				initialViewState={{
					longitude: -100,
					latitude: 40,
					zoom: 3.5,
				}}
			>
				<Source id="my-data" type="geojson" data={geojson}>
					<Layer {...layerStyle} />
				</Source>
			</Map>
		</Container>
	);
};
