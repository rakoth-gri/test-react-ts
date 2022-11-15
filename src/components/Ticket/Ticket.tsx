import React from "react";
import "./Ticket.css";
// сервисы
import { dateFormat } from "./../../service/service";
// типы
import { IFlightData } from "./../../constants/types";
// компоненты
import ButtonList from "../ButtonList";


interface ITicketProps extends IFlightData {
	depTime: string;
	arrTime: string;
	price: number;
}

const Ticket: React.FC<ITicketProps> = ({ from, to, flightDate, returnDate, depTime, arrTime}) => {
	return (
		<div className="ticket">
			<div className="ticket__logoContainer">
				<span className="sticker"> невозвратный </span>
				<img src="../assets/logo.svg" alt="logo" className="logo" />
				<span className="company"> s7 airlines</span>
			</div>
			<div className="ticket__depart block">
				<time className="time"> {depTime} </time>
				<span className="city">{`${from} ${dateFormat(flightDate)}`}</span>
			</div>

			<div className="ticket__info">
				<div className="info__airports">
					<span>SVO</span>
					<span>ROV</span>
				</div>
				<div className="info__line">
					<div className="info__line_circle"></div>
					<hr className="info__line_line"></hr>
					<div className="info__line_circle"></div>
				</div>
				<div className="flightTime"> в пути 1 час 55 мин </div>
			</div>

			<div className="ticket__arrive block">
				<time className="time"> {arrTime} </time>
				<span className="city">{`${to} ${dateFormat(flightDate)}`}</span>
			</div>

			<div className="ticket__services">
				<img src="../assets/bag.svg" alt="bag" className="bag" />
				<img src="../assets/baggage.svg" alt="baggage" className="baggage" />
			</div>
			{!returnDate && <ButtonList />}
		</div>
		
	);
};

export default Ticket;
