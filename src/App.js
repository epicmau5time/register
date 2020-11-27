import React from "react";
import MainContainer from "./components/MainContainer";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [userState, setUserState] = React.useState(false);
	const [state, setState] = React.useState({
		animation: "push",
		direction: "left",
		dimmed: false,
		visible: true,
	});

	const loginUser = (e) => {
		e.preventDefault();
		setUserState(true);
	};

	return userState ? (
		<MainContainer>
			<h3>Test</h3>
		</MainContainer>
	) : (
		<LoginPage userState={userState} setUserState={loginUser} />
	);
}

export default App;
