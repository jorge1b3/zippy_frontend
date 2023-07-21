import "./MyButton.css";
//import { ReactElement } from "react";
import { Button } from "react-bootstrap";

type MyButtonProps = {
	text: String;
	onClick?: () => void;
	hidden?: boolean;
};

export const MyButton = ({ text, onClick, hidden }: MyButtonProps) => {
	return (
		<Button onClick={onClick} className="btn-primary" hidden={hidden}>
			{/* {children} */}
			{text}
		</Button>
	);
};

