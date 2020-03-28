// @flow
import React from "react";
import type {Node} from 'react';

import {ThemeProvider as Provider} from "@rmwc/theme";
import defaultTheme from "./default";

type PropTypes = {
	children: Node
};

export const ThemeProvider = (props: PropTypes) => {
	return (
		<Provider options={defaultTheme}>
			{props.children}
		</Provider>
	)
};

export default ThemeProvider;
