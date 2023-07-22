import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/images/scooter.svg";
// import "./zippyColors.css";

export function NavbarStation({
	showme = true,
	btn1text = "Iniciar Sesión",
	btn2text = "Registro",
}) {
	return (
		<Navbar
			bg="dark"
			data-bs-theme="dark"
			//fixed="top"
			expand="lg"
			className="justify-content-arround"
		>
			<Container className="d-flex">
				<Navbar.Collapse id="hide_me" hidden={true}>
					<Nav className="me-auto">
						<Nav.Link
							className="fs-6 text-muted"
							href="#nosotros"
							active={false}
						>
							Sobre Nosotros
						</Nav.Link>
						<Nav.Link
							className="fs-6 text-muted"
							href="#contacto"
							active={false}
						>
							Contacto
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand href="#" className="">
					<img
						src={Logo}
						alt="Logo"
						width={38}
						height={38}
						style={{
							background: "#e1e619",
							borderRadius: "10%",
						}}
					/>{" "}
					Zippy{" "}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-left">
					<Nav className="ms-auto">
						<Button className="mx-2">
							<Nav.Link href="#home" hidden={!showme} className="fs-5">
								{btn1text}
							</Nav.Link>
						</Button>
						<Button className="mx-2" variant="secondary">
							<Nav.Link href="#link" hidden={!showme} className="fs-5">
								{btn2text}
							</Nav.Link>
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}