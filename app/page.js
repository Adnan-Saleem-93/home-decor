"use client";

import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/News-Letter";
import { useEffect, useState } from "react";

export default function Home() {
	const [top, setTop] = useState(true);

	useEffect(() => {
		const scrollHandler = () => {
			window.screenY > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<section
				className={`sticky ${
					top && "shadow-md"
				} bg-white top-0 w-full flex flex-row justify-between items-center px-8 pt-8 pb-4`}
			>
				<Navbar />
			</section>

			<section className="w-full">
				<Carousel />
			</section>

			<section className="w-full px-8 pt-12 flex justify-between">
				<article className="w-[64%] flex flex-col">
					<Features />
					<Cards />
				</article>

				<article className="w-[32.5%] flex bg-slate-100">
					<NewsLetter />
				</article>
			</section>
		</main>
	);
}
