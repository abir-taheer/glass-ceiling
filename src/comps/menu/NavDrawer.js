// @flow
import React from "react";

// RMWC Drawer
import { Drawer,DrawerHeader, DrawerContent } from "@rmwc/drawer";
import '@material/drawer/dist/mdc.drawer.css';

// RMWC List
import {SimpleListItem, CollapsibleList, List} from "@rmwc/list";
import '@material/list/dist/mdc.list.css';
import '@rmwc/list/collapsible-list.css';

// React Router Links for Navigation
import {Link} from "react-router-dom";
import Title from "../../typography/Title";
import Text from "../../typography/Text";

import {AppContext} from "../AppProvider";

type Props = {
	open: boolean,
	toggleDrawer: Function
};

const NavDrawer = (props: Props) => {
	const context = React.useContext(AppContext);

	return (
		<Drawer modal className={["Drawer"]} open={props.open} onClose={() => props.toggleDrawer(false)}>
			<DrawerHeader>

				<Title level={5}>Glass-Ceiling</Title>
				<Text>{context.signedIn ? "Signed In": "Not Signed In"}</Text>

			</DrawerHeader>

			<DrawerContent>
				<List>
					{/*LogIn Button*/}
					<AppContext.Consumer>
						{(context) => {
							return ( ! context.signedIn) ?
								(<Link to="/login" className={["no-decoration"]}>
									<SimpleListItem
										text="Sign In / Sign Up"
										graphic="lock_open"
									/>
								</Link>) :
								null;
						}}
					</AppContext.Consumer>

					<Link to="/" className={["no-decoration"]}>
						<SimpleListItem
							text="Home"
							graphic="home"
						/>
					</Link>

					<CollapsibleList
						handle={
							<SimpleListItem
								text="Game"
								graphic="videogame_asset"
								metaIcon="chevron_right"
							/>
						}
					>
						<Link to="/my-games" className={["no-decoration"]}>
							<SimpleListItem text={"My Games"} graphic={"dashboard"}/>
						</Link>

						<Link to="/create-game" className={["no-decoration"]}>
							<SimpleListItem text={"Create Game"} graphic={"add"}/>
						</Link>

						<Link to="/" className={["no-decoration"]}>
							<SimpleListItem text={"Join Game"} graphic={"how_to_reg"}/>
						</Link>
					</CollapsibleList>

				</List>
			</DrawerContent>
		</Drawer>
	)
};

export default NavDrawer;
