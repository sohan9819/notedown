import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { AppTheme } from "~/utils/themeStore";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "From Hello world" });
  const { data: sessionData, status: sessionStatus } = useSession();

  return (
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
  );
};

export default Home;
