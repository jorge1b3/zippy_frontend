import { StationCard } from "./examples/stationExample";
// import { Mapa } from "./componentes/Mapa";
// import { Test } from "./examples/Test";
import Footer from "./footer/Footer";
import { NavbarStation } from "./navbar/NavbarStation";
// import { AppStationDetails } from "./examples/AppStationDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

// const [token, setToken] = useState<string | null>(null);

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<>
			{/* <Login setToken={setToken} /> */}
			<NavbarStation />
			{/* <VehicleCard token={token}/> */}
			{/* <Mapa /> */}
			<StationCard />
			{/* <AppStationDetails /> */}
			{/* <Test /> */}
			{/* <BasicExample /> */}
			{/* //<VehicleCard /> */}
			<Footer />
		</>,
	);
}
