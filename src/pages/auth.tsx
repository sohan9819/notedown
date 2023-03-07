import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Auth: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  useEffect(() => {
    sessionData ? void router.push("/profile") : void router.push("/auth");
  }, [sessionData]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="my-4 text-5xl font-bold">Login Now !!!</h1>
          <button className="btn-primary btn" onClick={() => void signIn()}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
