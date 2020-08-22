import React, { useRef, useContext } from "react";
import LoginForm from "../components/LoginForm";
import NoteForm from "../components/NoteForm";
import Togglable from "../components/Togglable";
import { Link } from "react-router-dom";
import noteService from "../services/notes";
import Table from "react-bootstrap/Table";
import { LoginContext } from "../context/LoginContext";
import styled from "styled-components";

const Notes = ({ notes, setNotes }) => {
  const noteFormRef = useRef();

  const addNote = newNote => {
    noteFormRef.current.toggleVisibility();
    noteService
      .create(newNote)
      .then(createdNote => setNotes([...notes, createdNote]));
  };

  const { user } = useContext(LoginContext);

  return (
    <div>
      <h1>Notes</h1>

      {user === null ? (
        <Togglable buttonLabel="Login">
          <LoginForm />
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
