import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { AppTheme } from "~/utils/themeStore";
import { useEffect } from "react";
import { useAuth } from "~/store/authStore";
import { useTopicContext } from "~/context/topicContext";
import { useNoteContext } from "~/context/noteContext";
import { Note, Topic } from "@prisma/client";
import Link from "next/link";

const Home: NextPage = () => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const { setAuth, data, status } = useAuth();

  const { topics, topicsStatus } = useTopicContext();
  const { notes, notesStatus, deleteNote } = useNoteContext();

  useEffect(() => {
    // console.log({
    //   sessionData,
    //   sessionStatus,
    // });
    if (sessionData !== undefined) {
      setAuth({ data: sessionData, status: sessionStatus });
    }
  }, [sessionStatus]);

  useEffect(() => {
    console.log(notes);
  }, [notesStatus]);

  return (
    <>
      {status === "loading" && (
        <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
          <button className="btn-xl loading btn">loading</button>
        </div>
      )}
      {status === "unauthenticated" && (
        <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                <span className="text-primary">Note</span>
                <span className="text-base-content">Down</span>
              </h1>
              <p className="py-6">
                A free opensource note taking app made with love and t3 stack.It
                also uses Nextjs , Trpc and NextAuth for authnetication. Using{" "}
                <b>
                  <span className="text-primary">Note</span>
                  <span className="text-base-content">Down</span>
                </b>{" "}
                can make notes by using markdowns. Start using by creating an
                account.
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div>
      )}
      {status === "authenticated" && (
        <div className="container mx-auto flex min-h-screen w-screen flex-col items-center justify-start gap-8 py-6">
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
            {topicsStatus === "loading" && (
              <option disabled selected>
                Loading Your Topics ...
              </option>
            )}
            {topics?.map((topic: Topic, index: number) => {
              return (
                <button className="btn" key={index} value={topic.id}>
                  {topic.title}
                </button>
              );
            })}
          </div>
          <div className="container flex min-h-full w-screen flex-wrap items-center justify-evenly gap-2 ">
            {notesStatus === "loading" && (
              <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
                <button className="btn-xl loading btn">loading</button>
              </div>
            )}
            {notes?.map((note: Note, index: number) => {
              return (
                <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                  <div className="card-body">
                    <h2 className="card-title">{note.title}</h2>
                    <p>
                      Topic :{" "}
                      {topics?.map((topic: Topic) => {
                        return topic.id == note.topicId ? topic.title : "";
                      })}
                    </p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn-error btn"
                        onClick={() => void deleteNote.mutate({ id: note.id })}
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
        </div>
      )}
    </>
  );
};

export default Home;
