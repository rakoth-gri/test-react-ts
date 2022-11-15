// тип
import { IFlightData } from "../constants/types";

// ключ локального хранилища
import { flightDataStorage } from "../constants/constants";

export function dateFormat(arg: string): string {
	const date = new Date(arg).getDate();
	const month = new Date(arg).getMonth() + 1;
	const year = new Date(arg).getFullYear();
	return `${date}.${month}.${year}`;
}

export function setToLS(data: IFlightData[]): void {
	localStorage.setItem(flightDataStorage, JSON.stringify(data));
}

export function getFromLS(): IFlightData[] {
	return JSON.parse(localStorage.getItem(flightDataStorage) || '[]');
}
