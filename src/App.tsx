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
  // ----------------- DELETE ----------------- //
  const [selectedNote, setSelectedNote] = useState<Note>();
  const [isDeleteingNote, setIsDeleteingNote] = useState<boolean>(false);

  const handleDeleteNote = async (note: Note) => {
    setSelectedNote(note);
    setIsDeleteingNote(true);
    try {
      await axiosInstance.delete(`api/notes/${note.id}`);
      setNotes(notes.filter((n) => n.id !== note.id));
    } catch (error) {
      console.log(error);
    } finally {
      setIsDeleteingNote(false);
      setSelectedNote(undefined);
    }
  };

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
            isDeleteingNote={isDeleteingNote}
            handleDeleteNote={handleDeleteNote}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
