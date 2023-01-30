import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;


    //same as below but using the spread operator.
setNote((prevNote) => {
  return {
    ...prevNote,
    [name]: value
  }
} )

    /* more complicated and bloated code. Use spread operator
    if (name === "title") {
      setNote((prevNote) => {
        return { title: value, content: prevNote.content };
      });
    } else if (name === "content") {
      setNote((prevNote) => {
        return { title: prevNote.title, content: value };
      });
    }*/
  }
  function emptyNote(event) {
    setNote((prevNote) => {
      return { title: "", content: "" };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button
          type="button"
          onClick={() => {
            props.onAdd(note);
            emptyNote();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
