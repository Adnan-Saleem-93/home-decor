import Image from "next/image";
import CarouselBg from "../assets/images/carousel-bg.jpg";

const Carousel = () => {
	return (
		<div className="">
			<Image
				src={CarouselBg}
				alt="carousel-bg"
				className="w-full h-[375px] object-cover"
			/>
			{/* <div className="absolute">
                <button></button>
            </div> */}
		</div>
	);
};

export default Carousel;
