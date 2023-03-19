import { createContext, useContext, useState } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";
import { useAuth } from "~/store/authStore";
import { api } from "~/utils/api";
import { Topic } from "@prisma/client";

type TopicsStatus = "loading" | "error" | "success";

type CreateTopicProps = {
  title: string;
};

type TopicIdProp = {
  id: string;
};

type TopicContextType = {
  topicsList: Topic[];
  topicsListStatus: TopicsStatus;
  createTopic: (topic: CreateTopicProps) => void;
  deleteTopic: (topicId: TopicIdProp) => void;
  getTopicById: (topicId: TopicIdProp) => Topic | undefined;
};

export const TopicContext = createContext<TopicContextType>(
  {} as TopicContextType
);

export const TopicContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [topicsList, setTopicsList] = useState([] as Topic[]);
  const [topicsListStatus, setTopicsListStatus] =
    useState<TopicsStatus>("loading");

  const { data } = useAuth();
  const {
    data: topics,
    status: topicsStatus,
    refetch: refetchTopics,
  } = api.topic.getAll.useQuery(undefined, {
    enabled: data?.user !== undefined,
    onSuccess: (data) => {
      console.log(data);
      setTopicsList(data);
      setTopicsListStatus("success");
    },
    onError(err) {
      console.error(err.message);
      setTopicsListStatus("error");
    },
  });

  const createTopicQuery = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const deleteTopicQuery = api.topic.delete.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const createTopic = (topic: CreateTopicProps) =>
    void createTopicQuery.mutate(topic);

  const deleteTopic = (topicId: TopicIdProp) =>
    void deleteTopicQuery.mutate(topicId);

  const getTopicById = ({ id }: TopicIdProp) =>
    topicsList.find((topic) => id === topic.id);

  return (
    <TopicContext.Provider
      value={{
        topicsList,
        topicsListStatus,
        createTopic,
        deleteTopic,
        getTopicById,
      }}
    >
      {children}
    </TopicContext.Provider>
  );
};

export const useTopicContext = () => {
  return useContext(TopicContext);
};
