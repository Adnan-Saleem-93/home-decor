import { colors } from "@/assets/colors";
import React from "react";

const Header = () => {
	return (
		<div>
			<p
				className={`uppercase font-extrabold tracking-[5px] text-xl text-[#${colors.dark.main}]`}
			>
				Home Decor
			</p>
		</div>
	);
};

export default Header;
