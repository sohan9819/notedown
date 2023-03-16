import create from "zustand";

type User = {
  name: string;
  email: string;
  image: string;
  id: string;
};

type Data = {
  user: User;
  expires: string;
};

type Status = "authenticated" | "loading" | "unauthenticated";

type Auth = {
  data: Data | null;
  status: "authenticated" | "loading" | "unauthenticated";
};

interface useAuthProps extends Auth {
  setData: (data: Data) => void;
  setStatus: (status: Status) => void;
  setAuth: ({ data, status }: useAuthProps) => void;
}

export const useAuth = create<useAuthProps>((set) => ({
  data: {} as Data,
  status: "loading",
  setData: (data: Data) => set({ data }),
  setStatus: (status: Status) => set({ status }),
  setAuth: ({ data, status }: useAuthProps) => set({ data, status }),
}));

/* 
{
    user: {
      user: {
        name: 'SnickerDev',
        email: 'sohanshetty2001@gmail.com',
        image: 'https://avatars.githubusercontent.com/u/64985447?v=4',
        id: 'clf8dtltk0000t80cuidc9psw'
      },
      expires: '2023-04-13T15:02:06.870Z'
    },

*/
