import Image from "next/image";
import Item1 from "../assets/images/carousel-item-1.jpg";
import Item2 from "../assets/images/carousel-item-2.jpg";
import Item3 from "../assets/images/carousel-item-3.jpg";
import Item4 from "../assets/images/carousel-item-4.jpg";
import Item5 from "../assets/images/carousel-item-5.jpg";
import Item6 from "../assets/images/carousel-item-6.jpg";
import {
	MdOutlineKeyboardArrowLeft,
	MdKeyboardArrowRight,
} from "react-icons/md";

const items = [
	{ img: Item1, alt: "item-1" },
	{ img: Item2, alt: "item-2" },
	{ img: Item3, alt: "item-3" },
	{ img: Item4, alt: "item-4" },
	// { img: Item5, alt: "item-5" },
	// { img: Item6, alt: "item-6" },
];

const Carousel = () => {
	return (
		<div className="">
			<div
				className={`flex justify-around items-center h-[375px] bg-[url("../assets/images/carousel-bg.jpg")]`}
			>
				<button className="w-12 h-12 mr-4 rounded-full bg-slate-100/50 justify--items--center hover:bg-white transition-all duration-500">
					<MdOutlineKeyboardArrowLeft size={32} />
				</button>
				<div className="justify--items--center">
					{items.map((item, index) => {
						const { img, alt } = item;
						return (
							<Image
								key={index}
								src={img}
								alt={alt}
								className="rounded-full h-52 w-52 mx-8 border-[1rem] border-white"
							/>
						);
					})}
				</div>
				<button className="w-12 h-12 ml-4 rounded-full bg-slate-100/50 justify--items--center hover:bg-white transition-all duration-500">
					<MdKeyboardArrowRight size={32} />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
