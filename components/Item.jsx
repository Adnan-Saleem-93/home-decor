import Image from "next/image";

const Item = ({ text = "", pic = "", alt = "" }) => {
	return (
		<div className="flex flex-col items-center mx-2 my-4">
			<Image src={pic} alt={alt} className="rounded-full h-44 w-44 mb-3" />
			<h2 className="text-gray-400 font-bold">{text}</h2>
		</div>
	);
};

export default Item;
