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
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

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

  const handleFormSuccess = (savedNote: Note) => {
    setNotes((prev) => {
      const exists = prev.some((n) => n.id === savedNote.id);
      if (exists) {
        return prev.map((n) => (n.id === savedNote.id ? savedNote : n));
      }
      return [savedNote, ...prev];
    });
    setSelectedNote(null);
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  if (isFetchingNotes) return <Loading />;

  return (
    <>
      <Header />
      <main>
        <Container>
          <NoteForm
            key={selectedNote?.id ?? "new"}
            note={selectedNote}
            onSuccess={handleFormSuccess}
          />
          <NoteList
            notes={notes}
            onEditNote={(note) => setSelectedNote(note)}
            onDeleteNote={handleDeleteNote}
          />
        </Container>
      </main>
    </>
  );
}

export default App;
