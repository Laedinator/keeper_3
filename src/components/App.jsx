import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Note title",
      content: "Note content",
    },
    {
      title: "Note title 1",
      content: "Note content 1",
    },
    {
      title: "Note title 2",
      content: "Note content 2",
    },
  ]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    //filter the submitted ID and return everything except the object with the ID
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
