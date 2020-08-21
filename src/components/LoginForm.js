import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const LoginForm = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  errorMessage
}) => {
  return (
    <>
      <h2>Login</h2>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label> Username </Form.Label>
          <Form.Control
            id="username"
            type="text"
            value={username}
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
          <Form.Label>Password </Form.Label>

          <Form.Control
            id="password"
            type="password"
            value={password}
            name="password"
            onChange={e => setPassword(e.target.value)}
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
