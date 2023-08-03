import { colors } from "@/assets/colors";
import Image from "next/image";
import { TbMessageCircle } from "react-icons/tb";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import ReadMore from "./Read-More";
import ShareSection from "./Share-Section";

const FeaturedItem = ({ pic, flexDirection = "row", title = "" }) => {
	return (
		<div
			className={`flex justify-between ${flexDirection} w-full my-8 border-b-2 pb-10 border-gray-400`}
		>
			<Image
				src={pic}
				alt="features-pic-1"
				className="w-[55%] h-[375px] object-cover"
			/>
			<div className="flex flex-col w-[42.5%] justify-between">
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<ReadMore />

				<div className="flex justify-between items-center text-gray-500 font-bold w-full">
					<div className="flex w-[30%]">
						<TbMessageCircle size={36} style={{ color: colors.gray.main }} />
						<p className="ml-2 text-[22px]">1</p>
					</div>
					<ShareSection />
				</div>
			</div>
		</div>
	);
};

export default FeaturedItem;
