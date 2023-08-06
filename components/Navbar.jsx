"use client";

import { colors } from "@/assets/colors";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import Header from "./Header";

const navItems = [
	{ text: "Home" },
	{ text: "About" },
	{ text: "Features" },
	{ text: "Categories" },
	{ text: "Contact" },
];

const Navbar = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
	const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

	const tabsRef = useRef([]);

	useEffect(() => {
		function setTabPosition() {
			const currentTab = tabsRef.current[activeTabIndex];
			setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
			setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
		}

		setTabPosition();
		window.addEventListener("resize", setTabPosition);

		return () => window.removeEventListener("resize", setTabPosition);
	}, [activeTabIndex]);

	return (
		<>
			<Header />
			<article className="flex w-[70%] justify-between items-center">
				<div className="relative mt-1">
					<div className="flex space-x-14">
						{navItems.map((item, idx) => {
							const { text } = item;

							return (
								<button
									key={idx}
									ref={(el) => (tabsRef.current[idx] = el)}
									className={`pb-2 text-[#${colors.dark.main}] tracking-wide text-[16px] font-bold`}
									onClick={() => setActiveTabIndex(idx)}
								>
									{text}
								</button>
							);
						})}
					</div>
					<span
						className="absolute bottom-0 block h-1 bg-gray-500 transition-all duration-300"
						style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
					/>
				</div>

				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500"
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

					<Input
						type="search"
						placeholder="Search"
						id="default-search"
						customClasses="!pl-[34px] placeholder:p-4"
					/>
				</div>
			</article>
		</>
	);
};

export default Navbar;
