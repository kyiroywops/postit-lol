import NoteList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "Tienes que lavar los platos",
    date: "15/05/2022"
  },
  {
    id: nanoid(),
    text: "Mañana ir al gimnasio",
    date: "18/07/2022"
  },
  {
    id: nanoid(),
    text: "Hacer la compra",
    date: "23/08/2022"
  },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

  }

  return (
  <div className="container">
    <NoteList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
    />
  </div>
  );
};

export default App;
