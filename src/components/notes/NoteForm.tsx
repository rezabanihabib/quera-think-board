import { useState } from "react";
import Container from "../layouts/Container";

const NoteForm = () => {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  return (
    <Container>
      <form className="my-10 space-y-3">
        <input
          type="text"
          placeholder="enter your title here"
          className="input w-full"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />

        <textarea
          placeholder="enter your note content here"
          className="input w-full h-20 resize-none"
          value={formValues.content}
          onChange={(e) =>
            setFormValues({ ...formValues, content: e.target.value })
          }
        ></textarea>
        <button type="submit" className="btn btn-primary">
          create new note
        </button>
      </form>
    </Container>
  );
};

export default NoteForm;
