import "./index.css";
import { VehicleCard } from "./vehicleCard";
//import { AppStationDetails } from "./AppStationDetails";
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<VehicleCard />
			<VehicleCard />
		</React.StrictMode>,
	);
}
