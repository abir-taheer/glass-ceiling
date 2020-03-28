// @flow
import React from "react";
import "./styles/Text.css";

type Props = {
	children: string,
	center: boolean,
	style: Object,
	className: Array<string> | string
};

const Text = (props: Props) => {
	const styles = {
		...props.style
	};

	let classesArray;

	if( typeof props.className === "string" ){
		classesArray = props.className.split(" ");
	} else {
		classesArray = props.className;
	}

	const classes = [
		"Text",
		...classesArray
	];

	if(props.center){
		classes.push("text-center");
	}

	return (
		<p style={styles} className={classes.filter(Boolean).join(" ")} >{props.children}</p>
	);
};

Text.defaultProps = {
	children: "",
	center: false,
	style: {},
	className: []
};

export default Text;
