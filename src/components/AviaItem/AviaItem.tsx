import React from "react";
import "./AviaItem.css";


// типы
import {TInputList} from "../../constants/types"

interface IAviaItemProps extends TInputList {}

const AviaItem:React.FC<IAviaItemProps> = ({ label, name, placeholder, id, type }) => {
	return (
		<div className="aviaitem">
			<label htmlFor={id}> {label} </label>
			<input placeholder={placeholder} name={name} id={id} type={type}/>
		</div>
	);
};

export default AviaItem;
