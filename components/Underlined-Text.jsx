const UnderlinedText = ({ text = "", customClasses = "" }) => {
	return (
		<h2
			className={`${customClasses} text-3xl tracking-wider border-b-4 pb-2 font-bold border-gray-600`}
		>
			{text}
		</h2>
	);
};

export default UnderlinedText;
