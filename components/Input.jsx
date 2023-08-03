const Input = ({
	type = "",
	id = "",
	placeholder = "",
	customClasses = "",
}) => {
	return (
		<input
			type={type}
			id={id}
			className={`${customClasses} block w-full p-2 pl-16 text-md text-gray-900 placeholder:text-center rounded-full bg-gray-100 focus:outline-none focus:bg-gray-300`}
			placeholder={placeholder}
		/>
	);
};

export default Input;
