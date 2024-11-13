import LogoPic from "../../assets/logo.png";
import "./index.css";

export default function Logo() {
	return (
		<a className={"logo-wrapper"} href={"/"}>
			<img src={LogoPic} alt="Logo"/>
		</a>
	)
}