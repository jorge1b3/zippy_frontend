import { Button } from "react-bootstrap";
import "./MyButton.css";

interface MyButtonProps {
    text: string;
}

export const MyButton = ({ text }: MyButtonProps) => {
    return (
        <Button className="btn-primary">{text}</Button>
    );
}

