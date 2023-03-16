import { createContext, useEffect, useReducer, useContext } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";
import { useAuth } from "~/store/authStore";
import { api } from "~/utils/api";

export const NoteContext = createContext();

export const NoteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useAuth();
  const {
    data: notes,
    status: notesStatus,
    refetch: refetchNotes,
  } = api.note.getAll.useQuery(undefined, {
    enabled: data?.user !== undefined,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const createNote = api.note.create.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const deleteNote = api.note.delete.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  const getNoteById = api.note.getById.useMutation({
    onSuccess: () => {
      void refetchNotes();
    },
  });

  return (
    <NoteContext.Provider
      value={{ notes, notesStatus, createNote, deleteNote, getNoteById }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => useContext(NoteContext);
