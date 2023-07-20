import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { AppStationDetails } from "./AppStationDetails";
import Footer from "./Footer";
import { NavbarStation } from "./NavbarStation";
import { VehicleCard } from "./vehicleCard";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<>
			<NavbarStation />
			<AppStationDetails/>
			<VehicleCard />
			<Footer />
		</>,
	);
}
