import { colors } from "@/assets/colors";
import { Dancing_Script } from "next/font/google";

const dancingScripts = Dancing_Script({ subsets: ["latin"], weight: "700" });

const Header = () => {
	return (
		<article className="w-[30%]">
			<p
				className={`uppercase font-extrabold tracking-[5px] text-xl text-[#${colors.dark.main}]`}
			>
				Home{" "}
				<span
					className={`capitalize tracking-[0.75rem] text-[26px] font-bold ${dancingScripts.className}`}
				>
					Decor
				</span>
			</p>
		</article>
	);
};

export default Header;
