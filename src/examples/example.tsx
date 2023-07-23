import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import scootter from "../assets/images/scooter.svg";

function BasicExample() {
	return (
		<Container>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<div>
							<img src={scootter} alt="scootter" style={{ maxWidth: "10vh" }} />
						</div>
						Hola mundo
					</Accordion.Header>
					<Accordion.Body>awdawda awd awdawdaw d ada awd</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Accordion Item #2</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</Container>
	);
}

export default BasicExample;