import {useState} from "react";

import "./index.css";

export default function Cat(props) {
	const [shouldLoad, setShouldLoad] = useState(false);
	return (
		<li className={"cat-container"}>
			<p>{props.data.tags.join(", ")}</p>
			{
				shouldLoad ?
					(<img src={"https://cataas.com/cat/" + props.data._id} alt={props.data.tags}/>) :
					(<button onClick={() => setShouldLoad(true)}>Click to load cat</button>)
			}
		</li>
	)
}