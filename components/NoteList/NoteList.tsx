// components/NoteList/NoteList.tsx

import { Note } from "../lib/api.ts";
import NoteItem from "../NoteItem/NoteItem";

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
};

export default NoteList;
