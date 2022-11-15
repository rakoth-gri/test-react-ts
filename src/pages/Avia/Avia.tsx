import React, { useState } from "react";
import "./Avia.css";
import { GetCtx } from "../../context";
import { useNavigate } from "react-router-dom";
// константы
import { inputList } from "../../constants/constants";
// типы
import { ICtx} from "../../constants/types";
import { routesEnum } from "../../router";

const Avia: React.FC = () => {
	const { setFlightData } = GetCtx() as ICtx;

	const location = useNavigate();

	const [state, setState] = useState({ from: "", to: "", flightDate: "", returnDate: "" });

	const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		if (!state.returnDate) {
			setFlightData([state]);
		} else {
			setFlightData([
				state,
				{ from: state.to, to: state.from, flightDate: state.returnDate, returnDate: state.returnDate},
			]);
		}
		setState({ from: "", to: "", flightDate: "", returnDate: "" });
		location(routesEnum.info);
	};

	return (
		<form id="form" onSubmit={submitHandler}>
			<div className="elements">
				{inputList.map(({ id, label, placeholder, name, type }) => (
					<div className="aviaitem" key={id}>
						<label htmlFor={id}> {label} </label>
						<input
							placeholder={placeholder}
							name={name}
							id={id}
							type={type}
							onChange={(e) => setState({ ...state, [e.target.name]: e.target.value })}
							value={state[id]}
						/>
					</div>
				))}
			</div>
			<div className="elements">
				<button className="submit" disabled={state.from && state.to && state.flightDate ? false : true}>
					{" "}
					Найти билеты{" "}
				</button>
			</div>
		</form>
	);
};

export default Avia;
