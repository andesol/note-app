import React, { useState, useEffect, useHistory, createContext } from "react";
import loginService from "../services/login";
import noteService from "../services/notes";

export const UserContext = createContext("Hello");

export const UserProvider = props => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  let history = useHistory();
  const handleLogin = async e => {
    e.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      noteService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
      history.push("/");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedNoteappUser");
    setUser(null);
    history.push("/");
  };

  // TODO: useMemo
  const value = {
    user,
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleLogout
  };

  return (
    <UserContext.Provider value={"Hello2"}>
      {props.children}
    </UserContext.Provider>
  );
};
