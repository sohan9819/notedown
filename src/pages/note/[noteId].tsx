import React from "react";
import { useRouter } from "next/router";
import { useNoteContext } from "~/context/noteContext";
import { MarkdownPreview } from "~/components";
import moment from "moment";

const NoteDetail = () => {
  const router = useRouter();
  const noteId = router.query.noteId as string;
  const { notesList, notesListStatus, deleteNote, getNoteById } =
    useNoteContext();

  const note = getNoteById({ id: noteId });

  console.log(note);

  return (
    <div className="flex min-h-[calc(100vh-65.5px-68px)] flex-col items-center justify-center gap-4 bg-base-200">
      {note && (
        <>
          <h1 className="text-2xl">Title : {note.title}</h1>
          <h1 className="text-xl">
            Topic :{" "}
            {moment(note?.createdAt.toISOString()).format(
              "MMMM D, YYYY [at] h:mm A"
            )}
          </h1>
          <div className="py-4">
            <MarkdownPreview noteMarkdown={note.content} />
          </div>
        </>
      )}
    </div>
  );
};

export default NoteDetail;
