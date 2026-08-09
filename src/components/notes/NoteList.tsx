import type { FC } from "react";
import type { Note } from "../../types/note.type";

interface NoteListProps {
  notes: Note[];
}

const NoteList: FC<NoteListProps> = ({ notes }) => {
  return <div>NoteList</div>;
};

export default NoteList;
