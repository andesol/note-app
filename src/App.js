import React, { useState, useEffect } from "react";
import Notes from "./pages/Notes";
import Note from "./components/Note";
import noteService from "./services/notes";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then(initialNotes => {
      setNotes(initialNotes);
    });
  }, []);

  const mainContent = {
    display: "flex",
    "flex-direction": "column",
    minHeight: "100vh"
  };

  const match = useRouteMatch("/notes/:id");
  const note = match ? notes.find(note => note._id === match.params.id) : null;
  return (
    <div style={mainContent} className="container">
      <Header />
      <Switch>
        <Route path="/notes/:id">
          <Note note={note} />
        </Route>
        <Route path="/notes">
          <div>
            <Notes notes={notes} setNotes={setNotes} />
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <div style={{ "margin-top": "auto" }} className="footer">
        <i>Note app developed by andesol</i>
      </div>
    </div>
  );
};

export default App;
