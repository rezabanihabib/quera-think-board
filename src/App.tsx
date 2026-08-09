import Container from "./components/layouts/Container";
import NoteList from "./components/notes/NoteList";
import Header from "./components/ui/Header";
import Loading from "./components/ui/Loading";
import { useEffect, useState } from "react";
import { axiosInstance } from "./lib/axios";
import type { Note } from "./types/note.type";
import type { Response } from "./types/response.type";
import NoteForm from "./components/notes/NoteForm";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isFetchingNotes, setIsFetchingNotes] = useState<boolean>(false);


  useEffect(() => {
    const fetchNotes = async () => {
      setIsFetchingNotes(true);

      try {
        const res = await axiosInstance.get<Response<Note[]>>("/api/notes");
        setNotes(res.data.response ?? []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetchingNotes(false);
      }
    };
    fetchNotes();
  }, []);

  if (isFetchingNotes) return <Loading />;

  return (
    <>
      <Header />
      <main>
        <Container>
          <NoteForm />
          <NoteList
            notes={notes}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
