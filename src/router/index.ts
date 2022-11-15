// Компоненты
import Main from "../pages/Main";
import Avia from "../pages/Avia";
import Info from "../pages/Info";
import NotFound from "../pages/NotFound";

// Типы:
import { IRoutes } from "../constants/types";

// роутер
export enum routesEnum {
	main = "/",
	avia = "/avia",
	info = "/avia/info",
	notFound = "*",
}

export const routes: IRoutes[] = [
	{
		path: routesEnum.main,
		element: Main,
	},
	{
		path: routesEnum.avia,
		element: Avia,
	},
	{
		path: routesEnum.info,
		element: Info,
	},
	{
		path: routesEnum.notFound,
		element: NotFound,
	},
];
