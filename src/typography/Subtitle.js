// @flow
import React from "react";
import "./styles/Subtitle.css";

type Props = {
	children: string,
	center: boolean,
	style: Object,
	className: Array | string
};

const Subtitle = (props: Props) => {
	const styles = {
		fontSize: "0.8rem",
		...props.style
	};

	let classesArray = props.className;

	if(! Array.isArray(classesArray) ){
		classesArray = props.className.split(" ");
	}

	const classes = [
		"Subtitle",
		...classesArray
	];

	if(props.center){
		classes.push("text-center");
	}

	return (
		<span style={styles} className={classes.filter(Boolean).join(" ")} >{props.children}</span>
	);
};

Subtitle.defaultProps = {
	children: "",
	center: false,
	style: {},
	className: []
};

export default Subtitle;
