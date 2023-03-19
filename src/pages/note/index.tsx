import React, { useEffect } from "react";
import Link from "next/link";
import { useTopicContext } from "~/context/topicContext";
import { useNoteContext } from "~/context/noteContext";
import { Note, Topic } from "@prisma/client";
import { useAuth } from "~/store/authStore";
import { useRouter } from "next/router";

const NotesPage = () => {
  const { topicsList, topicsListStatus } = useTopicContext();
  const { notesList, notesListStatus, deleteNote } = useNoteContext();
  const { data, status } = useAuth();

  const router = useRouter();

  useEffect(() => {
    status === "unauthenticated" || status === "loading"
      ? router.push("/")
      : "";
  }, [status]);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-65.5px-68px)] w-screen flex-col items-center justify-start gap-8 py-6">
      {status === "loading" && (
        <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
          <button className="btn-xl loading btn">loading</button>
        </div>
      )}
      {status === "authenticated" && (
        <>
          <div className="flex flex-row items-center justify-center">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input-bordered input"
              />
            </div>
          </div>
          <div className="flex max-w-xl flex-wrap items-center justify-center gap-2 ">
            {topicsListStatus === "loading" && (
              <option disabled selected>
                Loading Your Topics ...
              </option>
            )}
            {topicsList &&
              topicsList?.map((topic: Topic, index: number) => {
                return (
                  <button className="btn" key={index} value={topic.id}>
                    {topic.title}
                  </button>
                );
              })}
          </div>
          <div className="container mx-auto flex min-h-full w-screen flex-wrap items-center justify-center gap-2">
            {notesListStatus === "loading" && (
              <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
                <button className="btn-xl loading btn">loading</button>
              </div>
            )}
            {notesList &&
              notesList?.map((note: Note, index: number) => {
                return (
                  <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                    <div className="card-body">
                      <h2 className="card-title">{note.title}</h2>
                      <p>
                        Topic :{" "}
                        {topicsList &&
                          topicsList?.map((topic: Topic) => {
                            return topic.id == note.topicId ? topic.title : "";
                          })}
                      </p>
                      <div className="card-actions justify-end">
                        <button
                          className="btn-error btn"
                          onClick={() => void deleteNote({ id: note.id })}
                        >
                          Delete Note
                        </button>
                        <Link
                          href={`/note/${note.id}`}
                          className="btn-primary btn"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default NotesPage;
