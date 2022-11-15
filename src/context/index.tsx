import React, { createContext, useState, useContext, useEffect } from "react";

// типы
import { IContextProvider } from "../constants/types";
import { IFlightData } from "../constants/types";

// сервисы
import { getFromLS, setToLS } from "../service/service";

export const ctx = createContext({});

export const ContextProvider: React.FC<IContextProvider> = ({ children }) => {
	const [state, setState] = useState({
		flightData: getFromLS(),
		flightTime: {
			depTime: "09:20",
			arrTime: "11:05",
		},
		price: 4150,
	});

	useEffect(() => {
		setToLS(state.flightData);
	}, [state.flightData]);

	const setFlightData = (payload: IFlightData[]) => setState({ ...state, flightData: payload});

	const setFlightTime = (depTime: string, arrTime: string): void => {
		setState(Object.assign({ ...state }, { flightTime: { depTime, arrTime } }));
	};

	const value = {
		setFlightData,
		setFlightTime,
		flightData: state.flightData,
		flightTime: state.flightTime,
		price: state.price,
	};

	return <ctx.Provider value={value}>{children}</ctx.Provider>;
};

// экспортируем ф-цию, возвращающую объект контекста:
export const GetCtx = () => useContext(ctx);
