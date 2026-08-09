import { SquarePen, Trash } from "lucide-react";
import type { Note } from "../../types/note.type";
import type { FC } from "react";

interface NoteCardProps {
  note: Note;
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="card card-border bg-base-200 w-96">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-warning">
            <SquarePen />
          </button>
          <button className="btn btn-sm btn-error">
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
