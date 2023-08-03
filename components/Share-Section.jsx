import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ShareSection = () => {
	return (
		<div className="flex justify-between text-[20px] text-gray-500 font-bold w-[50%]">
			<button className="hover:text-gray-700">Share</button>
			<button className="hover:text-gray-700">
				<FaFacebookF />
			</button>
			<button className="hover:text-gray-700">
				<FaTwitter />
			</button>
		</div>
	);
};

export default ShareSection;
