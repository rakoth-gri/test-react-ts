import React from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";

// типы
import { routesEnum } from "../../router";

const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<NavLink to={routesEnum.main}> главная </NavLink>
				<NavLink to={routesEnum.avia}> поиск </NavLink>
				<NavLink to={routesEnum.info}> инфо </NavLink>
			</nav>
		</header>
	);
};

export default Header;
