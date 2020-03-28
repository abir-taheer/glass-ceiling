import React from "react";
import GoogleLogin from 'react-google-login';
import backend from "../utils/backend";

const AuthButton = () => {
	const handleLogin = (payload) => {
		const token = payload.tokenId;

		backend.post("/api/private/auth/google", {token})
			.then(data => {
				console.log(data);
			});
	};

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
			buttonText="Login with Google"
			onSuccess={handleLogin}
			onFailure={console.log}
			cookiePolicy={'single_host_origin'}
			/>
	)
};

export default AuthButton;
