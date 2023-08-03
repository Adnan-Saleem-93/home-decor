import UnderlinedText from "./Underlined-Text";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaPinterestP,
} from "react-icons/fa";

const followLinks = [
	{ Icon: FaFacebookF, link: "www.facebook.com" },
	{ Icon: FaInstagram, link: "www.instagram.com" },
	{ Icon: FaPinterestP, link: "www.pinterest.com" },
	{ Icon: FaTwitter, link: "www.twitter.com" },
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
					const { Icon, link } = item;
					return (
						<a key={index} target="_blank" href={link} className="group">
							<Icon className="rounded-full p-4 h-16 w-16 bg-gray-100 text-[#326a5c] group-hover:text-[#203933]" />
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default FollowSection;
