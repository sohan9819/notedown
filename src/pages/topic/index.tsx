import React, { useEffect } from "react";
import { useTopicContext } from "~/context/topicContext";
import { api } from "~/utils/api";
import { useAuth } from "~/store/authStore";
import { error } from "console";
import { IoMdTrash } from "react-icons/io";
import { Topic } from "@prisma/client";
import moment from "moment";

const TopicPage = () => {
  const { data } = useAuth();
  const { topics, topicsStatus, createTopic, deleteTopic } = useTopicContext();

  const addTopicHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title: string = e.target.title.value.toUpperCase();
    if (title !== "") {
      // console.log("Adding a topic");
      createTopic.mutate({
        title,
      });
    }
    e.target.reset();
  };

  return (
    <div className="flex min-h-[calc(100vh-65.5px-68px)] flex-col items-center justify-center gap-4 bg-base-200">
      <h1 className="w-full text-center ">Add New Topic</h1>
      <form
        className="flex  items-center justify-center gap-1"
        onSubmit={addTopicHandler}
      >
        <input
          name="title"
          type="text"
          placeholder="Type here"
          className="input-bordered input-primary input w-full max-w-xs uppercase"
        />
        <button className="btn-primary btn">Add Topic</button>
      </form>
      <h1>Your Topics</h1>
      <div className="flex max-w-3xl flex-wrap items-center justify-center gap-2 ">
        {topicsStatus === "loading" && (
          <div className="hero min-h-[calc(100vh-65.5px-68px)] bg-base-200">
            <button className="btn-xl lower loading btn">loading</button>
          </div>
        )}
        {/* {topics?.map((topic: Topic, index: number) => {
          return (
            <button className="btn-sm btn gap-2" key={index}>
              {topic.title}
              {topic.createdAt}
              <span className="badge-error badge">
                <IoMdTrash
                  className="text-xl"
                  onClick={() => {
                    deleteTopic.mutate({
                      id: topic.id,
                    });
                  }}
                />
              </span>
            </button>
          );
        })} */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Topic</th>
                <th>Created at</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {topics?.map((topic: Topic, index: number) => {
                return (
                  <tr key={index} className="hover">
                    <th>{index + 1}</th>
                    <td>{topic.title}</td>
                    <td>
                      {moment(topic.createdAt.toISOString()).format(
                        "MMMM D, YYYY [at] h:mm A"
                      )}
                    </td>
                    <td>
                      <IoMdTrash
                        className="text-xl"
                        onClick={() => {
                          deleteTopic.mutate({
                            id: topic.id,
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              })}

              {topics && topics.length === 0 ? (
                <td colSpan={4} className="text-center  text-error">
                  No tags available
                </td>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopicPage;
