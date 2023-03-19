import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdNoteAlt, MdTopic, MdHomeFilled } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const { data: sessionData } = useSession();

  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn-ghost btn-circle btn ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact w-52 bg-base-100 p-2 shadow "
          >
            <li>
              <Link href={"/note"}>
                <MdHomeFilled className="text-xl" />
                Home
              </Link>
            </li>
            <li>
              <Link href={"/note/create"}>
                <MdNoteAlt className="text-xl" />
                Note
              </Link>
            </li>
            <li>
              <Link href={"/topic"}>
                <MdTopic className="text-xl" />
                Topic
              </Link>
            </li>
            {/* <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Stats
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href={"/"} className="btn-ghost btn text-xl normal-case">
          <span className="text-primary">Note</span>
          <span className="text-base-content">Down</span>
        </Link>
      </div>
      <div className="navbar-end">
        {sessionData ? (
          <>
            <button
              className="btn-secondary btn-sm btn mx-4 hidden sm:block"
              onClick={() => void router.push("/note/create")}
            >
              CREATE NOTE
            </button>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <img
                    src={sessionData?.user?.image ?? ""}
                    alt={sessionData?.user?.name ?? ""}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link href={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link href={"/settings"}>Settings</Link>
                </li>
                <li>
                  <a className="text-error" onClick={() => void signOut()}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button
            className="btn-secondary btn-sm btn"
            onClick={() => void signIn()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
