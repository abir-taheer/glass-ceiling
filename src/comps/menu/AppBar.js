import React from "react";

import {SimpleTopAppBar, TopAppBarFixedAdjust} from "@rmwc/top-app-bar";
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import Title from "../../typography/Title";

type Props = {
	toggleDrawer: Function
};

const AppBar = (props: Props) => {

	return (
		<div>
			<SimpleTopAppBar
				title={<Title level={5} theme={"onPrimary"}>Glass-Ceiling</Title>}
				navigationIcon
				onNav={() => props.toggleDrawer()}

				actionItems={[]}
			/>
			<TopAppBarFixedAdjust />
		</div>
	)
};

export default AppBar;
