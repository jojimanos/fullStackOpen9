import { useState, useEffect } from "react";
import "./App.css";
import { getAllEntries } from "./services/services";
import { DiaryEntry } from "./types/types";
import Entry from "./components/Entry";
import EntryForm from "./components/EntryForm";

function App() {
  const [notes, setNotes] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    getAllEntries().then((data) => setNotes(data));
    console.log(notes);
  }, []);

  return (
    <div>
      <EntryForm />
      <h2>Notes</h2>
      {notes.map((n, i) => (
        <Entry
          key={i}
          id={n.id}
          date={n.date}
          weather={n.weather}
          visibility={n.visibility}
        />
      ))}
    </div>
  );
}

export default App;
