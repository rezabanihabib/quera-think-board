import type { FC } from "react";
import type { Note } from "../../types/note.type";
import NoteCard from "./NoteCard";
import Container from "../layouts/Container";

interface NoteListProps {
  notes: Note[];
  isDeleteingNote: boolean;
  handleDeleteNote;
}

const NoteList: FC<NoteListProps> = ({
  notes,
  isDeleteingNote,
  handleDeleteNote,
}) => {
  return (
    <section>
      <Container className="my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            isDeletingNote={isDeleteingNote}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </Container>
    </section>
  );
};

export default NoteList;
