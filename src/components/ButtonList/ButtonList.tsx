import React, { useState } from "react";
import "./ButtonList.css";
// контекст
import { GetCtx } from "./../../context/index";
// типы
import { ICtx } from "../../constants/types";
// константы:
import { buttonsList } from "../../constants/constants";

const ButtonList: React.FC = () => {
	const { setFlightTime } = GetCtx() as ICtx;

	const [active, setActive] = useState(0);

	const chooseFlightTime = (i: number, dep: string, arr: string) => {
		setActive(i);
		setFlightTime(dep, arr);
	};

	return (
		<div className="ticket__buttonsList">
			{buttonsList.map(({ dep, arr }, i) => (
				<button
					key={i}
					className={i === active ? "buttonsList__item active" : "buttonsList__item"}
					onClick={() => chooseFlightTime(i, dep, arr)}
				>
					{" "}
					{dep} - <span>{arr}</span>
				</button>
			))}
		</div>
	);
};

export default ButtonList;
