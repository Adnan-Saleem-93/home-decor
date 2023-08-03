import Cards from "@/components/Cards";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/News-Letter";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start">
			<section className="w-full px-8 pt-8 pb-4">
				<Header />
			</section>
			<section className="w-[65%] px-8 pt-4 pb-10">
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
