import React, {useState} from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ // State to hold the note's title and content
    title: "",
    content: ""
  });

  function handelChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    } );
  }

  function submitNote(event) {
    props.onAdd(note); // Calls the onAdd function passed via props with the current note
    event.preventDefault(); // Prevents page reload on form submission
    setNote({ // Resets the note state to empty strings after submission
      title: "",
      content: ""
    });

  }

  return (
    <div>
      <form>
        <input value={note.title} onChange={handelChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handelChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
