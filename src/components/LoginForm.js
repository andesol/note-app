import React, { useContext } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { UserContext } from "../context/UserContext";

const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  errorMessage
}) => {
  const context = useContext(UserContext);
  return (
    <>
      <h2>Login</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <Form onSubmit={context.handleLogin}>
        <Form.Group>
          <Form.Label> Username </Form.Label>
          <Form.Control
            id="username"
            type="text"
            value={context.username}
            name="username"
            onChange={e => context.setUsername(e.target.value)}
          />
          <Form.Label>Password </Form.Label>

          <Form.Control
            id="password"
            type="password"
            value={context.password}
            name="password"
            onChange={e => context.setPassword(e.target.value)}
          />

          <Button variant="primary" id="login-btn" type="submit">
            Log in
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired
};

export default LoginForm;
