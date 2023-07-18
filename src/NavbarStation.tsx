import { Button, Collapse, Container, Navbar, NavbarBrand } from "react-bootstrap";
import "./Navbar.css";
import Logo from "./assets/scooter.svg";


function NavbarStation() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="bg-dark py-3" >
      <Container>
        <NavbarBrand href="#">
        <span
            class="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"
            style={{
              background: "#e1e619",
              color: "var(--bs-black)",
              width: "38px",
              height: "38px"
            }}
          >
          </span>
          <image src={Logo} alt="Logo" style={{ width: "38px", height: "38px" }} />
          <span className="fs-4" style={{ fontSize: "22px" }}>
            Zippy
          </span>
        </NavbarBrand>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        >Toggle navigation</Button>
        <Collapse className="collapse navbar-collapse flex-grow-0 order-md-first" in={open}>
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active fs-5" href="#" style={{ fontSize: "18px" }}>
                Sobre nosotros
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fs-5"
                href="#Contact Details"
                style={{ fontSize: "18px", color: "var(--bs-gray-400)" }}
              >
                Contacto
              </a>
            </li>
          </ul>
          <div class="d-md-none my-2">
            <button class="btn btn-light me-2" type="button">
              <span style={{ color: "rgb(1, 24, 46)" }}>Iniciar sesión</span>
            </button>
            <button
              class="btn btn-primary"
              type="button"
              style={{ background: "#e1e619" }}
            >
              <span style={{ color: "rgb(1, 24, 46)" }}>Registro</span>
            </button>
          </div>
        <div class="d-none d-md-block">
          <a class="btn btn-light me-2" role="button" href="login.html">
            Iniciar Sesión
          </a>
          <a
            class="btn btn-primary"
            role="button"
            href="login.html"
            style={{ background: "#e1e619", color: "var(--bs-black)" }}
          >
            Registro
          </a>
        </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}