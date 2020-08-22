import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const LoginForm = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    errorMessage
  } = useContext(LoginContext);
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

export default LoginForm;
