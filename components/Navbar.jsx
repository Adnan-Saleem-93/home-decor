import { colors } from "@/assets/colors";
import { MdOutlineSearch } from "react-icons/md";
import Input from "./Input";

const navItems = [
	{ name: "home", text: "Home" },
	{ name: "about", text: "About" },
	{ name: "features", text: "Features" },
	{ name: "categories", text: "Categories" },
	{ name: "contact", text: "Contact" },
];
const Navbar = () => {
	return (
		<div className="flex w-full justify-between items-center">
			{navItems.map((item, index) => {
				const { name, text } = item;
				return (
					<p
						key={index}
						className={`text-[#${colors.dark.main}] tracking-wide text-[13px] font-bold`}
						id={name}
					>
						{text}
					</p>
				);
			})}
			<label
				for="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only "
			>
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						className="w-4 h-4 text-gray-500 "
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>

				<Input type="search" placeholder="Search" id="default-search" />
			</div>
		</div>
	);
};

export default Navbar;
