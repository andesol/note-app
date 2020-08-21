import React, { useRef } from "react";
import LoginForm from "../components/LoginForm";
import NoteForm from "../components/NoteForm";
import Togglable from "../components/Togglable";
import { Link } from "react-router-dom";
import noteService from "../services/notes";
import Table from "react-bootstrap/Table";

const Notes = ({
  notes,
  setNotes,
  user,
  setUser,
  handleLogin,
  handleLogOut,
  username,
  setUsername,
  password,
  setPassword,
  errorMessage
}) => {
  const noteFormRef = useRef();

  const addNote = newNote => {
    noteFormRef.current.toggleVisibility();
    noteService
      .create(newNote)
      .then(createdNote => setNotes([...notes, createdNote]));
  };

  return (
    <div>
      <h1>Notes</h1>

      {user === null ? (
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
      ) : (
        <Togglable buttonLabel="New note" ref={noteFormRef}>
          <NoteForm createNote={addNote} />
        </Togglable>
      )}

      <section>
        <Table striped>
          <tbody>
            {user &&
              notes.map(note => (
                <tr key={note._id}>
                  <td>
                    <Link to={`/notes/${note._id}`}>{note.title}</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Notes;
