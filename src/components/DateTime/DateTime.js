import {useEffect, useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {setDate} from "../../redux/slices/datetimeSlice";

export default function DateTime() {
	const dispatch = useDispatch()

	const date = new Date(useSelector(state => state.datetime.currentDate));

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(setDate(new Date().toISOString()))
		}, 1000)

		return () => clearInterval(interval)
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