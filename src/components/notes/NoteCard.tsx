import type { Note } from "../../types/note.type";
import type { FC } from "react";

interface NoteCardProps {
  note: Note;
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return <div>NoteCard</div>;
};

export default NoteCard;
