import { LoaderCircle, SquarePen, Trash } from "lucide-react";
import type { Note } from "../../types/note.type";
import type { FC } from "react";

interface NoteCardProps {
  note: Note;
  isDeletingNote: boolean;
  handleDeleteNote;
}

const NoteCard: FC<NoteCardProps> = ({
  note,
  isDeleteingNote,
  handleDeleteNote,
}) => {
  return (
    <div className="card card-border bg-base-300">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-warning">
            <SquarePen />
          </button>
          <button
            onClick={() => handleDeleteNote(note)}
            className="btn btn-sm btn-error"
          >
            {isDeleteingNote ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Trash />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
