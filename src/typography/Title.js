// @flow
import React from "react";
import "./styles/Title.css";

type Props = {
	children: string,
	center: boolean,
	style: Object,
	className: string | Array,
	level: number
};

const Title = (props: Props) => {

	const styles = {
		...props.style
	};

	const level = (props.level > 0 && props.level < 7) ? props.level : 1;

	const fontSize = `Title-${level}`;

	let classesArray = props.className;

	if(! Array.isArray(classesArray) ){
		classesArray = props.className.split(" ");
	}

	let classes = [
		fontSize,
		...classesArray
	];

	if(props.center){
		classes.push("text-center");
	}

	return (
		<h1 style={styles} className={classes.filter(Boolean).join(" ")}>{props.children}</h1>
	);
};

Title.defaultProps = {
	children: "",
	center: false,
	style: {},
	className: "",
	level: 1
};

export default Title;
