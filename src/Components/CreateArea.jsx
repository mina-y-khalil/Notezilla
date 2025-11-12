import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";


function CreateArea(props) {

  const [isExpanded, setIsExpanded] = useState(false); // State to track if the note area is expanded

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
  function expand() {
    setIsExpanded(true); // Sets the isExpanded state to true when the textarea is clicked
  }

  return (
    <div>
      <form className="create-note"> 
        {isExpanded ? <input value={note.title} onChange={handelChange} name="title" placeholder="Title" /> : null}
        <textarea onClick={expand} value={note.content} onChange={handelChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1 } />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
