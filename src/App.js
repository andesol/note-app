import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Notes from "./pages/Notes";
import Note from "./components/Note";
import noteService from "./services/notes";
import loginService from "./services/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch
} from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);

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
      console.log("NNNNNNNNOOOOOO");
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

  const padding = {
    padding: 5
  };

  const mainContent = {
    display: "flex",
    "flex-direction": "column",
    minHeight: "100vh"
  };

  const match = useRouteMatch("/notes/:id");
  const note = match ? notes.find(note => note._id === match.params.id) : null;

  return (
    <div style={mainContent} className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          Note app
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} style={padding} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} style={padding} to="/notes">
            Notes
          </Nav.Link>
        </Nav>
        {user && (
          <div style={{ display: "flex" }}>
            <span>{user.name} logged in</span>
            <Button variant="danger" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        )}
      </Navbar>
      <Switch>
        <Route path="/notes/:id">
          <Note note={note} />
        </Route>
        <Route path="/notes">
          <div>
            <Notes
              notes={notes}
              setNotes={setNotes}
              user={user}
              setUser={setUser}
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              errorMessage={errorMessage}
            />
          </div>
        </Route>
        <Route path="/">
          <Home
            handleLogin={handleLogin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleLogout={handleLogout}
            user={user}
            errorMessage={errorMessage}
          />
        </Route>
      </Switch>

      <div style={{ "margin-top": "auto" }} className="footer">
        <i>Note app developed by andesol (fullstackopen)</i>
      </div>
    </div>
  );
};

export default App;
