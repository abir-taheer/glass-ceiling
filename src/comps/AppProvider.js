import React from "react";
import backend from "../utils/backend";
import Loading from "./Loading";
import Retry from "./Retry";
import PropTypes from 'prop-types';


export const AppContext = React.createContext({signedIn: false});

export class AppProvider extends React.Component {

	static propTypes = {
		children: PropTypes.node,
		bypass: PropTypes.bool,
		state: PropTypes.object
	};

	static defaultProps = {
		children: <div/>,
		bypass: false,
		state: {}
	};

	constructor(props) {
		super(props);
		this.updateState = this.updateState.bind(this);

		this.state = {
			status: "loading", // can be "loading",	"loaded", or "error"
			updateState: this.updateState,
			signedIn: false,
		};
	}

	updateState() {
		if(this.props.bypass) {

			return this.setState({
				status: "loaded",
				...this.props.state
			});

		}

		backend.get("/api/private/state")
			.then((res) => {


				this.setState({
					status: "loaded",
					...res.data.payload
				});

			})
			.catch((er) => {

				this.setState({status: "error"})

			});
	}

	componentDidMount() {
		this.updateState();
	}

	render() {

		if(this.state.status !== "loaded"){
			return (
				<div className={"App"}>

					{
						this.state.status === "loading" &&
						<Loading/>
					}

					{
						this.state.status === "error" &&
						<Retry
							onRetry={this.updateState}
							message={"There was an error loading the app."}
						/>
					}
				</div>
			);
		}

		return (
			<AppContext.Provider value={this.state}>
				{this.props.children}
			</AppContext.Provider>
		)

	}

}
