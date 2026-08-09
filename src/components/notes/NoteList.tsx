import type { FC } from "react";
import type { Note } from "../../types/note.type";
import { Container } from "lucide-react";
import NoteCard from "./NoteCard";

interface NoteListProps {
  notes: Note[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return (
    <section>
      <Container className="my-5">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </Container>
    </section>
  );
};

export default NoteList;
