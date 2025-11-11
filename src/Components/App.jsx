import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]); // added a state here because this is going to change over time as we add new notes


function addNote(newNote) {
  setNotes(prevNotes => { // updating the notes array by adding a new note to it and keep the previous notes
    return [...prevNotes, newNote]; // using spread operator to copy all previous notes and adding the new note at the end and this will update the state and re-render the component
  });
}

function deleteNote(id) {
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id; // keep all notes except the one with the matching id
    });
  });
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return <Note 
          key={index} 
          id={index}
          title={noteItem.title} 
          content={noteItem.content} 
          onDelete={deleteNote}
        />;
      })}

      <Footer />
    </div>
  );
}

export default App;
