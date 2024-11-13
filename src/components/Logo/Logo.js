import LogoPic from "../../assets/logo.png";
import "./index.css";

export default function Logo() {
	return (
		<a className={"logo-wrapper"} href={"http://localhost:3000/"}>
			<img src={LogoPic} alt="Logo"/>
		</a>
	)
}