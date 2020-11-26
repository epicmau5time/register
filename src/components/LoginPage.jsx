import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginPage({ userState, setUserState }) {
	return (
		<Container>
			<Row className="justify-content-center text-center vh-100 align-items-center">
				<Col xl={4}>
					<Form>
						<Form.Group>
							<Form.Control type="text" className="shadow-none" placeholder="Username" name="username" />
						</Form.Group>
						<Form.Group>
							<Form.Control type="password" className="shadow-none" placeholder="Password" name="password" />
						</Form.Group>
						<Button onClick={setUserState} className="m-auto text-center" type="submit">
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default LoginPage;
