import { NextPage } from "next";
import { AiTwotoneTag } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";

const Profile: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();

  console.log(sessionData);

  useEffect(() => {
    sessionData ? "" : void router.push("/auth");
  }, []);

  return (
    <div className="container mx-auto flex min-h-screen w-screen flex-col items-center justify-center  py-6">
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <AiTwotoneTag className="text-4xl" />
          </div>
          <div className="stat-title">Total Tags</div>
          <div className="stat-value text-primary">25</div>
          <div className="stat-desc">number of tags created</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <SlNotebook className="text-4xl" />
          </div>
          <div className="stat-title">Total Notes</div>
          <div className="stat-value text-secondary">20</div>
          <div className="stat-desc">number of notes created</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="online avatar">
              <div className="w-16 rounded-full">
                <img
                  src={sessionData?.user?.image ?? ""}
                  alt={sessionData?.user?.name ?? ""}
                />
              </div>
            </div>
          </div>
          <div className="stat-value">{sessionData?.user?.name}</div>
          <div className="stat-title">{sessionData?.user?.email}</div>
          <div className="stat-desc text-secondary">
            auth at{" "}
            {moment(`${sessionData?.expires ?? ""}`).format(
              "MMMM D, YYYY [at] h:mm A"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
