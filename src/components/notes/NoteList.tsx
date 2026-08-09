import { useState, type FC } from "react";
import type { Note } from "../../types/note.type";
import NoteCard from "./NoteCard";
import Container from "../layouts/Container";
import { axiosInstance } from "../../lib/axios";

interface NoteListProps {
  notes: Note[];
  onEditNote: (note: Note) => void;
}

const NoteList: FC<NoteListProps> = ({ notes, onEditNote }) => {
  const [notesData, setNotesData] = useState<Note[]>(notes);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDeleteNote = async (id: string) => {
    setDeletingId(id);
    try {
      await axiosInstance.delete(`api/notes/${id}`);
      setNotesData((prev) => prev.filter((note) => note.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section>
      <Container className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        {notesData.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEditNote={onEditNote}
            deletingId={deletingId}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </Container>
    </section>
  );
};

export default NoteList;
