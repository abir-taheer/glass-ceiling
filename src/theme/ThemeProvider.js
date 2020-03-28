// @flow
import React from "react";
import {ThemeProvider as Provider} from "@rmwc/theme";
import defaultTheme from "./default";

type PropTypes = {
	children: React.ReactNode
};

export const ThemeProvider = (props: PropTypes) => {
	return (
		<Provider options={defaultTheme}>
			{props.children}
		</Provider>
	)
};

export default ThemeProvider;
