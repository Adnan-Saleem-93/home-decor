import CardItem from "./Card-Item";
import CardImg1 from "../assets/images/card-img-1.jpg";
import CardImg2 from "../assets/images/card-img-2.jpg";

const Cards = () => {
	return (
		<div className="flex justify-between pb-10">
			<CardItem alt="card-img-1" pic={CardImg1} title="Pillow" />
			<CardItem alt="card-img-2" pic={CardImg2} title="Picture" />
		</div>
	);
};

export default Cards;
