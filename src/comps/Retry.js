import React from "react";
import {Button} from "@rmwc/button";
import '@material/button/dist/mdc.button.css';
import Title from "../typography/Title";

type Props = {
	onRetry: Function,
	message: string | React.Component
};

const Retry: React.Component  = (props: Props) => {

	return (
		<div style={{paddingTop: "calc(50vh - 72px)"}}>

			{
				typeof props.message === "string" ?
					// If the message is a string, enclose it in a heading
					<Title level={4} center>{props.message}</Title> :

					// Otherwise it is a component and we should render as-is
					props.message
			}

			<div className={["flex-center"]}>
				<Button outlined onClick={props.onRetry}>
					Retry
				</Button>
			</div>

		</div>
	)
};

export default Retry;
