import { createContext, useContext } from "react";
import { ReactNode } from "react-markdown/lib/ast-to-react";
import { useAuth } from "~/store/authStore";
import { api } from "~/utils/api";
import { Topic } from "@prisma/client";

// type TopicContextType = {
//   topics: Topic[] | undefined;
//   topicsStatus: string;
//   createTopic: (
//     data: Omit<Topic, "id" | "createdAt" | "updatedAt">,
//     options?: any
//   ) => Promise<any>;
//   deleteTopic: (id: number, options?: any) => Promise<any>;
// };

export const TopicContext = createContext();

export const TopicContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data } = useAuth();
  const {
    data: topics,
    status: topicsStatus,
    refetch: refetchTopics,
  } = api.topic.getAll.useQuery(undefined, {
    enabled: data?.user !== undefined,
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  const deleteTopic = api.topic.delete.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });

  return (
    <TopicContext.Provider
      value={{ topics, topicsStatus, createTopic, deleteTopic }}
    >
      {children}
    </TopicContext.Provider>
  );
};

export const useTopicContext = () => {
  return useContext(TopicContext);
};
