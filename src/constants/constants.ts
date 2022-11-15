export const inputList = [
	{
		label: "Откуда",
		name: "from",
		placeholder: "Город вылета",
		id: "from",
		type: "text",
	},
	{
		label: "Куда",
		name: "to",
		placeholder: "Город прилета",
		id: "to",
		type: "text",
	},
	{
		label: "Туда",
		name: "flightDate",
		placeholder: "",
		id: "flightDate",
		type: "date",
	},
	{
		label: "Обратно",
		name: "returnDate",
		placeholder: "",
		id: "returnDate",
		type: "date",
	},
];

export const buttonsList = [
	{
		dep: "09:20",
		arr: "11:05",
	},
	{
		dep: "10:20",
		arr: "12:05",
	},
	{
		dep: "11:20",
		arr: "13:05",
	},
];

export const flightDataStorage: string = "flightDataStorage";
