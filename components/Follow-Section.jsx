import UnderlinedText from "./Underlined-Text";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaPinterestP,
} from "react-icons/fa";

const followLinks = [
	{
		Icon: FaFacebookF,
		link: "www.facebook.com",
		customClasses: "group-hover:bg-[#4267B2] group-hover:text-white",
	},
	{
		Icon: FaInstagram,
		link: "www.instagram.com",
		customClasses:
			"group-hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:text-white",
	},
	{
		Icon: FaPinterestP,
		link: "www.pinterest.com",
		customClasses: "group-hover:bg-[#E60023] group-hover:text-white",
	},
	{
		Icon: FaTwitter,
		link: "www.twitter.com",
		customClasses: "group-hover:bg-blue-500 group-hover:text-white",
	},
];

const FollowSection = () => {
	return (
		<div className="dark--gradient w-full h-full p-10">
			<div className="w-full">
				<UnderlinedText
					text="Follow"
					customClasses="!text-gray-100 !mb-6 !border-gray-100 !border-b-2 !w-[max-content]"
				/>
			</div>

			<div className="flex justify-between items-center w-full my-10">
				{followLinks.map((item, index) => {
					const { Icon, link, customClasses } = item;
					return (
						<a key={index} target="_blank" href={link} className="group">
							<Icon
								className={`rounded-full bg-white text-gray-800 p-4 h-16 w-16 ${customClasses}`}
							/>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default FollowSection;
