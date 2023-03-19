import { NextPage } from "next";
import { AiTwotoneTag } from "react-icons/ai";
import { SlNotebook } from "react-icons/sl";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import { useAuth } from "~/store/authStore";
import { useTopicContext } from "~/context/topicContext";
import { useNoteContext } from "~/context/noteContext";
import Link from "next/link";

const Profile: NextPage = () => {
  const { data } = useAuth();
  const router = useRouter();
  const { topicsList } = useTopicContext();
  const { notesList } = useNoteContext();

  useEffect(() => {
    data ? "" : void router.push("/auth");
  }, []);

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-65.5px-68px)] w-screen flex-col items-center justify-center  py-6">
      <div className="stats stats-vertical shadow md:stats-horizontal">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="online avatar">
              <div className="w-16 rounded-full">
                <img
                  src={data?.user?.image ?? ""}
                  alt={data?.user?.name ?? ""}
                />
              </div>
            </div>
          </div>
          <div className="stat-value">{data?.user?.name}</div>
          <div className="stat-title">{data?.user?.email}</div>
          <div className="stat-desc text-secondary">
            auth at{" "}
            {moment(`${data?.expires ?? ""}`).format(
              "MMMM D, YYYY [at] h:mm A"
            )}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <SlNotebook className="text-4xl" />
          </div>
          <div className="stat-title">
            <Link href={"/note"}>Total Notes</Link>
          </div>
          <div className="stat-value text-secondary">
            {notesList && notesList.length}
          </div>
          <div className="stat-desc">number of notes created</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <AiTwotoneTag className="text-4xl" />
          </div>
          <div className="stat-title">
            <Link href={"/topic"}>Total Topics</Link>
          </div>
          <div className="stat-value text-primary">
            {topicsList && topicsList.length}
          </div>
          <div className="stat-desc">number of topics created</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
