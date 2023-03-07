import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "From Hello world" });

  const { data: sessionData } = useSession();

  return (
    <>
      {/* <div className="container mx-auto grid h-[calc(100vh-5rem)] w-screen grid-cols-2 gap-2">
        <div className="card rounded-box flex h-full items-center justify-center gap-8 bg-base-300">
          <h1 className="text-center text-6xl">
            <span className="text-primary">Note</span>
            <span className="text-base-content">Down</span>
          </h1>
          <button className="btn-secondary btn">Create Note</button>

          <div className="flex flex-col">
            <h3>Follow me on</h3>
            <ul className="flex flex-row">
              <li>Github</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex w-full flex-col border-opacity-50">
          <div className="card rounded-box grid h-full place-items-center bg-base-300">
            content
          </div>
          <div className="divider">Take Notes in Markdown</div>
          <div className="card rounded-box grid h-full place-items-center bg-base-300">
            content
          </div>
        </div>
      </div> */}
      {sessionData ? (
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
      ) : (
        <div className="hero min-h-screen bg-base-200">
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
