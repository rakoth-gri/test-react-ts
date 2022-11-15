import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

// импортим функцию, возвращающую контекст-провайдер:
import { ContextProvider } from "./context";

// импортируем массив роутов
import { routes } from "./router";

// типы
import { routesEnum } from "./router";

// компоненты:
import Header from "./components/Header";

function App() {
	return (
		<ContextProvider>
			<Header />
			<main className="container">
				<Routes>
					{routes.map((route) => (
						<Route path={route.path} element={<route.element />} key={route.path} />
					))}
				</Routes>
			</main>
		</ContextProvider>
	);
}

export default App;
