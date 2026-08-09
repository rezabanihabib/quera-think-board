import type { Note } from "../../types/note.type";
import type { FC } from "react";

interface NoteCardProps {
  note: Note;
}

const NoteCard: FC<NoteCardProps> = ({ note }) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p>{note.content}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
