import React from "react";
import Select from "react-select";

function SomeSection(props) {
	const customStyles = {
		control: (base, state) => ({
			...base,
			boxShadow: "none",
			borderColor: state.isFocused ? "#80bdff" : base.borderColor,
			"&:hover": {
				borderColor: "none",
			},
		}),
	};

	return <Select styles={customStyles} options={props.options} name={props.name} id={props.id} />;
}

export default SomeSection;
