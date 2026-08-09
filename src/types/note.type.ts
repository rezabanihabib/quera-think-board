export type Note = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type CreateNotePayLoad = {
  title: string;
  content: string;
};
