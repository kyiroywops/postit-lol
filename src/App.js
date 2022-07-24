import NoteList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is the first note",
    date: "15/10/2019"
  },
  {
    id: nanoid(),
    text: "This is the second note",
    date: "15/10/2019"
  },
  {
    id: nanoid(),
    text: "This is the third note",
    date: "15/10/2019"
  },
]);
  return <div className="container">
    <NoteList notes={notes} />
  </div>
};

export default App;
