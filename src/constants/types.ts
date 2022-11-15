import { ReactElement, ReactNode } from "react";

// объект для инпутов формы (Avia)
export type TInputList = {
	label: string;
	name: string;
	placeholder: string;
	id: string;
	type: string;
};

// роутинг
export interface IRoutes {
	path: string;
	element: React.FunctionComponent;
}

// информация о рейсе
export interface IFlightData {
	from: string;
	to: string;
	flightDate: string;
	returnDate: string;
}

// контекст ------------>>>>>>>>>>>>>
export interface IContextProvider {
	children: ReactElement | ReactNode;
}

interface IFlightTime {
	depTime: string;
	arrTime: string;
}

export interface ICtx {
	setFlightData: (data: IFlightData[]) => void;
	setFlightTime: (depTime: string, arrTime: string) => void;
	flightData: IFlightData[];
	flightTime: IFlightTime;
	price: number;
}
