import React from "react";
import "./PriceBlock.css"

interface IPriceBlockProps {
	price: string;
}

const PriceBlock: React.FC<IPriceBlockProps> = ({ price }) => {
	return <div className="priceBlock">{price} &#8381;</div>;
};

export default PriceBlock;
