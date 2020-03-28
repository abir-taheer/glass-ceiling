// @flow
import React from "react";
import Helmet from "react-helmet";
import {Switch, Route, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import {PUBLIC_URL} from "../constants";

const Content = () => {
	const location = useLocation();

	return (
		<div>
			{/*(Mostly) Constant Open Graph Properties*/}
			<Helmet>
				<meta property="og:url" content={PUBLIC_URL + location.pathname}/>
				<meta property="og:site_name" content={"Glass-Ceiling"}/>
				<meta property="og:type" content={"website"}/>
				<meta property="og:image" content={PUBLIC_URL + "/logo512.png"}/>
				<title>Glass-Ceiling</title>
			</Helmet>

			<Switch>
				<Route path={"/"} component={Home} exact/>
			</Switch>

		</div>
	)
};


export default Content;
