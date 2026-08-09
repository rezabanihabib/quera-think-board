import { useState, type FC } from "react";
import Container from "../layouts/Container";
import { axiosInstance } from "../../lib/axios";
import type { Note } from "../../types/note.type";
import { LoaderCircle } from "lucide-react";

interface NoteFormProps {
  note?: Note | null;
  onSuccess?: (note: Note) => void;
}

const NoteForm: FC<NoteFormProps> = ({ note, onSuccess }) => {
  const [formValues, setFormValues] = useState({
    title: note?.title ?? "",
    content: note?.content ?? "",
  });
  const [isSubmitingForm, setIsSubmitingForm] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitingForm(true);

    try {
      let savedNote: Note;
      if (note) {
        const res = await axiosInstance.put(`api/notes/${note.id}`, formValues);
        savedNote = res.data.response;
      } else {
        const res = await axiosInstance.post("api/notes", formValues);
        savedNote = res.data.response;
      }

      setFormValues({ title: "", content: "" });

      onSuccess?.(savedNote);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitingForm(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="my-10 space-y-3">
        <input
          type="text"
          placeholder="enter your title here"
          className="input w-full"
          value={formValues.title}
          disabled={isSubmitingForm}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />

        <textarea
          placeholder="enter your note content here"
          className="input w-full h-20 resize-none"
          value={formValues.content}
          disabled={isSubmitingForm}
          onChange={(e) =>
            setFormValues({ ...formValues, content: e.target.value })
          }
        ></textarea>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitingForm}
        >
          {isSubmitingForm ? (
            <LoaderCircle className="animate-spin" />
          ) : note ? (
            "update note"
          ) : (
            "create new note"
          )}
        </button>
      </form>
    </Container>
  );
};

export default NoteForm;
