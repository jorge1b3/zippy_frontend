import logo from "./logo.svg";
//import "./App.css";
import NavbarStation from "./NavbarStation";
import AppStationDetails from "./AppStationDetails";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        background: "var(--bs-primary)",
        fontSize: "35px",
        color: "var(--swiper-theme-color)",
        "--bs-dark": "#01182e",
        "--bs-dark-rgb": "1, 24, 46",
        "--bs-primary": "#01182e",
        "--bs-primary-rgb": "1, 24, 46",
      }}
    >
      <div>
        <NavbarStation />
        <div className="app_principal">
          <AppStationDetails />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
