import React from "react";
import "./Info.css";
// контекст
import { GetCtx } from "../../context";
// типы
import { ICtx, IFlightData } from "../../constants/types";
// компоненты:
import ButtonList from "../../components/ButtonList";
import Ticket from "./../../components/Ticket";
import PriceBlock from "../../components/PriceBlock";

const Info: React.FC = () => {
	const { flightData, flightTime, price } = GetCtx() as ICtx;

	return (
		<section className="wrapper">
			<div className="tickets">
				{flightData.map((flight: IFlightData, index) => (
					<Ticket {...flight} {...flightTime} price={price} key={index} />
				))}
			</div>
			{flightData[0].returnDate ? (
				<PriceBlock price={(2 * price).toLocaleString()} />
			) : (
				<PriceBlock price={price.toLocaleString()} />
			)}
		</section>
	);
};

export default Info;
