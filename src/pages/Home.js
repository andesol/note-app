import React, { useContext } from "react";
import Togglable from "../components/Togglable";
import LoginForm from "../components/LoginForm";
import { LoginContext } from "../context/LoginContext";
import styled from "styled-components";

const Home = () => {
  const { user } = useContext(LoginContext);

  return (
    <div>
      <h1>Homepage</h1>
      {!user && (
        <Togglable buttonLabel="Login">
          <LoginForm />
        </Togglable>
      )}
    </div>
  );
};

export default Home;
