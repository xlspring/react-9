import "./index.css";

import {useEffect, useState} from "react";
import Cat from "../Cat/Cat";

export default function CatList() {

	const [catList, setCatList] = useState([]);

	const fetchCats = async () => {
		try {
			const res = await fetch("https://cataas.com/api/cats?" + new URLSearchParams({
				limit: 10,
				skip: 0
			}).toString())

			if (!res.ok) {
				throw new Error(`Status: ${res.status}`);
			}

			return await res.json();
		} catch (e) {
			console.error(e);
		}
	}

	useEffect(() => {
		console.log(catList)
	}, [catList]);

	return (
		<div>
			<button onClick={async () => setCatList(await fetchCats())}>FETCH THE CATS</button>
			<ul className={"cat-list"}>
				{catList.map(x => (<Cat data={x} key={x._id} />))}
			</ul>
		</div>
	)
}