import Input from "./Input";
import Item from "./Item";
import UnderlinedText from "./Underlined-Text";

import Item1 from "../assets/images/item-1.jpg";
import Item2 from "../assets/images/item-2.jpg";
import Item3 from "../assets/images/item-3.jpg";
import Item4 from "../assets/images/item-4.jpg";
import Item5 from "../assets/images/item-5.jpg";
import Item6 from "../assets/images/item-6.jpg";
import FollowSection from "./Follow-Section";

const items = [
	{ text: "Item 1", img: Item1, alt: "item-1" },
	{ text: "Item 1", img: Item2, alt: "item-2" },
	{ text: "Item 3", img: Item3, alt: "item-3" },
	{ text: "Item 4", img: Item4, alt: "item-4" },
	{ text: "Item 5", img: Item5, alt: "item-5" },
	{ text: "Item 6", img: Item6, alt: "item-6" },
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
					{/* Email Section */}
					<div className="flex flex-col m-8 mt-12">
						<Input
							type="email"
							placeholder="Your Email Address"
							id="email"
							customClasses="!w-full !bg-gray-300 focus:!bg-gray-400/50 !p-4 !flex"
						/>
						<button className="text-slate-100 w-full p-4 mt-4 pl-10 text-md dark--gradient hover:bg-gradient-to-b hover:from-[#204b43] hover:to-[#112722] text-center rounded-full">
							Sign Up
						</button>
					</div>

					{/* Items Section */}
					<div className="w-full py-8">
						<UnderlinedText
							text="More Items"
							customClasses="!pb-4 !border-b-[2px] !max-w-[max-content] !text-gray-400 !border-gray-400"
						/>
					</div>
					<div className="flex flex-row flex-wrap justify-between items-center mb-6">
						{items.map((item, index) => {
							const { img, text, alt } = item;
							return <Item key={index} pic={img} text={text} alt={alt} />;
						})}
					</div>
				</div>
			</div>

			{/* Follow Section */}
			<FollowSection />
		</div>
	);
};

export default NewsLetter;
