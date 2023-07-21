import facebook from "./assets/images/facebook.svg";
import instagram from "./assets/images/instagram.svg";
import twitter from "./assets/images/twitter.svg";
//import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
	return (
		<footer className="text-center py-4">
			<Container>
				<Row>
					<Col>
						<p className="text-muted my-2">Copyright&nbsp;© 2023 Zippy</p>
					</Col>
					<Col>
						<ul className="list-inline my-2">
							<li className="list-inline-item me-4">
								<div className="bs-icon-circle bs-icon-primary bs-icon">
									<img src={twitter} alt="Twitter ico" />
								</div>
							</li>
							<li className="list-inline-item me-4">
								<div className="bs-icon-circle bs-icon-primary bs-icon">
									<img src={facebook} alt="Facebook ico" />
								</div>
							</li>
							<li className="list-inline-item">
								<div className="bs-icon-circle bs-icon-primary bs-icon">
									<img src={instagram} alt="Instagram ic" />
								</div>
							</li>
						</ul>
					</Col>
					<Col>
						<ul className="list-inline my-2">
							<li className="list-inline-item">
								<a className="link-secondary" href="#">
									Política de privacidad
								</a>
							</li>
							<li className="list-inline-item">
								<a className="link-secondary" href="#">
									Términos de uso
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}