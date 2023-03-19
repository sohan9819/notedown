import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useAuth } from "~/store/authStore";
import { useTopicContext } from "~/context/topicContext";
import { useNoteContext } from "~/context/noteContext";
import { Note, Topic } from "@prisma/client";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: sessionData, status: sessionStatus } = useSession();
  const { data, status, setStatus, setData } = useAuth();

  const { topicsList } = useTopicContext();
  const { notesList } = useNoteContext();

  const router = useRouter();

  useEffect(() => {
    setData(sessionData);
    setStatus(sessionStatus);
  }, [sessionStatus, sessionData]);

  useEffect(() => {
    status === "authenticated" ? router.push("/note") : "";
  }, [status]);

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
    </>
  );
};

export default Home;
