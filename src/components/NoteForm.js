import React, { useState } from "react";
import noteService from "../services/notes";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NoteForm = ({ createNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = e => {
    e.preventDefault();
    const newNote = {
      title,
      content
    };
    createNote(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <div className="formDiv">
      <h2>Create a new note </h2>

      <Form onSubmit={addNote}>
        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            id="new-note-title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Form.Label> Content </Form.Label>
          <Form.Control
            id="new-note-content"
            type="text"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <Button variant="primary" id="new-note-save" type="submit">
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default NoteForm;
