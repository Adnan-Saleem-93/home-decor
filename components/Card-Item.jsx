import Image from "next/image";
import ReadMore from "./Read-More";
import ShareSection from "./Share-Section";

const CardItem = ({ pic = null, alt = "", title = "" }) => {
	return (
		<div className="border border-gray-600 p-10 rounded-[1rem] w-[47.5%]">
			<Image src={pic} alt={alt} className="w-full h-[200px] object-cover" />
			<h2 className="text-[20px] mt-6 font-bold">{title}</h2>
			<p className="text-gray-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor
			</p>

			<div className="flex justify-between mt-4">
				<ReadMore />
				<ShareSection />
			</div>
		</div>
	);
};

export default CardItem;
