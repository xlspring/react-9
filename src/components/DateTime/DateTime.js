import {useEffect, useState} from "react";
import "./index.css";

export default function DateTime() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	})

	return (
		<p className={"datetime"}>
			<CurrentDate date={date} /><br />
			<CurrentTime date={date} />
		</p>
	)
}

const CurrentDate = (props) => (
	<span>
		{props.date.toLocaleString("ua-UA", {
			weekday: "short",
			year: "2-digit",
			month: "long",
			day: "numeric",
		})}
	</span>
)

const CurrentTime = (props) => (
	<span>
		{props.date.toLocaleString("ua-UA", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hourCycle: "h24"
		})}
	</span>
)