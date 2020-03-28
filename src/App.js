// @flow
import React from 'react';
import './App.css';
import {AppProvider} from "./comps/AppProvider";
import AppBar from "./comps/menu/AppBar";
import NavDrawer from "./comps/menu/NavDrawer";
import Content from "./comps/Content";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

function App() {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	const toggleDrawer = (open: boolean = ! drawerOpen) => setDrawerOpen(open);


	return (
		<ThemeProvider>
			<AppProvider>
				<BrowserRouter>

					<div className="App">

						<NavDrawer open={drawerOpen} toggleDrawer={toggleDrawer}/>

						<AppBar toggleDrawer={toggleDrawer}/>

						<Content/>
					</div>

				</BrowserRouter>
			</AppProvider>
		</ThemeProvider>
	);
}

export default App;
