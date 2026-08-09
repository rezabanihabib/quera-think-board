import Container from "./components/layouts/Container";
import NoteList from "./components/notes/NoteList";
import Header from "./components/ui/Header";
import Loading from "./components/ui/Loading";
import { useEffect, useState } from "react";
import { axiosInstance } from "./lib/axios";
import type { Note } from "./types/note.type";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isFetchingNotes, setIsFetchingNotes] = useState<boolean>(false);
  return (
    <>
      <Header />
      <main>
        <Container>
          <NoteList notes={notes} />
          <Loading />
        </Container>
      </main>
    </>
  );
}

export default App;
