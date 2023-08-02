import { FaFacebookF, FaTwitter } from "react-icons/fa";

const ShareSection = () => {
	return (
		<div className="flex justify-between text-[20px] text-gray-500 font-bold w-[50%]">
			<button>Share</button>
			<button>
				<FaFacebookF />
			</button>
			<button>
				<FaTwitter />
			</button>
		</div>
	);
};

export default ShareSection;
