import React from "react";
import Togglable from "../components/Togglable";
import LoginForm from "../components/LoginForm";

const Home = ({
  handleLogin,
  username,
  setUsername,
  password,
  setPassword,
  handleLogout,
  user,
  errorMessage
}) => {
  return (
    <div>
      <h1>Homepage</h1>
      {!user && (
        <Togglable buttonLabel="Login">
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            errorMessage={errorMessage}
          />
        </Togglable>
      )}
    </div>
  );
};

export default Home;
