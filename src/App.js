import React, { useState, useEffect, useContext } from "react";
import Notes from "./pages/Notes";
import Note from "./components/Note";
import noteService from "./services/notes";
import loginService from "./services/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { UserContext, UserProvider } from "./context/UserContext";
import { TestContext, TestProvider } from "./context/TestContext";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loginVisible, setLoginVisible] = useState(false);
  // const [
  //   user,
  //   handleLogout,
  //   setUser,
  //   handleLogin,
  //   username,
  //   setUsername,
  //   password,
  //   setPassword,
  //   errorMessage
  // ] = useContext(UserContext);
  const value = useContext(TestContext);

  // useEffect(() => {
  //   noteService.getAll().then(initialNotes => {
  //     setNotes(initialNotes);
  //   });
  // }, []);

  // const padding = {
  //   padding: 5
  // };

  // const mainContent = {
  //   display: "flex",
  //   "flex-direction": "column",
  //   minHeight: "100vh"
  // };

  // const match = useRouteMatch("/notes/:id");
  // const note = match ? notes.find(note => note._id === match.params.id) : null;
  // console.log(TestProvider);
  return (
    <TestProvider value="Hithere">
      <p>{value}</p>
    </TestProvider>

    // <UserProvider>
    //   <div style={mainContent} className="container">
    //     <Navbar bg="dark" variant="dark">
    //       <Navbar.Brand as={Link} to="/">
    //         Note app
    //       </Navbar.Brand>
    //       <Nav className="mr-auto">
    //         <Nav.Link as={Link} style={padding} to="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} style={padding} to="/notes">
    //           Notes
    //         </Nav.Link>
    //       </Nav>
    //       {user && (
    //         <div style={{ display: "flex" }}>
    //           <span>{context.user.name} logged in</span>
    //           <Button variant="danger" onClick={context.handleLogout}>
    //             Log out
    //           </Button>
    //         </div>
    //       )}
    //     </Navbar>
    //     <Switch>
    //       <Route path="/notes/:id">
    //         <Note note={note} />
    //       </Route>
    //       <Route path="/notes">
    //         <div>
    //           <Notes notes={notes} setNotes={setNotes} />
    //         </div>
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>

    //     <div style={{ "margin-top": "auto" }} className="footer">
    //       <i>Note app developed by andesol (fullstackopen)</i>
    //     </div>
    //   </div>
    // </UserProvider>
  );
};

export default App;
