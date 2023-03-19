import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "~/store/authStore";
import { api } from "~/utils/api";
import { Note } from "@prisma/client";

type NotesStatus = "loading" | "error" | "success";
type NoteContextType = {
  notesList: Note[];
  notesListStatus: NotesStatus;
  createNote: (note: CreateNoteProps) => void;
  deleteNote: (noteId: NoteIdProps) => void;
  getNoteById: (noteId: NoteIdProps) => Note | undefined;
};

type CreateNoteProps = {
  title: string;
  topicId: string;
  content: string;
};

type NoteIdProps = {
  id: string;
};

export const NoteContext = createContext<NoteContextType>(
  {} as NoteContextType
);

export const NoteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notesList, setNotesList] = useState([] as Note[]);
  const [notesListStatus, setNotesListStatus] =
    useState<NotesStatus>("loading");
  const { data } = useAuth();

  const {
    data: notes,
    status: notesStatus,
    refetch: refetchNotes,
  } = api.note.getAll.useQuery(undefined, {
    enabled: data?.user !== undefined,
    onSuccess: (data: Note[]) => {
      // console.log(data);
      setNotesList(data);
      setNotesListStatus("success");
    },
    onError(err) {
      console.error(err.message);
      setNotesListStatus("error");
    },
  });

  const createNoteQuery = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const deleteNoteQuery = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const createNote = (note: CreateNoteProps) =>
    void createNoteQuery.mutate(note);

  const deleteNote = (noteId: NoteIdProps) =>
    void deleteNoteQuery.mutate(noteId);

  const getNoteById = ({ id }: NoteIdProps) => {
    return notesList.find((note: Note) => note.id === id);
  };

  return (
    <NoteContext.Provider
      value={{
        notesList,
        notesListStatus,
        createNote,
        deleteNote,
        getNoteById,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);
