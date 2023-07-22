// import { AppStationDetails } from "./examples/AppStationDetails";
// import { Test } from "./examples/Test";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import BasicExample from "./examples/example";
import Footer from "./footer/Footer";
import { NavbarStation } from "./navbar/NavbarStation";

const rootElement = document.getElementById("root");
if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<>
			<NavbarStation />
			{/* <AppStationDetails /> */}
			{/* <Test/> */}
			<BasicExample />
			{/* //<VehicleCard /> */}
			<Footer />
		</>,
	);
}
