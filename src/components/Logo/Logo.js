import "./index.css";

export default function Logo(props) {

	return (
		<a className={"logo-wrapper"} href={"/"}>
			<img src={props.image} alt="Logo"/>
		</a>
	)
}