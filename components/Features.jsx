import FeaturePic1 from "../assets/images/features-pic-1.jpg";
import FeaturePic2 from "../assets/images/features-pic-2.jpg";
import FeaturedItem from "./Featured-Item";
import UnderlinedText from "./Underlined-Text";

const Features = () => {
	return (
		<div className="flex flex-col items-start justify-start w-full ">
			<div className="mb-4">
				<UnderlinedText text="Features" />
			</div>
			<FeaturedItem pic={FeaturePic1} title="Luxurious Sofa" />
			<FeaturedItem
				pic={FeaturePic2}
				title="Computer Table"
				flexDirection="flex-row-reverse"
			/>
		</div>
	);
};

export default Features;
