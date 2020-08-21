import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Note from "./Note";

test("render content", () => {
  const note = {
    title: "First note",
    content: "This is the first note"
  };

  const component = render(<Note note={note} />);

  expect(component.container).toHaveTextContent("First note");
});
