import { LoaderCircle, SquarePen, Trash } from "lucide-react";
import type { Note } from "../../types/note.type";
import type { FC } from "react";

interface NoteCardProps {
  note: Note;
  deletingId: string | null;
  handleDeleteNote: (id: string) => Promise<void>;
}

const NoteCard: FC<NoteCardProps> = ({
  note,
  deletingId,
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
            onClick={() => handleDeleteNote(note.id)}
            className="btn btn-sm btn-error"
            disabled={deletingId === note.id}
          >
            {deletingId === note.id ? (
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
