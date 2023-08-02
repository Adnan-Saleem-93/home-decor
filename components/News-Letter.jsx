import Input from "./Input";
import Item from "./Item";
import UnderlinedText from "./Underlined-Text";

import Item1 from "../assets/images/item-1.jpg";

const items = [
	{ text: "Item 1", img: Item1, alt: "item-1" },
	{ text: "Item 1", img: Item1, alt: "item-2" },
	{ text: "Item 3", img: Item1, alt: "item-3" },
	{ text: "Item 4", img: Item1, alt: "item-4" },
	{ text: "Item 5", img: Item1, alt: "item-5" },
	{ text: "Item 6", img: Item1, alt: "item-6" },
];

const NewsLetter = () => {
	return (
		<div className="flex flex-col justify-start w-full">
			<div className="p-8">
				<div className="w-full mb-4">
					<UnderlinedText
						text="News Letter"
						customClasses="!pb-4 !border-b-[2px] !max-w-[max-content] !text-gray-400 !border-gray-400"
					/>
				</div>
				<div>
					<div className="flex flex-col m-8">
						<Input
							type="email"
							placeholder="Your Email Address"
							id="email"
							customClasses="!w-full !bg-gray-300 !p-4 !flex"
						/>
						<button className="text-slate-100 w-full p-4 mt-4 pl-10 text-md bg-gray-800 text-center rounded-full">
							Sign Up
						</button>
					</div>
					<div className="w-full py-8">
						<UnderlinedText
							text="More Items"
							customClasses="!pb-4 !border-b-[2px] !max-w-[max-content] !text-gray-400 !border-gray-400"
						/>
					</div>
					<div className="flex flex-row flex-wrap justify-between items-center">
						{items.map((item, index) => {
							const { img, text, alt } = item;
							return <Item key={index} pic={img} text={text} alt={alt} />;
						})}
					</div>
				</div>
			</div>
			<div className="bg-gray-600 w-full h-full p-10">
				<div className="w-full">
					<UnderlinedText
						text="Follow"
						customClasses="!text-gray-100 !border-gray-100 !border-b-2 !w-[max-content]"
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default NewsLetter;
