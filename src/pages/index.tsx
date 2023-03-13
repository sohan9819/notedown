import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { AppTheme } from "~/utils/themeStore";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "From Hello world" });

  const { data: sessionData, status: sessionStatus } = useSession();
  const { data: notes, status: notesStatus } = api.note.getAll.useQuery(
    undefined,
    {
      enabled: sessionData?.user !== undefined,
    }
  );

  return (
    <>
      {sessionStatus === "loading" && (
        <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
          <button className="btn-xl loading btn">loading</button>
        </div>
      )}
      {sessionStatus === "unauthenticated" && (
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
      {sessionStatus === "authenticated" && (
        <div className="container mx-auto flex min-h-screen w-screen flex-col items-center justify-evenly gap-4 py-6">
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
            <button className="btn">#tag1</button>
            <button className="btn">#tag2</button>
            <button className="btn">#tag3</button>
            <button className="btn">#tag4</button>
            <button className="btn">#tag5</button>
            <button className="btn">#tag6</button>
            <button className="btn">#tag7</button>
            <button className="btn">#tag8</button>
            <button className="btn">#tag9</button>
            <button className="btn">#tag10</button>
          </div>
          <div className="container flex min-h-full w-screen flex-wrap items-center justify-evenly gap-2 ">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Note Title</h2>
                <p>
                  Some note describtion. If a dog chews shoes whose shoes does
                  he choose...
                </p>
                <div className="card-actions justify-end">
                  <button className="btn-primary btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
